let str = "AirAsia Move";

// str = "AirAsia NOT Move"

// let strTrim = str.trim();
// console.log("String before trimming is " + str);
// console.log("String after trimming is " + strTrim);

// console.log(str.includes("Move"));


let splitStr = str.split(" ");
console.log(splitStr);

for(let i = 0; i < splitStr.length; i++){
    console.log(splitStr[i]);
}