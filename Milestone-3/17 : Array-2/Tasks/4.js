/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

const statement = 'I am a hard working person';
const words = statement.split(' ');
let reversedSentence = [];

for (let i = words.length - 1; i >= 0; i--) {
  reversedSentence.push(words[i]);
}

console.log(reversedSentence.join(' '));

