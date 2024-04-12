let random = Math.random();

let obj={
    "+": "-",
    "-": "+",
    "*": "**"
}

let a = parseInt(prompt("enter operand one"));
let b = prompt("enter operator");
let c = parseInt(prompt("enter operand two"));

if(random < 0.1){
    b=obj[b];
    alert(`result is ${eval(`${a} ${b} ${c}`)}`);
}

else{
    alert(`result is ${eval(`${a} ${b} ${c}`)}`);
}