import { useState } from "react";

function Date(props) {
  const [date, setDate] = useState("");

  function dateHandler(event) {
    setDate(event.target.value);
    console.log(date);


  }
  return (
    <div>
      <input onChange={dateHandler} type="date" min="2003-08-02"></input>
    </div>
  );
}

export default Date;
