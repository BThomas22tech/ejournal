import Form from './components/Form'
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <h1 className='d-flex justify-content-center pt-4'>Virtue Journal</h1>
        <h4 className='d-flex justify-content-end pr-2'>virtue score:</h4>

        {/* maybe add text to speech?*/}
        <div className='d-flex flex-column align-items-center'>
          <Form />

          <p>Get response from AI:</p>
        </div>
      </div>

    </>
  );
}

export default App;
