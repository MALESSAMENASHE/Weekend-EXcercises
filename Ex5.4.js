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
    for (let [...word] of str) {
      for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
          word[i] = word[i].toUpperCase();
        }
      }
      arr.push(word.join(""));
    }
    return arr.join(" ");
}
let sentence = "Weird string case" ;
console.log(toWeirdCase(sentence))
