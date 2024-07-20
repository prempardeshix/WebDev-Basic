import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/labs");
  }

  function backHandler() {
    navigate(-1);
  }
  return (
    <div><br /> 
      <div className="red">This is Support Page</div>
      <br />
      <button class="border-2 border-black p-[2px]" onClick={clickHandler}>
        Move to Labs Page
      </button>{" "}
      <br /> <br />
      <button class="border-2 border-black p-[2px]" onClick={backHandler}>
        Go back
      </button>
    </div>
  );
};

export default Support;
