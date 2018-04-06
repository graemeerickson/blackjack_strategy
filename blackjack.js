// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
// ctx.rect(50,50,100,150);
// ctx.stroke();

var dealerCard = {};
var playerHand = {};
var playerCard1 = {};
var playerCard2 = {};

const calcDealerHand = () => {
   dealerCard = deck[Math.floor(deck.length * Math.random())];
   dealerCard.played = true;
   console.log(`Dealer card: ${dealerCard.rank} of ${dealerCard.suit}`);
}

const calcPlayerHand = () => {

   // consider replacing with .filter
   playerHand.playerCard1 = deck[Math.floor(deck.length * Math.random())]
   while (playerHand.playerCard1.played !== false) {
      playerHand.playerCard1 = deck[Math.floor(deck.length * Math.random())]
   }
   playerHand.playerCard1.played = true;

   playerHand.playerCard2 = deck[Math.floor(deck.length * Math.random())]
   while (playerHand.playerCard2.played !== false) {
      playerHand.playerCard2 = deck[Math.floor(deck.length * Math.random())]
   }
   playerHand.playerCard2.played = true;

   // check for an ace, else check for a pair, else hand is standard
   if ((playerHand.playerCard1.rank === 'A' || playerHand.playerCard2.rank === 'A') && (playerHand.playerCard1.rank !== playerHand.playerCard2.rank)) {
      playerHand.playerHandType = 'ace';
   } else if ((playerHand.playerCard1.rank === playerHand.playerCard2.rank) && (playerHand.playerCard1.value === playerHand.playerCard2.value) && ((typeof playerHand.playerCard1.rank === 'number' && typeof playerHand.playerCard2.rank === 'number') || playerHand.playerCard1.rank === 'A')) {
      playerHand.playerHandType = 'pair';
   } else {
      playerHand.playerHandType = 'standard';
   }

   console.log(`Player card 1: ${playerHand.playerCard1.rank} of ${playerHand.playerCard1.suit}`);
   console.log(`Player card 2: ${playerHand.playerCard2.rank} of ${playerHand.playerCard2.suit}`);
   console.log(`Player hand type: ${playerHand.playerHandType}`);
}

const getCorrectMove = (dealerPlayerHandKey) => {
   let correctMove = oddsTable[dealerPlayerHandKey].correctMove;
   console.log(`Correct move: ${correctMove}`);
   return correctMove;
}

const determineCorrectMove = (userDecision) => {
   let dealerHandSummary;
   let playerHandSummary;
   switch (playerHand.playerHandType) {
      case 'standard':
         playerHandSummary = playerHand.playerCard1.value + playerHand.playerCard2.value;
         break;
      case 'ace':
         // ensure the ace is always the first one listed in playerHandSummary
         if (playerHand.playerCard1.rank === 'A') {
            playerHandSummary = playerHand.playerCard1.rank + playerHand.playerCard2.rank;
         } else {
            playerHandSummary = playerHand.playerCard2.rank + playerHand.playerCard1.rank;
         }
         break;
      case 'pair':
         playerHandSummary = playerHand.playerCard1.rank + playerHand.playerCard2.rank;
         break;   
   }
   playerHand.sum = playerHandSummary;
   let dealerPlayerHandKey = dealerCard.rank + playerHandSummary;
   console.log(`dealerPlayerHandKey: ${dealerPlayerHandKey}`);
   let correctMove = getCorrectMove(dealerPlayerHandKey);
   if (userDecision === correctMove) {
      console.log("Correct decision");
      $('#notify-user').append(`<h2>Correct decision</h2>`);
   } else {
      console.log("Wrong decision");
      $('#notify-user').append(`<h2>Wrong decision</h2>`);
   }
}

const getUserAction = (e) => {
   let userDecision = e.target.value;
   determineCorrectMove(userDecision);
}

const showBoard = () => {
   $('#dealer-card').append(`<h2>Dealer card: ${dealerCard.rank}</h2>`);
   $('#player-cards').append(`<h2>Player cards: ${playerHand.playerCard1.rank}, ${playerHand.playerCard2.rank}</h2>`);
   $('#player-actions').append(`<button value="H">HIT</button>`);
   $('#player-actions').append(`<button value="D">DOUBLE</button>`);
   $('#player-actions').append(`<button value="SP">SPLIT</button>`);
   $('#player-actions').append(`<button value="S">STAND</button>`);
   $('#player-actions').click(getUserAction);
}

$(document).ready(function() {
   // let newDeck = new deck; // initialize new deck
   calcDealerHand();
   calcPlayerHand();
   showBoard();
});