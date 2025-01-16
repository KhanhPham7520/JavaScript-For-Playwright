let checkPrimeNum = 213;
let isPrimeNum = false;

if(checkPrimeNum % 2 != 0){
    if(checkPrimeNum >= 1 && checkPrimeNum % 1 == 0){
        isPrimeNum = true;
    }
}

if(isPrimeNum == true){
    console.log("Đây là số nguyên tố")
}else{
    console.log("Đây không phải là số nguyên tố")
}