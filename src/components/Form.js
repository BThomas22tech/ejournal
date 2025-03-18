import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const storedItems = JSON.parse(localStorage.getItem('submittedText')) || []
  const [submittedText, setSubmittedText] = useState(storedItems);
  const [text, setText] = useState("");

  useEffect(() =>{
    localStorage.setItem('submittedText',JSON.stringify(submittedText))
    console.log(localStorage)

  },[submittedText])


  const textChangeHandler = (i) => {
    setText(i.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = { text: text, id: uuidv4() };
    setSubmittedText((prevSubmittedText) => [...prevSubmittedText, newItem]);
    setText("");
  };

  

  return (
    <>
      <form onSubmit={handleAdd}>
        <div className="form-group">
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
        <ul>
          {submittedText.map((item) => (
            <li className="list-unstyled" key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default Form;
