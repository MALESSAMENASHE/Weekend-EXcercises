// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
    let arr= [];
    const str =string.split(" ");
    for(let i=0;i<str.length;i++){
        for(let j=0;j<6;j++){
        if(j%2==0){
            str[i][j]=str[i][j].toUpperCase(); 
        }arr.push(str)
    }
    }
  return str.join(' ') ;

}
let sentence = "Weird string case" ;
console.log(toWeirdCase(sentence))

// function toWeirdCase(string){
//     let  newString = [];
//     for( let i in string ) {
//         if(i%2 == 0){
//             newString.push(string[i].toUpperCase());
//         } else {
//             newString.push(string[i].toLowerCase());
//         }
//     }
//     return newString.join('');
// };

// console.log(toWeirdCase('Weird string case'));

