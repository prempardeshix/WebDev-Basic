import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about");
  }

  function backHandler() {
    navigate(-1);
  }

  return (
    <div>
      <br />
      <div className="red">This is Labs Page</div>
      <br />
      <button class="border-2 border-black p-[2px]" onClick={clickHandler}>
        Move to About Page
      </button>{" "}
      <br /> <br />
      <button class="border-2 border-black p-[2px]" onClick={backHandler}>
        Go back
      </button>
    </div>
  );
};

export default Labs;
