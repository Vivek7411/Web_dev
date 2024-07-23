let arr = [15,2,3,4,6,7];
let b=[1,200,3,54];
let c = ['vivek','sumit','ayush'];

// console.log(arr);
// console.log(arr.toString());
// console.log(arr.join(' and '));
// arr.pop();
// console.log(arr);
// arr.push("vivek");
// console.log(arr);

// console.log(arr.concat(b));

// // console.log(arr);

// // arr.sort();
// c.sort();

// console.log(c);
// console.log(arr.sort());          // sort only sorts alfabaticaly by default.
// console.log(b.sort());

// arr.splice(1,2,200,220);
// c.splice(1,1,'piyush');

// console.log(arr);
// console.log(c);

// arr.slice(1,4);

// console.log(arr); // og not CHANGED.
// console.log(arr.slice(1,3));

// arr.reverse();

// console.log(arr); // CHANGES the og array




// i belive order must be same allways in parametters.
// arr.forEach((value,index,arr)=>{
    // console.log(index,value,arr);  
// })

// for (const key in arr) {
//     if (Object.hasOwnProperty.call(arr, key)) {
//         const element = arr[key];
//         console.log(key, element);
        
//     }
// }

// for (const iterator of arr) {
//     console.log(iterator);
// }

let newarr = arr.map((e)=> {
    return e**2;
});


// let arr2= arr.map((e)=>{      // that why filter and map has different uses.
//     if(e<6){
//         return true;
//     }

//     else
//     {
//         return false;
//     }
// });

let arr2= arr.filter((e)=>{
    if(e<6){
        return true;
    }

    else
    {
        return false;
    }
});

// let newarr = arr.map(e**2);
console.log(newarr);
console.log(arr2);

let arr3=[1,2,3,4,5];

const red = (a,b)=>{
    return a+b;
}

console.log(arr3.reduce(red));