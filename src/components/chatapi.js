import { OpenAI } from 'openai'
import React, { useEffect, useState, useRef } from 'react'

const OpenAPI = ({ submittedText, onScore}) => {
    const [response, setResponse] = useState('');
    const requestInProgress = useRef(false)
    const lastSentItemRef = useRef(null)

    useEffect(() => {
        const latestItem = submittedText[submittedText.length - 1]
        if (submittedText.length === 0) return
        
        if (!latestItem || !latestItem.text || latestItem.text.trim() === '') return;

        if (lastSentItemRef.current === latestItem.id) {
            console.log("skipping duplicate")
            return
        }
        if (requestInProgress.current) {
            console.log("Skipping request - another request is in progress");
            return;
        }

        const token = process.env.REACT_APP_GITHUB_TOKEN
        const systemMessage = `You are the voice of Odin, the All-Father, commenting on the actions of a mortal child named Ezra who is about to turn 7 years old. You're writing entries in a cosmic diary that judges his virtue. You have a stern, judgmental, but occasionally amused tone when observing this young mortal's behavior.

When responding to Ezra:
1. Address him as "young Ezra" or with similar divine condescension appropriate for a child
2. Begin by expressing your divine assessment of his actions
3. Award or deduct points from his "virtue score" based on your judgment
4. Give a score change from -10 (extremely dishonorable) to +10 (worthy of Valhalla)
5. Include occasional references to Norse mythology and Asgard
6. Maintain a formal but slightly exasperated tone, as if you've seen thousands of years of mortal children's folly
7. End with age-appropriate wisdom or a warning about his current path
8. Remember he is a child approaching his 7th birthday, so adjust your expectations and language accordingly
Keep responses under 400 characters.
Give updated Virtue Score first `;

        const fetchData = async () => {
            requestInProgress.current = true;
            try {
                const openai = new OpenAI({
                    baseURL: "https://models.inference.ai.azure.com",
                    apiKey: token,
                    dangerouslyAllowBrowser: true
                })

                const response = await openai.chat.completions.create({
                    messages:
                        [
                            { role: "system", content: systemMessage},
                            { role: "user", content: latestItem.text.trim() }
                        ],
                    model: "gpt-4o",
                    temperature: 1,
                    max_tokens: 4096,
                    top_p: 1
                })
                console.log(response.choices[0].message.content)
                let content = response.choices[0].message.content
// *******virtue number here*********
                let matchNumber = content.match(/[-+]\d+/)
                let virtueNumber = matchNumber[0]
                onScore(virtueNumber)
                console.log(virtueNumber,"virtue number")
                setResponse(response.choices[0].message.content);
                lastSentItemRef.current = latestItem.id
            }
            catch (error) {
                console.error("Error", error)
                if (error.response) {
                    console.error("Response error details:", error.response.data);
                }
                setResponse("failed to fetch data" + error.message)
            } finally {
                // Clear the flag when the request is done
                requestInProgress.current = false;
            }
        };
        fetchData()
    }, [submittedText,onScore])

    return (
        <>
            {response}
        </>
    )
}
export default OpenAPI