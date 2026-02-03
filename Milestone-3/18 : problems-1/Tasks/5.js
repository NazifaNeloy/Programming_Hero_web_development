/*
Task-5:
Generate a random number between 10 to 20.
*/

function randomNumber(a, b) {
  return a + Math.floor(Math.random() * (b - a + 1));
}
console.log(randomNumber(10, 20));