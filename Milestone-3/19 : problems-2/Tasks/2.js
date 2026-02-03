const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(arr) {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }

    return smallest;
}

console.log(smallestName(friends)); 
