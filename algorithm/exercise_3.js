let number = 123
let numberStr = number.toString().split("");
let numbers = numberStr.map(Number); // [ 1, 2, 3 ]

console.log(numbers.length)
for(let i = 0; numbers.length(); i++){
    console.log(numbers[i]);
}

