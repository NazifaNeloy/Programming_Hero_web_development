const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(arr) {
    let lowest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }

    return lowest;
}

console.log(lowestNumber(heights2)); 
