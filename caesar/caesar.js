const caesar = function(toEncrypt, shift) {
    let cyphered = '';
    let characters = toEncrypt.split('');
    for (let char of characters){
        cyphered += oneLetter(char, shift);
    }
    console.log(cyphered);
    return cyphered;
}

function oneLetter(letter, shift){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let upperCase;
    let testLetter = letter;
    //turn it lowercase for now, can determine using testLetter if its a capital.
    letter = letter.toLowerCase();
    if(alphabet.indexOf(letter) < 0){
        //its anything other than a letter
        return letter;
    }
    if (testLetter === testLetter.toUpperCase()){
        upperCase = true;
    }else if( testLetter === testLetter.toLowerCase()){
        upperCase = false;
    }
    
    let preShiftIndex = alphabet.indexOf(letter);
    let index = ((preShiftIndex + shift) % 26 ) ;
    //this is a workaround for modulo operator with negative numbers.
    //javascripts modulo behaves differently than the google calculator...
    if(index < 0){
        index = 26 + index;
        console.log(index);
    }
    let shifted = alphabet[index];
    if(upperCase){
        return shifted.toUpperCase();
    }else {
        return shifted;
    }

}


module.exports = caesar
