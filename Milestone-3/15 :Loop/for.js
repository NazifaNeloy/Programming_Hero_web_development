const numbers = [12, 98, 45, 63, 21, 72, 52, 81, 19];

console.log(numbers);

for(const num of numbers){
     console.log(num);
 }



const fruits = ['orange', 'apple', 'banana', 'jackfruit', 'watermelon'];
for (const fruit of fruits) {
    console.log(fruit);
    console.log('I want to eat');
}


//sum
let sum = 0; 

for(let i = 11; i<=20; i++){    
    sum = sum + i;
    console.log(i);
}

console.log('sum of numbers from 11 to 20 is', sum);



/**
 * for(    ;    ;    ){
 * }
 * 
 * 
 * for( first part ; second part ; third part){
    loop statement
}
 * 
 *
 * 
 * for (loop variable declaration ; loop condition) 
*/
// let num = 0; // loop variable
// while(num < 5) {  // loop condition
//     console.log(num); // loop statement
//     num++; // loop variable change
// }

for(let num = 0; num < 5; num++){
    console.log(num);
}