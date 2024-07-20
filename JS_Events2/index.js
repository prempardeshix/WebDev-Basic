let container = document.querySelector("#wrapper");

for (i = 0; i < 10; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para ";
  container.appendChild(newElement);

  let innerSpan = document.createElement("span");
  innerSpan.textContent = i + 1;
  newElement.appendChild(innerSpan);
}

function printer(event) {
  if (event.target.nodeName === "SPAN") console.log(event.target.textContent);
}

container.addEventListener("click", printer);
