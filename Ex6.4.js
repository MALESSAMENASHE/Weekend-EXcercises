// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// islsogram("Dermatoglyphics") ==true
// islsogram("aba") ==false
// islsogram("") ==false // -- ignore letter case


function isogram(word){
    
    const str= word.toUpperCase().split('');
    

    let sortedArr = str.sort((a, b) => {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      });
      console.log(sortedArr);
    for (var i = 0; i < sortedArr.length; i++){
        for (var j = i+1; j < sortedArr.length; j++) {
            if (sortedArr[i] === sortedArr[j]){
            return false;
            }
                      
            }
      
        }
        return true; 
    }


  const word ='Dermmatoglyphics';
  console.log(isogram(word))