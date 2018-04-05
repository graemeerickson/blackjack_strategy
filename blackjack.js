// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
// ctx.rect(50,50,100,150);
// ctx.stroke();

const calcDealerHand = () => {
   let dealerCard = deck[Math.floor(deck.length * Math.random())];
   dealerCard.played = true;
   console.log(`Dealer card: ${dealerCard.rank} of ${dealerCard.suit}`);
}

const calcPlayerHand = () => {
   let playerHand = [];
   let playerCard1 = {};
   let playerCard2 = {};
   let playerHandType;

   // consider replacing with .filter
   while (playerCard1.played !== false) {
      playerCard1 = deck[Math.floor(deck.length * Math.random())]
   }
   playerCard1.played = true;

   while (playerCard2.played !== false) {
      playerCard2 = deck[Math.floor(deck.length * Math.random())]
   }
   playerCard2.played = true;

   playerHand.push(playerCard1);
   playerHand.push(playerCard2);
   console.log(`Player card 1: ${playerCard1.rank} of ${playerCard1.suit}`);
   console.log(`Player card 2: ${playerCard2.rank} of ${playerCard2.suit}`);

   // check for an ace, else check for a pair, else hand is standard
   if ((playerHand[0].rank === 'ace' || playerHand[1].rank === 'ace') && (playerHand[0].rank !== playerHand[1].rank)) {
      playerHandType = 'ace';
   } else if ((playerHand[0].rank === playerHand[1].rank) && (playerHand[0].value === playerHand[1].value) && ((typeof playerHand[0].rank === 'number' && typeof playerHand[1].rank === 'number') || playerHand[0].rank === 'ace')) {
      playerHandType = 'pair';
   } else {
      playerHandType = 'standard';
   }
   playerHand.push(playerHandType);
   console.log(`Player hand type: ${playerHand[2]}`);
}

const determineCorrectMove = () => {
   
}

$(document).ready(function() {
   // let newDeck = new deck; // initialize new deck

   calcDealerHand();
   // showDealerHand();
   calcPlayerHand();
   // showPlayerHand();
   determineCorrectMove();
});