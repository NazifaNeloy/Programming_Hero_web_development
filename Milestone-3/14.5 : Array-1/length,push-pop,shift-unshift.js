//length
const numbers = [1, 5, 66, 11, 45, 65, 65, 88, 11, 45, 65, 65, 88, 15];
console.log(numbers.length);



//pop
const friendss = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
// friends.push('khailam');
console.log(friendss)

const out1 = friendss.pop();
console.log(friendss);
const out2 = friendss.pop();
console.log(friendss);
console.log(out1, out2);


//push-pop

const ages = [];
const numberss = [12, 87, 98, 45];

console.log(numberss);
numberss.push(44);
numberss.push(65);
numberss.push(98, 11, 9);
console.log(numberss);


//Shifr-unshift
const friendsss = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
console.log(friendsss);
friendsss.shift();
console.log(friendsss);

friendsss.unshift('ghumailam')
console.log(friendsss)