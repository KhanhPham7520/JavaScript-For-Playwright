const arr1 = [10, 15, 20];

const arr2 = ["Playwright", "Vietnam"];

var mixedArr = ["Playwright", 10, true , null, {
id : 1,
    name : "Alex"
}];

console.log(arr1);
console.log(arr2);
console.log(mixedArr);


// lấy độ dài mảng
const arr = [20,50, 30, 40];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//lấy từng phần tử trong mảng
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);


// thêm phần tử vào đầu mảng
const arr3 = [20,50];
arr3.unshift(10);
console.log("Array 3 -> " + arr3);

// xóa phần tử đầu mảng
const arr4 = [20,50];
arr4.pop(arr4);
console.log("Array 4 -> " + arr4);