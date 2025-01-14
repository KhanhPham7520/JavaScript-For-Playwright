/**
Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. 
Hãy kiểm tra xem tất cả các điểm số đều lớn hơn 70 hay không.
 */

let scoreArr = [85, 90, 78, 79];

let scoreArrSize = scoreArr.length
let countScore = 0;

for(let i = 0; i < scoreArr.length; i++){
    if(scoreArr[i] >= 70){
        countScore++;
    }
}

if(countScore == scoreArrSize){
    console.log("Tất cả các số đều lớn hơn 70");
}else{
    console.log("Tất cả các số đều không lớn hơn 70");
}
