var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

console.log(flipCard);
console.log(flipCard[0]);
console.log(flipCard[2]);

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
};
};

var flipCard = function(cardId) {
	var cardOne = [0];
cardsInPlay.push(cardOne);
console.log("User flipped queen" + cards[cardId]);

var cardTwo = [2];
cardsInPlay.push(cardTwo);
console.log("User flipped king" + cards[cardId]);
console.log(checkForMatch);
}
