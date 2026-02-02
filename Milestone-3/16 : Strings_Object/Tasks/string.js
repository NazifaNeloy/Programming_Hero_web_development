/*Task-1:
Count how many times a string has the letter a
*/

let str = "javascript is cool";
let count = 0;

for (let ch of str) {
    if (ch === 'a') {
        count++;
    }
}

console.log(count);



/*
Task-2:
Count how many times a string has the letter a or A
*/

let str1 = "JavaScript Is Amazing";
let count1 = 0;

for (let ch of str1) {
    if (ch === 'a' || ch === 'A') {
        count1++;
    }
}

console.log(count1);


/*
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/
let str2 = "education";
str2 = str2.toLowerCase();

let vowels = ['a', 'e', 'i', 'o', 'u'];
let hasAllVowels = true;

for (let v of vowels) {
    if (!str2.includes(v)) {
        hasAllVowels = false;
        break;
    }
}

console.log(hasAllVowels);



/*
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
*/
let str3 = "eXample xylophone";

if (str3.includes('x') || str3.includes('X')) {
    str3= str3.replace(/x/g, 'y').replace(/X/g, 'Y');
}

console.log(str3);




/*
Task-5:
Capitalize Every first Letter of each word in a String
*/

let str4 = "i am learning javascript";
let words = str4.split(" ");
let result = "";

for (let word of words) {
    result += word[0].toUpperCase() + word.slice(1) + " ";
}

console.log(result.trim());
