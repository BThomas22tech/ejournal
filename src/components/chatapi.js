import {OpenAI} from 'openai'
import React, {useEffect,useState} from 'react'

const OpenAPI = () => {
    const [response, setResponse] = useState('');
    useEffect(() => {
        const token = process.env.REACT_APP_GITHUB_TOKEN
        const fetchData = async () =>{

        try{
        const openai = new OpenAI({
        baseURL: "https://models.inference.ai.azure.com",
        apiKey: token,
        dangerouslyAllowBrowser: true 
    })
        
        const response = await openai.chat.completions.create({
            messages: 
            [
                { role: "system", content: ""},
                {role:"user", content:"What is the capital of France"}
            ],
            model: "gpt-4o",
            temperature: 1,
            max_tokens:4096,
            top_p:1
        })
        console.log(response.choices[0].message.content)
        
            setResponse(response.choices[0].message.content);
            
    }catch(error ){
console.error("Error",error)
if (error.response) {
    console.error("Response error details:", error.response.data);
}
setResponse("failed to fetch data")
    } 
    };
    fetchData()
},[])

return (
    <>
        {response}
    </>
    )
}
export default OpenAPI