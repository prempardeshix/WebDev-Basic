// not optimized
const t1 = performance.now();
for (let i = 1; i <= 1000; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para  " + i;

  document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took " + (t2 - t1) + " ms.");

// ---------------------------------------------------------------------------------------------------------------------------------

// optimized
const t3 = performance.now();
let container = document.createElement("div");
for (let i = 1; i <= 1000; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para  " + i;
  container.appendChild(newElement);
}
document.body.appendChild(container);
const t4 = performance.now();
console.log("This took " + (t4 - t3) + " ms.");

// ---------------------------------------------------------------------------------------------------------------------------------

// more optimized using Document Fragment
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 1000; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para  " + i;
  fragment.appendChild(newElement);
}
document.body.appendChild(fragment);
const t6 = performance.now();
console.log("This took " + (t6 - t5) + " ms.");
