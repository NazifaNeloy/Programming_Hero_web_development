const isLeader = true;
// if(isLeader === true)
if(isLeader){
    console.log('leader asche! chair charo');
}
else{
    console.log('vitore dukte dibi na');
}

const isPassed = true;
// if(isPassed === false)
if(!isPassed){
    console.log('toke biya diya dimu');
}
else {
    console.log('tumi amader noyon er moni')
}



/*
1️ Using explicit comparison (not necessary, but possible)
const isLeader = true;

if (isLeader === true) {   // explicit comparison
    console.log('leader asche! chair charo');
} else {
    console.log('vitore dukte dibi na');
}
const isPassed = true;

if (isPassed === false) {   // explicit check for false
    console.log('toke biya diya dimu');
} else {
    console.log('tumi amader noyon er moni');
}




2. Using ternary operator (shorter)
const isLeader = true;
isLeader 
    ? console.log('leader asche! chair charo')
    : console.log('vitore dukte dibi na');

const isPassed = true;
!isPassed 
    ? console.log('toke biya diya dimu')
    : console.log('tumi amader noyon er moni');




3️ Using logical AND / OR (shortest)

If you only want one branch to run, you can do:

const isLeader = true;
isLeader && console.log('leader asche! chair charo'); // only runs if true

const isPassed = true;
!isPassed && console.log('toke biya diya dimu'); // only runs if false




Or, using OR for default:

const isLeader = false;
isLeader || console.log('vitore dukte dibi na'); // runs if false

*/