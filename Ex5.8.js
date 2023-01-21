// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.


function longestWord(string) {
    const str= string.split(' ');
    for (let i=0;i<str.length;i++){
       str[i]= str[i].length;
    }
    let x = str.sort ((a, b) => b-a);
    return x[0];    
       
}

const sentence="given a string of words, return the length of the shortest word";
  console.log(longestWord(sentence));