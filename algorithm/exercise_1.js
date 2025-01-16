let numbers = [0, 7, 2, 9, 4];
let maxNum = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > maxNum){
        maxNum = numbers[i]
    }
}

console.log("Số lớn nhất trong mảng là " + maxNum);

if(maxNum % 2 == 0) {
    console.log("Số lớn nhất là số chẵn")
}else{
    console.log("Số lớn nhất không phải số chẵn")
}


