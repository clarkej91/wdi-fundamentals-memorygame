var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
};
var flipCard = function () {
var cardId = this.getAttribute('data-id',[cardId]);
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
//console.log(cards[cardId].cardImage);
//console.log(cards[cardId].suit);
this.setAttribute('src',cards[cardId].cardImage);
if (cardsInPlay.length >= 2) {
	checkForMatch();
}
};
var createBoard = function () {
	var board = document.getElementById('game-board')
	//console.log(board);
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		console.log(cardElement);
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id',[i]);
		cardElement.addEventListener('click',flipCard);
		//this.setAttribute('src',cards[cardId].cardImage);
		board.append(cardElement);
	}
}
createBoard();



