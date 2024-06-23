function totalSum(add1, add2, add3) {
    let sum = add1 + add2 + add3;
    let average = sum / 3;
    return average;
}
let a, b, c;
a = 10;
b = 20;
c = 30;
let result = totalSum(a, b, c);
console.log("Average is:", result);