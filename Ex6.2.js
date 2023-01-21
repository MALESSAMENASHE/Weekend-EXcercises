// Ex6.2 - Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 #'a’ and 'b'
// "aabBcde" -> 2 #'a' occurs twice and 'b' twice (b° and “B’)
// "indivisibility" -> 1#'i' occurs six times
// "Indivisibilities" -> 2 #'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 #'a' and '1'
// "ABBA" -> 2 #'A' and 'B' each occur twice

const countOnlyVowels = (str) => {
    const voels = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true,
    };
    const arr = str.toLowerCase().split("");
    return arr.reduce((acc, cur) => {
      if (voels[cur]) {
        acc[cur] =( acc[cur]||0)+1;
      }
      return acc;
    }, {});
  };
  
  console.log(countOnlyVowels("The end of the world is coming hahahuheheha"));

  \b[0-9]\s
  \b[a-zA-Z]\s