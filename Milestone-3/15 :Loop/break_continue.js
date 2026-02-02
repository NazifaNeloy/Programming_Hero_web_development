for (let i = 0; i < 150; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
}

console.log('life after break up');

let n = 54;
while (n > 25) {

    if (n < 50) {
        break;
    }
    console.log(n);
    n--;
}

// continue --> skip rest of the code for this iteration
// break --> i am done with this loop. loop end.
/*
for (let i = 1; i < 10; i++) {
    if (i % 2 === 1) {
         continue;
          }
    console.log(i);
}
*/

let a = 0;
while (a < 15) {
    a++;
    if (a % 5 !== 0) {
        continue;
    }
    console.log(a);
    
}