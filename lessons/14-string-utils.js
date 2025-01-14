let str = " JavaScript is awesome ";
console.log(str.trim());
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.includes("Awesome")); // check xem có chứa chuỗi con hay không
console.log(str.replace("awesome", "fun"));

let words = str.split(" "); // chia 1 chuỗi thành array dựa trên các ký tự phân cách
console.log(words);


const emails = "emailA@gmail.com, emailB@gmail.com";

let newEmail = emails.split(",");
console.log(newEmail);

let newEmailSecond = emails.split("a");
console.log(newEmailSecond);

let str1 = "HELLO WORLDS";
console.log(str1.substring(0,1));
console.log(str1.substring(6));
console.log(str1.length);

let strIndexOf = "HELLO WORLD";
console.log(strIndexOf.indexOf("W")); // trả ra vị trí mà bạn muốn tìm