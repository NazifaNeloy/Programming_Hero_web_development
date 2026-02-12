console.log(5 > 10);
console.log(5 < 10);
console.log(5 == 10);
console.log(10 == 10);
console.log(15 >= 10);
console.log(5 >= 10);
console.log(5 <= 10);
console.log(10 <= 10);
console.log(100 <= 10);


console.log(10 == 10);
console.log(10 == 10.1);

var peyaraPrice = 40;
var applePrice = 250;

console.log(peyaraPrice > applePrice);
console.log(applePrice < peyaraPrice);


/**
 * ==
 * ===
 * 
*/

console.log(10 == '10')
/*
Explanation:

JavaScript converts the string '10' into the number 10

Then compares the values

Rule:
== performs type coercion (automatic type conversion).
*/

console.log(10 === '10')

/*
Explanation:

No type conversion

Number (10) and string ('10') are different types

Rule:
=== compares both value and type.
*/

console.log(120 === 'tomato')

console.log(10 != '10')
console.log(10 !== '10')

/*
| Operator | Type Conversion | Compares Type | Result       |
| -------- | --------------- | ------------- | ------------ |
| `==`     | Yes             | No            | Value only   |
| `===`    | No              | Yes           | Value + Type |
| `!=`     | Yes             | No            | Value only   |
| `!==`    | No              | Yes           | Value + Type |


Important Rule (Remember This forever )

Always prefer === and !==
They prevent unexpected bugs caused by type coercion.
*/