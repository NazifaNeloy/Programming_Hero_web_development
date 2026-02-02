/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/


let burgerPrice = 550;  
let drinkPrice;

if (burgerPrice > 500) {
    console.log("Free Coke! 🥤");
    drinkPrice = 0;
} else {
    console.log("Coke costs 30tk");
    drinkPrice = 30;
}

console.log("Total drink price:", drinkPrice, "tk");
