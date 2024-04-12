console.log("start");


function nice(nam){ // nam is let and it default value is in undefined, since datatype is undefined.

    console.log("Hey " + nam + " You are a nice person");
    // nam = "vivek"; // its not cont since assignment is allowed
}

nice('vivek');
nice(23);
nice("vivek nehra");

// console.log(nam); // it in not var since not avilable outside.


function sum(a, b){

    let c;
    c=a+b;
    return c;
}

let ans;

ans=sum(2,2);
console.log(ans);
ans=sum(2,4);
console.log(ans);
ans=sum(2,0);
console.log(ans);
ans=sum(2,'viv');
console.log(ans);