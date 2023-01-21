// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a ="xyaabbbccccdefww"
// b ="xxxxyyyyabklmopq"
// longest(a, b) -> “abcdefklmopqwxy"
// a ="abcdefghijklimnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklimnopqrstuvwxyz"


function organize(a,b){
    const arr= [];
    const longstring=a.concat(b);

    for (let letter of arr) {
        arr.push(letter);
      }
      const all = new Set(longstring);
      return Array.from(all).sort().join("");
    }
    

const word1="dfkjgbdvn"
const word2="sjkbvifegyfoifwe"
console.log(organize(word1,word2))
