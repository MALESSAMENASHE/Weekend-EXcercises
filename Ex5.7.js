// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function shortestWord(string) {
    const str= string.split(' ');
    for (let i=0;i<str.length;i++){
       str[i]= str[i].length;
    }
    let x = str.sort ((a, b) => a-b);
    return x[0];    
       
}

const sentence="given a string of words, return the length of the shortest word";
  console.log(shortestWord(sentence));