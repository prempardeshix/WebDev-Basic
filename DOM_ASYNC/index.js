// setTimeout(() => console.log("THIRD"), 4000);

// function sync() {
//   console.log("FIRST");
// }
// sync();

// console.log("SECOND");
``
// let meraPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am inside promise 1.");
//   }, 5000);
//   resolve(69);
//   // reject(new Error("Yoooo! Error 1 occured."));
// });

// meraPromise1.then((value) => {
//   console.log(value);
// });

let meraPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I am inside promise 2.");
  }, 2500);
  // resolve(2);
  reject(new Error("Yoooo! Error 2 occured."));
});

meraPromise2.catch((error) => console.log("Damn! Reeceived an Error!"));

console.log("0th second.");
