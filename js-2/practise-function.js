function make_avg(arr, n) {
    // Check if the array size is 0 to avoid division by zero
    if (n === 0) {
        return 0;
    }

    // Calculate the sum of the array elements
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += arr[i];
    }

    // Calculate the average
    let average = total / n;
    return average;
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
console.log(make_avg(arr, n));  // Output: 3
