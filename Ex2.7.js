// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7

function result (sign,num,num2){
    let x=num.toString();
    let y=num2.toString();
    let z=x.concat(sign);
    z=z.concat(num2);
    let result = eval(z);
    return result;
}
let a='-';
let b=15;
let c=18;
console.log(result(a,b,c))