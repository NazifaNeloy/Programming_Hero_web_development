/* 1. no keyword in variable name
var false = 45;
var var = 50;
*/


// 2. no space or gap in variable name
//var is happy = false;
var ishappy = true;
var isFalse = false;
console.log("Is happy? " + ishappy);
console.log("Is false? " + isFalse);


/* 3. no quote
var "address" = "kochu khet";
*/

// 4. can not start with a number. but number other than the first letter is allowed
var money = 45;
var money2 = 55;
//var 3money = 88;
console.log("Money: " + money);
console.log("Money2: " + money2);



/*5. name is case sensitive
address
Address
ADDRESS 
addRess
ADDress
*/
var city = "Dhaka";
var City = "Chittagong";
var CITY = "Sylhet";

console.log(city); // Dhaka
console.log(City); // Chittagong
console.log(CITY); // Sylhet



// 6. how to write a long variable name
//var my current home address = "AndorKilkl Bandorbon";
var mycurrenthomeaddress = "AndorKilkl Bandorbon";
var my_current_home_address = "AndorKilkl Bandorbon"; // snake case
var myCurrentHomeAddress = "AndorKilkl Bandorbon"; // camel case
var MyCurrentHomeAddress = "AndorKilkl Bandorbon"; // Pascal case

console.log("Snake Case: " + my_current_home_address);
console.log("Camel Case: " + myCurrentHomeAddress);
console.log("Pascal Case: " + MyCurrentHomeAddress);


