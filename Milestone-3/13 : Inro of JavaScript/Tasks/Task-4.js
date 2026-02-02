/*
### Task-4

What will be the result of the following codes:

**var a = isNaN(‘11’);**

**var a = isNaN(2-10);**

Explain your answers.
*/

var a = isNaN('11');
console.log(a);

var a = isNaN(2 - 10);
console.log(a);


/*
isNaN('11');    // false → string can be converted to number
isNaN('hello'); // true  → cannot convert to number
isNaN(10);      // false → already number
isNaN(NaN);     // true  → special Not-a-Number value
*/