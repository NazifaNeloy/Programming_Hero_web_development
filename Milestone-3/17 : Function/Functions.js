/**
 * Objective: write a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check whether the function  is called properly
 * step-3: set a parameter(s)
 * step-4: pas the parameter(s), check whether parameter is passed in a proper format
 * step-5: do the function tasks (step by step)
*/

//array operation
function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [4, 2, 1, 6];
const sum = sumOfNumbers(numbs);
console.log('Sum of numbers is', sum);




//contional return 

function isEven(number) {
    if (number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

 console.log(isEven(5));
console.log(isEven(110));

function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}

console.log(isOdd(10));
console.log(isOdd(7));




/**
 * create function that will return only the even numbers
 * return the sum of even numbers
*/

function evenNumbersOnly(numbers) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [5, 8, 91, 24, 6];
 const evens = evenNumbersOnly(numbers);
 console.log('even numbers are', evens)

function sumOfEvenNumbers(numbers) {
    let sum1 = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            sum1 = sum1 + number;
        }
    }
    return sum1;
}

const sum1 = sumOfEvenNumbers(numbers);

console.log('sum of the even numbers is', sum1);




//funtion

const price = 45;

// function declare
function fanOffKor(){
    console.log('bosa theke uthe dara');
    console.log('walk towards the switch');
    console.log('click the switch to off of the Fan');
}

// call the function
fanOffKor();


// function name(){
// 
// }

function brushTeeth(){
    console.log('pick up the brush');
    console.log('add paste');
    console.log('2 min goso and goso and fena felo');
}

// call the function
brushTeeth();
console.log('------------')
console.log('------------')
console.log('------------')
console.log('tom tom ta to');
brushTeeth();