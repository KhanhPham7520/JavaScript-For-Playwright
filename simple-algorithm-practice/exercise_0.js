let nameArray = ["Bnna", "Bob", "Charlie", "David"]
let countStartNameAsA = 0;
let nameStr = [];
let empName = [];
let nameStartNotWithA = [];

for(let i = 0; i < nameArray.length; i++){
    if(nameArray[i].startsWith("A")){
        countStartNameAsA++;
        //nameStr.push(nameArray[i]);
    }else{
        nameStartNotWithA.push(nameArray[i])
    }
}

if(countStartNameAsA > 0){
    console.log("Có ít nhất 1 một tên bắt đầu từ chữ A")
}else{
    console.log("Không có tên nào bắt đầu từ chữ A")
    console.log("Đây là danh sách các tên không bắt đầu từ chữ A : " + nameStartNotWithA)
}