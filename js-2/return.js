function add(num1,num2){
    let sum = num1 + num2;
    return sum;
    


}
/* function call */
let total =add(50,40);
//console.log("Sum is :",total);

function singaraQuantity(money){
    let persingaraPrice = 10;
    let perSingaraCount = money/persingaraPrice;
    return perSingaraCount;
}
let mytk =100;
 let totalSigara = singaraQuantity(100);
 console.log("You singara is:",totalSigara);