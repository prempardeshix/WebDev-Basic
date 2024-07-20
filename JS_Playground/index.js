const { reverse } = require("dns");

let arr = [1, 3, 5, 7];

arr.push(9);

// console.log(arr);

// Remove
arr.splice(1, 2);

// Add
arr.splice(1, 0, 3, 5);

arr.unshift(69);

let arr2 = [2, 4, 6, 8];

// let combined = [...arr, ...arr2];
// let combined = [...arr, 11, ...arr2];

// let combined = arr.concat(arr2);

// Creation of copy using spread operator
// let another = [...combined];

// for (value in arr) {
//   console.log(arr[value]);
// }

// arr.forEach((number) => console.log(number));

// let newArr = arr.filter((value) => value > 3);

// let newArr = arr.map((value) => "RollNumber" + value);

// console.log(arr);
// let newArr = arr.map(function (value) {
//   return { key: value };
// });

let sortedArray = arr.sort();
