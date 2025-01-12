const student = {
    "id" : 1,
    "name" : "Alex",
    "age" : 18
};


// loi ich

// const sv1ID = 1;
// const sv1Name = "Alex";
// const sv1Age = 20;

// const sv2ID = 2;
// const sv2Name = "Minh";
// const sv2Age = 22;

// const sv3ID = 3;
// const sv3Name = "Kevin";
// const sv3Age = 23;

// console.log('- Thong tin sinh vien 1 : ${sv1ID}, ${sv1Name}, ${sv1Age}');


const sv1 = {
    'id' : 1,
    'name' : "Alex",
    'age': 20
}

const sv2 = {
    'id' : 2,
    'name' : "John",
    'age': 22
}

const sv3 = {
    'id' : 3,
    'name' : "Kevin",
    'age': 23
}

console.log(`- Thong tin sinh vien 1 : ${sv1.id}, ${sv1.name}, ${sv1.age}`);
console.log(`- Thong tin sinh vien 2 : ${sv2.id}, ${sv2.name}, ${sv2.age}`);
console.log(`- Thong tin sinh vien 3 : ${sv3.id}, ${sv3.name}, ${sv3.age}`);


const student2 = {
    id : 1,
    name : "Alex",
    address : {
        province : "Ha Noi",
        isCapital : true,
        country : "Viet Nam"
    }
}


console.log(student2.address.province);
console.log(student2["address"].isCapital);
console.log(student2["address"]["country"]);