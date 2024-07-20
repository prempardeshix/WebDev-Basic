// console.log("Chaliye shuru karte hain!");

// let rectangle = {
//   length: 5,
//   breadth: 3,

//   draw: function () {
//     console.log("Drawing rectangle.");
//   },
// };

// function factoryCreateRectangle(l, b) {
//   let rectangle = {
//     length: l,
//     breadth: b,

//     draw: function () {
//       console.log("Drawing a rectangle made using factory method.");
//     },
//   };
//   return rectangle;
// }

// let square = factorycreateRectangle(8, 8);
// console.log(square.length);

function ConstructorCreateRectangle() {
  this.length = 1;
  this.breadth = 2;
  this.draw = function () {
    console.log("Drawing a rectangle made using constructor method.");
  };
}

let newSquare = new ConstructorCreateRectangle();

console.log(newSquare.draw());

// Dynamic object editing.
