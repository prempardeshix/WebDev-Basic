import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/support");
  }

  function backHandler() {
    navigate(-1);
  }

  return (
    <div><br /> 
      <h1 className="red">This is About Page</h1><br /> 
      <button class="border-black border-2 p-[2px]" onClick={clickHandler}>
        Move to Support Page
      </button>
      <br /> <br />
      <button class="border-2 border-black p-[2px]" onClick={backHandler}>
        Go back
      </button>
    </div>
  );
};

export default About;
