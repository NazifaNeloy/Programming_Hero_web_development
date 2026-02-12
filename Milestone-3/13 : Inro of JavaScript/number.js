
// Basic numbers
var orangePrice = 20;   
var chocolate = 0.5;    

// Convert string → number
// Using parseInt → converts to integer
var applePrice1 = parseInt('22.5');  

// Using parseFloat → keeps decimal
var applePrice2 = parseFloat('22.5'); 

// Using Number → converts string to number automatically
var applePrice3 = Number('22.5'); 

console.log(applePrice1, applePrice2, applePrice3);

//Sum numbers
var totalPrice = orangePrice + applePrice2;
console.log(totalPrice); 

// Floating point precision
var first = 0.1;
var second = 0.2;

var total = first + second;
console.log(total);          
console.log(total.toFixed(1));
console.log(Number(total.toFixed(1))); 

//Division by zero
const num1 = -50 / 0;
console.log(num1); 


/*JS Rules:

50 / 0 → Infinity

-50 / 0 → -Infinity

0 / 0 → NaN
*/



// Different ways to add/convert numbers
// 1. Direct addition
console.log(orangePrice + applePrice2); 

// 2. Convert string inline
console.log(orangePrice + Number('22.5'));

// 3. Using unary plus
console.log(orangePrice + +'22.5');

// 4. Using Math.round after addition
var first =5.1;
var second =0.3;
console.log(Math.round(first + second)); 




//Handle floating point better
function addFloat(a, b) {
  return Math.round((a + b) * 10) / 10; 
}

console.log(addFloat(0.1, 0.2));
