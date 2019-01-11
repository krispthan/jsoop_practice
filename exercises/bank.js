

class Bank{
	constructor(name,storeAccount){
		this.name= name;
		this.storeAccount = {};
		//takes in the name of the bank.
		//makes an object to store all accounts into
	}
	makeAccount(numOfAccount){
		//makes an account
		//takes in the account number of an account
		if(numOfAccount === this.storeAccount[numOfAccount]){
			return false;
			
		} else{
			 this.storeAccount[numOfAccount] = new Account();
		} 
		return this.storeAccount[numOfAccount];
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed
	}
	checkForAccount(numOfAccount){
        if(!this.storeAccount[numOfAccount]){
			return false;
		} else{
			return true;
		}
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}

	removeAccount(numOfAccount){
		if(!this.storeAccount[numOfAccount]){
			return "account " + numOfAccount +
			 " does not exist";
		} else if(this.storeAccount[numOfAccount].getAmount()) {
			return `account is not empty`;
		}
		 else {
			delete this.storeAccount[numOfAccount];
		}
		return `account ${numOfAccount} deleted`;
	}
	
	
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 
			// 'account <accountNumber> deleted'

	deposit(numOfAccount, numericAmount ){

		if(!this.storeAccount[numOfAccount]){
			return `account does not exist`;
		} else {
			this.storeAccount[numOfAccount].add(numericAmount);
			return `account ${numOfAccount} now has ${this.storeAccount[numOfAccount].getAmount()}`;
		}

	
	}
	withdraw( numOfAccount, amount ){
		if(!this.storeAccount[numOfAccount]){
			return `account does not exist`;
		} else {
		  var withdrawalAmount= this.storeAccount[numOfAccount].remove(amount);
			return 'removed ' + withdrawalAmount + ' from account '+ numOfAccount + '. It now has '+ this.storeAccount[numOfAccount].getAmount();
	}
}
}
 