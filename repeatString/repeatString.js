const repeatString = function(string, repetitions) {
    output ='';
    if(repetitions<0){
        return "ERROR";
    }
    while(repetitions){
        output += string;
        repetitions --;
    }
    return output;

}

module.exports = repeatString
