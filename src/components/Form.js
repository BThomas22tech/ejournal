import React, {useState} from 'react'

const Form = () => {
    const [text, setText] = useState('')
    const [submittedText, setSubmittedText] = useState([])

    const textChangeHandler = (i) =>{
        setText(i.target.value)
        console.log(i.target.value)
      }
      
        const handleSubmit = (event) => {
          event.preventDefault()
          setSubmittedText(text)
          setText('')
        }
      
        return(

            <form onSubmit={handleSubmit} >
            <div className='form-group'>
              <label className="d-block mb-2">
                what you did today:
                <input
                  className="form-control d-block w-100"
                  type="text"
                  value={text}
                  onChange={textChangeHandler}
                />
              </label>
            </div>
            <input type="submit" />
            {submittedText && (<p>you just entered: {submittedText}</p>)}
          </form>
)


}

export default Form