// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Item from "./components/item.js";
import Price from "./components/price.js";
import Card from "./components/Card";
import Form from "./components/form.js";

function App() {
  var [text, setText] = useState("👆Demo");

  function clickHandler() {
    setText("Already Clicked!");
  }

  function deriveData(data) {
    console.log(
      "We have derived data from the child successfully that is: " + data
    );
  }

  return (
    <div className="background">
      <Card>
        Welcome to the Chocolate Factory!
        <Form onDeriveData={deriveData}></Form>
        <Item ethnicity="Russian"></Item>
        <Price rate="8000">
          <button onClick={clickHandler}>{text}</button>
        </Price>
        -------------------------------------------------------------------------------------------------------------
        <Item ethnicity="Latino"></Item>
        <Price rate="6000">
          <button onClick={clickHandler}>{text}</button>
        </Price>
        -------------------------------------------------------------------------------------------------------------
        <Item ethnicity="Japanese"></Item>
        <Price rate="4000">
          <button onClick={clickHandler}>{text}</button>
        </Price>
        -------------------------------------------------------------------------------------------------------------
        <p className="main">🪙Rent</p>
      </Card>
    </div>
  );
}

export default App;
