/**
 * 
Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy
kiểm tra xem tất cả các từ đều có độ dài lớn hơn 3 ký tự hay không.
 * 
 */

let wordArr = ["apple", "banana", "cherry", "date","bicycle"]
let isWordLongerThanThree = false;

for(let i = 0; i < wordArr.length; i++){
    if(wordArr[i].length <= 3){
        isWordLongerThanThree = false;
        break;
    }else{
        isWordLongerThanThree = true;
    }
}

if(isWordLongerThanThree){
    console.log("Tất cả các từ đều có độ dài lớn hơn 3 ký tự");
}else{
    console.log("Tất cả các từ đều có độ dài không lớn hơn 3 ký tự");
}