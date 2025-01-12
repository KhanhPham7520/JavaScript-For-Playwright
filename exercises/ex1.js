/**
a. Khai báo một hằng số number với giá trị là 12.
b. Khai báo một biến name với giá trị là ”my number”
c. Khai báo một biến isEven với giá trị là sai.
d. Kiểm tra nếu number là số chẵn, gán lại isEven thành giá trị đúng.
 */

const num = 12;
var name = "my number";
let isEven = false;

if(num % 2 == 0){
    isEven = true;
    console.log("Your number is even number");
    console.log("Your value of isEven is " + isEven)
}else{
    isEven = false;
    console.log("Your number is even number");
    console.log("Your value of isEven is " + isEven)
}