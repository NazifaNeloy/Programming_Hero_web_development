/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

let i = 1;
while (i <= 60) {
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    i++;
}




/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
let num1 = 61;
while (num1 <= 100) {
    if (num1 % 2 !== 0) {
        console.log(num1);
    }
    num1++;
}


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let num2 = 78;
while (num2 <= 98) {
    if (num2 % 2 === 0) {
        console.log(num2);
    }
    num2++;
}





/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let oddSum = 0;
let n1 = 81;

while (n1 <= 131) {
    if (n1 % 2 !== 0) {
        oddSum += n1;
    }
    n1++;
}

console.log("Sum of odd numbers:", oddSum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let evenSum = 0;
let n2 = 206;

while (n2 <= 311) {
    if (n2 % 2 === 0) {
        evenSum += n2;
    }
    n2++;
}

console.log("Sum of even numbers:", evenSum);



/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

let j = 1;
while (j <= 10) {
    console.log(`5 x ${j} = ${5 * j}`);
    j++;
}

/***

Implement a countdown timer that counts down from 21 to 15.

 */

let count = 21;
while (count >= 15) {
    console.log(count);
    count--;
}
