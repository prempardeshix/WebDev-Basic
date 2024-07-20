import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  // variation 1
  // useEffect(() => {
  //   console.log("UI rendering done.");
  // });

  // variation 2
  // useEffect(() => {
  //   console.log("UI rendering done.");
  // }, []);

  // variation 3
  // useEffect(() => {
  //   console.log("Changed");
  // }, [text]);

  // variation 4 (umnnounting of a component)
  useEffect(() => {
    // add event listener
    console.log("Listener Added");
    return () => {
      console.log("Listener Removed");
    };
  }, [text]);

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
