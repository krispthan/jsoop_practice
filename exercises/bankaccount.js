

class Account{
	constructor(name, intialAmount){
		this.name =name;
		this.amountOfMoney= initialAmount;
	}
	add( amount ){
		this.amount+= amount;
		return this.amount;

		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amountToRemove ){
		if(this.amount < this.amountToRemove){
			this.amount -=amountToRemove;
		} else{
			var returnAmount =this.amount;
			this.amount = 0;
			this.returnAmount;
		}
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.amount;
		//returns the amount in the account
	}
}