const palindromes = function(testWord) {
    //clean up the data
    testWord = testWord.toLowerCase();
    let chars = testWord.split('');
    let noSpaces = chars.filter(char => char != ' ');
    let noPunc = noSpaces.filter(char => (char != '.' && char != ',' && char != '!' && char != '?'));
    let clone = [...noPunc];
    let testReverse = [...clone.reverse()];
    let palindrome = areTheTwoArraysEqual(noPunc, testReverse);
    return palindrome;
}

function areTheTwoArraysEqual(array1, array2) {
    if(array1.length != array2.length){
        return false;
    }else {
        for(let i = 0; i<array1.length; i++){
            if(array1[i] !== array2[i]){
                return false;
            }
        }
        return true;
    }

};

//palindromes('racecar');
module.exports = palindromes
