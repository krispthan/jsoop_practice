
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getsuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		this.cardObjects=[];
		//takes in nothing
		//make storage for your card objects
	}
	addCard( suit, faceValue ){
		this.card.push();
		  getSuit(suit);
		  getFaceValue(faceValue);
		var newCardObject={};
		this.cardObjects.push(newCardObject);
		return this.cardObjects;
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle(){
		var randomizeArray = Math.floor(Math.random() * this.cardObjects.length);
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		return this.cardObjects();
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
	}
	dealCards(numOfCards ){
		this.cardObjects.pop(numOfCards);
		return this.cardObjects.length;
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
	}
}