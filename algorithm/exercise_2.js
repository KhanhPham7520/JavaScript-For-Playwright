let numbers = [10, 15, 20, 25, 30, 15, 45];
let totalOddNumber = 0;
let totalOddCount = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 != 0){
        totalOddNumber += numbers[i]
        totalOddCount++
    }
}

console.log("Tổng các số lẻ trong mảng : "+ totalOddNumber);
console.log("Có " + totalOddCount + " số lẻ trong mảng");