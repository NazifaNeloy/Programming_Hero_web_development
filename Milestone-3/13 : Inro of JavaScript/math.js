/**
 *************************************************************
 *              MATH NEEDED FOR PROGRAMMING
 * ************************************************************
 * 1. Number: +ve, -ve, 0 [ 50, -9, 0]
 * 2. integer: 2, 88, [odd, even]: 2, 4, 897 
 * 3. float: 5.6, 2.2
 * 4. Operation: +, -, *, /
 * 5. More operation: %, [ ]
 * 6. percentage: 5%, 50 taka er 10% koto?
 * 7. Sum: 14, 18, 16
 * 8. Avg: 14, 18, 16
 * 9. Max/Min: 14, 18, 16
 * 10. Series: 
 * 11. Area: Triangle 
 * 12.  
*/


// Number: +ve, -ve, 0

let a = 50;
let b = -9;
let c = 0;

// Integer (odd / even)

let n = 7;

if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Float (decimal numbers)

let x = 5.6;
let y = 2.2;

console.log(x + y); // 7.8

// Operations: + - * /


let a1 = 10, b1= 3;

console.log(a1 + b1); // 13
console.log(a1- b1); // 7
console.log(a1 * b1); // 30
console.log(a1 / b1); // 3.333...



// More operations: % , [ ]
//Modulus % → remainder
console.log(10 % 3); // 1
//Brackets [ ] (priority)
console.log((10 + 5) * 2); // 30




//Percentage
//X% of Y = (X / 100) * Y
//50 taka er 10% koto?

let taka = 50;
let percent = 10;

let result = (percent / 100) * taka;
console.log(result); // 5




// Sum
//Add all numbers.

let arr = [14, 18, 16];
let sum = 0;

for (let num of arr) {
  sum += num;
}

console.log(sum); // 48

// Average (Avg)
// avg = sum / total numbers

let arr1 = [14, 18, 16];
let sum1 = 0;

for (let num of arr1) {
  sum += num;
}

let avg = sum / arr.length;
console.log(avg); // 16

// Max / Min
let arr2 = [14, 18, 16];

let max = Math.max(...arr2);
let min = Math.min(...arr2);

console.log(max); // 18
console.log(min); // 14




//Series. Example: 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Even series
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}



//Area of Triangle
//Area = 0.5 × base × height

let base = 10;
let height = 5;

let area = 0.5 * base * height;
console.log(area); // 25

// (Suggestion to add)
//Power → Math.pow(2, 3)
//Square root → Math.sqrt(16)
//Rounding → Math.floor, Math.ceil

console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16));  // 4
