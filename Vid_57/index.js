console.log("Hello JavaScript");


let length=10;
for (let i = 0; i < length; i++) {
    
    console.log("hello", i , "JS");
}

let obj={
    nam: "vivek",
    kam: "student",
    hoby: "watching movies",
    "current_age": 22
}

// console.log(obj);

for (const key in obj) {
    
        const element = obj[key];
        console.log(key,element);
        console.log(typeof element);
        
}

let namMara = "Vivek Nehra";

for (const i of namMara) {
    console.log(i);
}