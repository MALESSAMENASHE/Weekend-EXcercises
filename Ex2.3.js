// Ex2.3 - Find the Next Perfect Square
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the
// parameter is positive.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

//the solution: take the number and revers square the : if the number are integer add to him one -else : return the number are not  perfect .
let num =121 ;
function findNextSquare (num){
    let roots= Math.sqrt(num);
    if (Number.isInteger(roots)){
        let next = Math.pow(roots+1,2)
        return next; 
    }
return ('-1 since' +num+ 'is not a perfect') 
}

console.log(findNextSquare (num))