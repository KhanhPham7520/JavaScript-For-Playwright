/**
a. Khai báo một hằng số với giá trị kiểu Number bất kỳ.
b. In ra dòng sau ở console:
i. Nếu hằng số lớn hơn 0: “Giá trị bạn nhập là số dương”
ii. Nếu hằng số nhỏ hơn 0: “Giá trị bạn nhập là số âm”
iii. Nếu hằng số = 0: “Giá trị bạn nhập là số 0”
 * 
 */

const numberInput = 12;

if(numberInput > 0){
    console.log("Giá trị của bạn nhập là số dương")
}else if(numberInput < 0){
    console.log("Giá trị của bạn nhập là số âm");
}else if(numberInput == 0){
    console.log("Giá trị của bạn nhập là số 0");
}