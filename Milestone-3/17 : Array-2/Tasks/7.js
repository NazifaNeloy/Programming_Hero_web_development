/*
Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]
*/
const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

arr[1][0] = 99;

console.log(arr);
/*
const arr = [
  [1, 2],
  [99, 4],
  [5, 6]
];

console.log("[");
for (let i = 0; i < arr.length; i++) {
  console.log("  [" + arr[i].join(", ") + "]" + (i < arr.length - 1 ? "," : ""));
}
console.log("]");

*/