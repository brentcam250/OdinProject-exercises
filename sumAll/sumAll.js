const sumAll = function(addend1, addend2) {
    let sum = 0;
    let i;
    let stop;
    if(addend1 < 0|| addend2 <0){
        return "ERROR";
    }
    if(typeof(addend1) != 'number' || typeof(addend2)!= 'number'){
        return "ERROR";
    }
    if(addend1>=addend2){
        i = addend2;
        stop = addend1;
    }
    else{
        i = addend1;
        stop = addend2;
    }
    for(i; i <= stop; i++){
        sum += i;
    }
    return sum;

}

module.exports = sumAll
