function vaatKhao() {
    console.log('hand wash kore aso');
    console.log('boso');
    console.log('plate e khabar dhabar nao');
    console.log('gopat gopat kore khao');
}
 vaatKhao();


function square(number) {
    console.log('value of the number parameter', number);
    const borgo = number * number;
    console.log('square of the given number is: ', borgo);
}
square(4);
console.log('--------------')
square(12);
square(5);
square(405);

function add(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}

add(5, 71);
add(65, 31);


function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}

addAll(3, 4, 6, 7);
addAll(3, 4, 6, 7, 8);






//recap

function add(price1, price2) {
    const total = price1 + price2;
    return total;
}

const bill = add(5, 80);

function add2(price1, price2) {
    return price1 + price2;
}

const bill2 = add(5, 80);

console.log(bill, bill2);

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}

const result = doMath(10, 5);
console.log(result);





//return 

function tenTimes(number) {
    const result = number * 10;
    return result;
}

function cutHalf(number) {
    const half = number / 2;
    return half;
}

tenTimes(5);

const output = tenTimes(5);
console.log('output', output);

const bigNumber = tenTimes(99);






/**
 * for a given string tell me whether it has even number of characters or not
 * 
*/

function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}

 evenSizedString('Dhaka');
evenSizedString('faka');

function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

 console.log(doubleOrTriple(5, true));
 console.log(doubleOrTriple(5, false));


function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

 numberOfElements([12, 45, 78,45,121254,4,5])
//const getAge = person => person.age;

function getAge(person) {
    return person.age;
}

const person = {
    name: 'Neloy',
    age: 22
};

console.log(getAge(person)); 
