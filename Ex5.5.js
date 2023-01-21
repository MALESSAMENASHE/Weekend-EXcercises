// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function initials(string) {
    const str= string.split(' ');

       str[0]= str[0][0]
       str[1]=str[1][0]
  
    return str.join('.');
 
}
const name="Menashe Malessa";
  console.log(initials(name));