import "./form.css";
import Date from "./date.js";
import { useState } from "react";

// 42 min remaining

function Form(props) {
  const [text, setText] = useState("");

  function textHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  function clickHandler(event) {
    event.preventDefault();

    const formData = {
      formText: text,
    };

    console.log(formData);

    props.onDeriveData(formData.formText);

    setText("");
  }

  return (
    <div className="styling">
      <form>
        <label>Date-</label>
        <Date></Date>
        <label>Name-</label>
        <input value={text} onChange={textHandler} type="text"></input>
        <button onClick={clickHandler} className="batan" type="submit">
          Submit
        </button>
      </form>

    </div>
  );
}

export default Form;
