// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(string) {
    const str= string.split(/[-_]+/);
    for (let i=1;i<str.length;i++){
       str[0]= str[0].toLowerCase(); 
       str[i]=str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
  }
    return str.join('');
 
}
  let sentence ="the_stealth_warrior";
  console.log(toCamelCase(sentence));
