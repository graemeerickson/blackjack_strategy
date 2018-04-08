let dealerCard = {};
let playerHand = {};
let moveHistory = [];
let scoreboard;
let gameplayStyle;
const DEFAULT_GAMEPLAY_STYLE = 'all-cards';

const updateLocalStorageHistoryAndScorecard = () => {
   localStorage.setItem('storedBlackjackMoveHistory', JSON.stringify(moveHistory));
   localStorage.setItem('storedBlackjackScoreboard', JSON.stringify(scoreboard));
}

const updateLocalStorageGameplayStyle = () => {
   localStorage.setItem('storedBlackjackGameplayStyle', JSON.stringify(gameplayStyle));
};

const getLocalStorage = () => {
   let moveHistoryStr = localStorage.getItem('storedBlackjackMoveHistory');
   moveHistory = JSON.parse(moveHistoryStr);
   if (moveHistoryStr === null) {
      moveHistory = [];
   } else {
      moveHistory = JSON.parse(moveHistoryStr);
   };

   let scoreboardStr = localStorage.getItem('storedBlackjackScoreboard');
   if (scoreboardStr === null) {
      scoreboard = new Scorecard(0, 0, 0);
   } else {
      scoreboard = JSON.parse(scoreboardStr);
   };

   let gameplayStyleStr = localStorage.getItem('storedBlackjackGameplayStyle');
   if (gameplayStyleStr === null) {
      gameplayStyle = DEFAULT_GAMEPLAY_STYLE;
   } else {
      gameplayStyle = JSON.parse(gameplayStyleStr);
   };
   switch(gameplayStyle) {
      case 'all-cards':
         $('#all-cards').prop('checked',  true);
         break;
      case 'aces-only':
         $('#aces-only').prop('checked',  true);
         break;
      case 'pairs-only':
         $('#pairs-only').prop('checked',  true);
         break;
   };
}

const updateMoveHistory = (dealerCard, playerHand, userDecision, correctMove) => {
   let playerMoveSummary = {
      dealerCard: dealerCard.rank,
      playerCard1: playerHand.playerCard1.rank,
      playerCard2: playerHand.playerCard2.rank,
      userDecision: userDecision,
      correctMove: correctMove
   }
   moveHistory.push(playerMoveSummary);
}

const getRemainingCards = (myDeck) => {
   let remainingDeck = myDeck.filter( (card) => {
      if (playerHand.playerCard1 == null) {
         return !card.played
      } else {
         return !card.played && (card.value + playerHand.playerCard1.value !== 21);
      }
   });
   return remainingDeck;
}

const categorizeHand = () => {
   // check for an ace, else check for a pair, else hand is standard
   if ((playerHand.playerCard1.rank === 'A' || playerHand.playerCard2.rank === 'A') && (playerHand.playerCard1.rank !== playerHand.playerCard2.rank)) {
      return 'ace';
   } else if ((playerHand.playerCard1.rank === playerHand.playerCard2.rank) && (playerHand.playerCard1.value === playerHand.playerCard2.value) && ((typeof playerHand.playerCard1.rank === 'number' && typeof playerHand.playerCard2.rank === 'number') || playerHand.playerCard1.rank === 'A')) {
      return 'pair';
   } else {
      return playerHand.playerHandType = 'standard';
   }
}

const calcDealerHand = (myDeck) => {
   dealerCard = myDeck[Math.floor(myDeck.length * Math.random())];
   dealerCard.played = true;
   return dealerCard;
}

const calcPlayerHand = (myDeck) => {
   let remainingCards = getRemainingCards(myDeck);
   switch (gameplayStyle) {
      case 'all-cards':
         playerHand.playerCard1 = remainingCards[Math.floor(remainingCards.length * Math.random())]
         playerHand.playerCard1.played = true;
         remainingCards = getRemainingCards(myDeck);
         playerHand.playerCard2 = remainingCards[Math.floor(remainingCards.length * Math.random())]
         playerHand.playerCard2.played = true;
         break;
      case 'aces-only':
         let aceCards = remainingCards.filter( (card) => {
            return card.rank === 'A';
         })
         playerHand.playerCard1 = aceCards[Math.floor(aceCards.length * Math.random())]
         playerHand.playerCard1.played = true;
         remainingCards = getRemainingCards(myDeck);
         playerHand.playerCard2 = remainingCards[Math.floor(remainingCards.length * Math.random())]
         playerHand.playerCard2.played = true;
         break;
      case 'pairs-only':
         let potentialPair1 = remainingCards.filter( (card) => {
            if (card.rank !== 'J' && card.rank !== 'Q' && card.rank !== 'K') {
               return card;
            }
         })
         playerHand.playerCard1 = potentialPair1[Math.floor(potentialPair1.length * Math.random())]
         playerHand.playerCard1.played = true;
         remainingCards = getRemainingCards(myDeck);
         let potentialPair2 = remainingCards.filter ( (card) => {
            return card.rank === playerHand.playerCard1.rank;
         })
         playerHand.playerCard2 = potentialPair2[Math.floor(potentialPair2.length * Math.random())]
         playerHand.playerCard2.played = true;
         break;
   };

   playerHand.playerHandType = categorizeHand();
}

const updateScoreboard = (result) => {
   switch (result) {
      case 'win':
         scoreboard.wins += 1;
         break;
      case 'loss':
         scoreboard.losses += 1;
         break;
   }
   scoreboard.winPercentage = Math.round((scoreboard.wins / (scoreboard.wins + scoreboard.losses)) * 100) * 100 / 100 + '%';
}

const getCorrectMove = (dealerPlayerHandKey) => {
   let correctMove = oddsTable[dealerPlayerHandKey].correctMove;
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
            playerHandSummary = playerHand.playerCard1.rank + playerHand.playerCard2.value;
         } else {
            playerHandSummary = playerHand.playerCard2.rank + playerHand.playerCard1.value;
         }
         break;
      case 'pair':
         playerHandSummary = String(playerHand.playerCard1.rank) + String(playerHand.playerCard2.rank);
         break;   
   }
   playerHand.sum = playerHandSummary;
   let dealerPlayerHandKey = String(dealerCard.rank) + playerHandSummary;
   let correctMove = getCorrectMove(dealerPlayerHandKey);
   if (userDecision === correctMove) {
      result = 'win';
      $('#notify-user').append(`<h2>Correct decision</h2>`);
   } else {
      result = 'loss';
      $('#notify-user').append(`<h2>Wrong decision. ${correctMove} on ${playerHand.playerCard1.rank}, ${playerHand.playerCard2.rank} with Dealer ${dealerCard.rank}.</h2>`);
   }
   updateScoreboard(result);
   updateMoveHistory(dealerCard, playerHand, userDecision, correctMove);
   updateLocalStorageHistoryAndScorecard();
}

const changeGameplayStyle = (e) => {
   gameplayStyle = e.target.value;
   updateLocalStorageGameplayStyle();
   dealNewHand();
}

const getUserAction = (e) => {
   userDecision = e.target.value;
   $('#player-actions').off('click');  
   determineCorrectMove(userDecision);
}

const initializeDeck = () => {
   return new Deck();
}

const clearBoard = () => {
   $('#dealer-card').empty();
   $('#player-cards').empty();
   $('#player-actions').empty();
   $('#notify-user').empty();
   $('#new-hand').empty();
   $('#player-actions').off('click');
   $('#new-hand').off('click');
}

const showBoard = () => {
   $('#dealer-card').append(`<h2>Dealer card: ${dealerCard.rank}</h2>`);
   $('#player-cards').append(`<h2>Player cards: ${playerHand.playerCard1.rank}, ${playerHand.playerCard2.rank}</h2>`);
   $('#player-actions').append(`<button value="Hit">HIT</button>`);
   $('#player-actions').append(`<button value="Double">DOUBLE</button>`);
   $('#player-actions').append(`<button value="Split">SPLIT</button>`);
   $('#player-actions').append(`<button value="Stand">STAND</button>`);
   $('#new-hand').append(`<br><br><button value="new-hand">New hand</button>`);
}

const prepareBoard = () => {
   clearBoard();
   showBoard();
}

const dealNewHand = () => {
   let myDeck = initializeDeck();
   calcDealerHand(myDeck);
   calcPlayerHand(myDeck);
   prepareBoard();
   $('#new-hand').click(dealNewHand);
   $('#player-actions').click(getUserAction);
}

$(document).ready(function() {
   getLocalStorage();
   dealNewHand();
   $('input').click(changeGameplayStyle);
});