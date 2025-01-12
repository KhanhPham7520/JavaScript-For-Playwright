const a = 5;
const b = 10;
const c = 5;
const d = '10';

console.log(b == d); // So sánh bằng & So sánh 2 giá trị & Không so sánh về kiểu dữ liệu
console.log(b === d); // So sánh bằng & So sánh 2 giá trị & So sánh về kiểu dữ liệu

console.log(b != d); // trả về false vì không kiểm tra được kiểu dữ liệu
console.log(b !== d); // trả về true vì kiểm tra được kiểu dữ liệu

console.log(a && b); // false

