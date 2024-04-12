// this calculator gives faulty results 10 % of the time



var play = 1;
// let ans;


const add = (a,b)=> {
    console.log(a+b);
}
const sub = (a,b)=> {
    console.log(a-b);
}
const mod = (a,b)=> {
    console.log(a%b);
}
const pow = (a,b)=> {
    console.log(a**b);
}
const div = (a,b)=> {
    console.log(a/b);
}




while(play != 0){
    play = prompt("Enter any key if u want to play or enter 0 if want to quit : ")

    if(play == 0)
    {
        break;
    }

    else{
        let op = prompt('Enter the operation u want to perform');
        var random = Math.random();
        let a = parseInt(prompt("enter operand one : "));
        let b = Number(prompt("enter operand two : "));
        console.log(random);

        if(random <= 0.1){
            switch(op){
                case "+":
                    sub(a,b);
                    break;
                case "-":
                    add(a,b);
                    break;
                case "/":
                    mod(a,b);
                    break;
                case "%":
                    pow(a,b);
                    break;
                case "**":
                    div(a,b);
                    break;
                default:
                    console.log("Error");

            }
        }

        else{

            switch(op){
                case "+":
                    add(a,b);
                    break;
                case "-":
                    sub(a,b);
                    break;
                case "/":
                    div(a,b);
                    break;
                case "%":
                    mod(a,b);
                    break;
                case "**":
                    pow(a,b);
                    break;
                default:
                    console.log("Error");
            }
        }
    }
}

// const ans = 1;
// alert(ans+1);

console.log("Program has ended.");