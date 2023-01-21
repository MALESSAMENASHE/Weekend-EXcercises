// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-VWw-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z anda. .z.

function Mumbling(string) {
    const arr= [];
    const lstr =string.toLowerCase();
    for (let i=0;i<lstr.length;i++){
        let str =string[i].toUpperCase();
        for(let j=0;j<i;j++){
        str +=lstr[i];
        }
        arr.push(str)
    }
    return arr.join('-');    
}

const word="abcd";
  console.log(Mumbling(word));
