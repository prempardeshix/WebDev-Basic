// function detector() {
//   console.log("Click detected!");
// }

// document.addEventListener("click", detector);

// document.removeEventListener("click", detector);

// let content = document.querySelector("#wrapper");

// content.addEventListener("click", (action) => console.log(action));

let chamoy = document.querySelector("h1");
chamoy.addEventListener("click", () => console.log("Chamoy!"));

let links = document.querySelectorAll("a");

let thirdLink = links[2];

thirdLink.addEventListener("click", (action) => {
  action.preventDefault();
  console.log("jaadu ka kamaal hai jaadugar ka jaadu!");
});
