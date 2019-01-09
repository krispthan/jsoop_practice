
class Calculator{
	constructor(){
		this.storeOperator = null;
		this.storeNumbers=[];
		//make storage for the operator and the numbers
	}

	loadOperator(operator ){
		//adds the operator to the next calculation
		//takes in the operator

		this.storeOperator = operator;
		switch(this.storeOperator){
			case "+":
			case "-":
			case "/":
			case "*":
			return true;
			default:
			return false;
		}
	    
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber(num1){
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		if(typeof num1 === 'number' && this.storeNumbers.length < 2){
			this.storeNumbers.push(num1);
			return this.storeNumbers.length;
		} else{
			return false;
		}
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		switch (this.storeOperator){
			case "+":
			this.result= this.storeNumbers[0]+ this.storeNumbers[1];
			break;
			case "-":
			this.result= this.storeNumbers[0]-this.storeNumbers[1];
			break;
			case "/":
			this.result= this.storeNumbers[0]/this.storeNumbers[1];
			break;
			case "*":
			this.result= this.storeNumbers[0] *this.storeNumbers[1];
			break;
			default:
			console.log('Error');
			break;
		}
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
		this.storeNumbers=[];
		return this.result;
	}
	

}

