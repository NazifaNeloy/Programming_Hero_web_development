
// max of two numbers

const disha = 56;
const salman = 95;

if (disha > salman) {
    console.log('Disha will get the strawberry')
}
else {
    console.log('salman will eat the strawberry')
}

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax(96, 79);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max1, max2);

console.log('max of two is:', ultimateMax);



// max of three numbers

const jim = 256;
const tim = 389;
const kim = 168;

if (jim > tim && jim > kim) {
    console.log('JIm is the ultimate boss')
}
else if (tim > jim && tim > kim) {
    console.log('Tim is the boss')
}
else {
    console.log('Kim is the kardashians boss')
}

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
const ultimateBoss = maxOfThree(456, 789, 123);
console.log('ultimate boss is:', ultimateBoss);

const max = Math.max(12,1, 56, 5, 65, 8, 1, 99, 2);
console.log('max isuing Math.max', max)



// find the cheapest price from an array
const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log('cheapest one is: ', cheap);