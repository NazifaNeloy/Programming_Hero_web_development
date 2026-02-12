/*
5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

let combined = arr1.concat(arr2);
let combined2 = arr2.concat(arr1);
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Combined array:", combined);
console.log("Combined array 2:", combined2);