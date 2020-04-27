const removeFromArray = function(numbers, toBeRemoved) {
    if(arguments.length > 2){
        let args = [...arguments];
        for(let i = 1; i<args.length; i++ ){
            let index = numbers.indexOf(args[i]);
            if(index> -1){
                numbers.splice(index, 1);
            }
        }
        return numbers;
    }else{
        let index = numbers.indexOf(toBeRemoved);
        if(index > -1){
            numbers.splice(index, 1);
            return numbers;
        }
    }
   
}

removeFromArray(["hey", 2, 3, "ho"], "hey", 3)

module.exports = removeFromArray
