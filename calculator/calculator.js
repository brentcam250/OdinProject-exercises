function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (inputArray) {
	const sum = inputArray.reduce((total, addend) => {
		return total += addend;
	},0)
	return sum;
}
//takes in an array, need to multiply all things in the array.
function multiply (inputArray) {
	const product = inputArray.reduce((product, factor)=>{
		return product *= factor;
	}, 1)
	return product;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(num) {
	if(num === 0){
		return 1;
	}else {
		return num * factorial(num-1);
	}
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}