import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstHandler(event) {
  //   setFirstName(event.target.value);
  //   // console.log("First Name-" + firstName);
  // }
  // function changeLastHandler(event) {
  //   setLastName(event.target.value);
  //   // console.log("Last Name-" + lastName);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    single: true,
    mode: "",
    favCar: "",
  });
  // console.log(formData);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
    // console.log(formData);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          onChange={changeHandler}
          placeholder="Email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          name="comment"
          placeholder="Comment"
          onChange={changeHandler}
          value={formData.comment}
        />
        <br />
        <br />
        <label htmlFor="single">Single?</label>
        <input
          type="checkbox"
          id="single"
          name="single"
          onChange={changeHandler}
          checked={formData.single}
        />
        <br />
        <br />
        <fieldset>
          <legend>Mode</legend>

          <label htmlFor="Online-Mode">Online-Mode</label>
          <input
            type="radio"
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            onChange={changeHandler}
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline-Mode</label>
          <input
            type="radio"
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            onChange={changeHandler}
            checked={formData.mode === "Offline-Mode"}
          />
        </fieldset>
        <label htmlFor="favCar">Your Favourite Car-</label>
        <select
          name="favCar"
          onChange={changeHandler}
          id="favCar"
          value={formData.favCar}
        >
          <option value="Porsche">Porsche</option>
          <option value="BMW">BMW</option>
          <option value="Koenigsegg">Koenigsegg</option>
          <option value="Mercedes">Mercedes</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
