import Form from './components/Form'
import Counter from './components/Counter'
import OpenAPI from './components/chatapi';
import {useState} from 'react'
import './App.css';

function App() {
  const storedItems = JSON.parse(localStorage.getItem('submittedText')) || []
    const [submittedText, setSubmittedText] = useState(storedItems);

  console.log(submittedText)
  return (
    <>
      <div className='container'>
        <h1 className='d-flex justify-content-center pt-4'>Virtue Journal</h1>
        <div className='d-flex justify-content-end pr-2'> 
          <Counter initialValue={0}/>
        </div>


        {/* maybe add text to speech?*/}
        <div className='d-flex flex-column align-items-center'>
          <Form setSubmittedText={setSubmittedText} submittedText={submittedText}/>

          <p>Get response from AI:</p>
          <OpenAPI submittedText={submittedText} />
        </div>
      </div>

    </>
  );
}

export default App;
