

class RandomGenerator{
	constructor(min, max, randomStorage,string){ 
		this.min= 0;
		this.max= 20;
		this. randomStorage= null;
	

		//takes in the minimum and maximum values
		//if they are not defined, it sets the minimum to 1, and the max to 10
		//makes storage for the random number
	}
	generate(){
		this.randomStorage = (Math.floor(Math.random() * (this.max-this.min+1) + this.min));
	      return this.randomStorage;
		//make a random value between the minimum and maximum values
		//and store the number into the storage from the constructor
	}
	getRange(){
		var minMaxStoreContainer={
			min :this.min,
			max : this.max 
		}
		return minMaxStoreContainer;
		//return an object with min and max, min being the minimum value for the generator, max being the maximum value
		//returns a basic object literal
	}
	getNum(){
		return this.randomStorage;
	}
}