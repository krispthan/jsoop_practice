

class Account{
	constructor(){
		this.amountOfMoney= 0;
	}
	add( amount ){
		this.amountOfMoney+= amount;
		return this.amountOfMoney;

		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amountToRemove ){
		var whatWhatsWithdrawn=0;
		if(this.amountOfMoney < amountToRemove){
			whatWhatsWithdrawn= this.amountOfMoney;
			this.amountOfMoney -=this.amountOfMoney;
		} else{
			whatWhatsWithdrawn=amountToRemove;
			this.amountOfMoney -=amountToRemove;
		}
		 return whatWhatsWithdrawn;
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.amountOfMoney;
		//returns the amount in the account
	}
}