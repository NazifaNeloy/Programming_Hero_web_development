/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 65;        
let isStudent = false;
let fare = 800;      

let ticketFare;

if (age < 10) {
    ticketFare = 0;
    console.log("Children: Free ticket! 🎉");
} else if (isStudent) {
    ticketFare = fare * 0.5;
    console.log("Student Discount: 50% off. Fare:", ticketFare, "tk");
} else if (age >= 60) {
    ticketFare = fare * 0.85;
    console.log("Senior Citizen Discount: 15% off. Fare:", ticketFare, "tk");
} else {
    ticketFare = fare;
    console.log("Regular Fare:", ticketFare, "tk");
}


//Using Ternary Operator (compact)
let age1 = 8;
let isStudent1 = true;
let fare1 = 800;

let ticketFare1= (age1 < 10) ? 0 :
                 (isStudent1) ? fare1 * 0.5 :
                 (age1 >= 60) ? fare1 * 0.85 :
                 fare1;

console.log("Ticket Fare:", ticketFare1, "tk");
