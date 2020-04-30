const fibonacci = function(placeInSeries) {
    let integerPlace = parseInt(placeInSeries);
    if(integerPlace < 0 ){
        return 'OOPS';
    }
    if(integerPlace === 0){
        return 0;
    }else if(integerPlace === 1){
        return 1;
    }else if (integerPlace === 2){
        return 1;
    }else{
        return (fibonacci(integerPlace -1) + fibonacci(integerPlace -2));
    }

}

module.exports = fibonacci
