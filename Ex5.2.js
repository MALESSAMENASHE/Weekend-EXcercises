// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeat_str(num,str){
    let i=1;
    let x=str;
    while(i<num){
        str= str.concat(x);
        i++
    }
    return str;
}

let str="I";
console.log(repeat_str(6,str))
