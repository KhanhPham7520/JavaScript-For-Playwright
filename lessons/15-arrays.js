
// 1. map : tạo ra 1 mảng mới dựa trên phần tử của mảng gốc
let numberMap = [1, 2, 3, 4];
let newNumberMap = numberMap.map(num => num * 2);
console.log(newNumberMap);

// 2. filter(): tạo ra 1 mảng mới chứa các phần tử thỏa mãn điều kiện trong hàm
let numberFilter = [1, 2, 3, 4];
let newNumberFilter = numberFilter.filter(num => num % 2 === 0);
console.log(newNumberFilter);