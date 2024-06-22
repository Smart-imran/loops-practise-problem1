var numbers = [42, 35, 65, 67, 32, 54, 56,66];

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number < 50) {
        continue;
        
    }
    console.log(number);
    
}