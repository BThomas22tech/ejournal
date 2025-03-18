import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`you entered ${text}`)
  }
  return (
    <>
      <div className='container'>
        <h1 className='d-flex justify-content-center pt-4'>Virtue Journal</h1>
        <h4 className='d-flex justify-content-end pr-2'>virtue score:</h4>

        {/* maybe add text to speech?*/}
        <div className='d-flex flex-column align-items-center'>
          <form onSubmit={handleSubmit} >
            <div className='form-group'>
              <label className="d-block mb-2">
                what you did today:
                <input
                  className="form-control d-block w-100"
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </label>
            </div>
            <input type="submit" />
          </form>


          <p>Get response from AI:</p>
        </div>
      </div>

    </>
  );
}

export default App;
