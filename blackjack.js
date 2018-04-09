let dealerCard = {};
let playerHand = {};
let moveHistory = [];
let scoreboard;
let gameplayStyle;
const DEFAULT_GAMEPLAY_STYLE = 'all-cards';
const CARD_WIDTH = 50;
const CARD_HEIGHT = 75;

const updateLocalStorageHistoryAndScorecard = () => {
   localStorage.setItem('storedBlackjackMoveHistory', JSON.stringify(moveHistory));
   localStorage.setItem('storedBlackjackScoreboard', JSON.stringify(scoreboard));
}

const updateLocalStorageGameplayStyle = () => {
   localStorage.setItem('storedBlackjackGameplayStyle', JSON.stringify(gameplayStyle));
};

const getLocalStorage = () => {
   let moveHistoryStr = localStorage.getItem('storedBlackjackMoveHistory');
   moveHistoryStr === null ? moveHistory = [] : moveHistory = JSON.parse(moveHistoryStr);

   let scoreboardStr = localStorage.getItem('storedBlackjackScoreboard');
   scoreboardStr === null ? scoreboard = new Scorecard(0, 0, 0) : scoreboard = JSON.parse(scoreboardStr);

   $('#scorecard-wins').text(scoreboard.wins);
   $('#scorecard-losses').text(scoreboard.losses);
   $('#scorecard-percentage').text(scoreboard.winPercentage);

   let gameplayStyleStr = localStorage.getItem('storedBlackjackGameplayStyle');
   gameplayStyleStr === null ? gameplayStyle = DEFAULT_GAMEPLAY_STYLE : gameplayStyle = JSON.parse(gameplayStyleStr);

   switch(gameplayStyle) {
      case 'all-cards':
         $('#all-cards').addClass('active-tick').siblings().removeClass('active-tick');
         break;
      case 'aces-only':
         $('#aces-only').addClass('active-tick').siblings().removeClass('active-tick');
         break;
      case 'pairs-only':
         $('#pairs-only').addClass('active-tick').siblings().removeClass('active-tick');
         break;
   };
}

const updateMoveHistory = (dealerCard, playerHand, userDecision, correctMove, playerHandType, result) => {
   let playerMoveSummary = {
      dealerCard: dealerCard.rank,
      playerCard1: playerHand.playerCard1.rank,
      playerCard2: playerHand.playerCard2.rank,
      userDecision: userDecision,
      correctMove: correctMove,
      handType: playerHandType,
      result: result
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
      return 'Ace';
   } else if ((playerHand.playerCard1.rank === playerHand.playerCard2.rank) && (playerHand.playerCard1.value === playerHand.playerCard2.value) && ((typeof playerHand.playerCard1.rank === 'number' && typeof playerHand.playerCard2.rank === 'number') || playerHand.playerCard1.rank === 'A')) {
      return 'Pair';
   } else {
      return 'Standard';
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
      case 'Win':
         scoreboard.wins += 1;
         break;
      case 'Loss':
         scoreboard.losses += 1;
         break;
   }
   scoreboard.winPercentage = Math.round((scoreboard.wins / (scoreboard.wins + scoreboard.losses)) * 100) * 100 / 100 + '%';
   $('#scorecard-wins').text(scoreboard.wins);
   $('#scorecard-losses').text(scoreboard.losses);
   $('#scorecard-percentage').text(scoreboard.winPercentage);
}

const getCorrectMove = (dealerPlayerHandKey) => {
   let correctMove = oddsTable[dealerPlayerHandKey].correctMove;
   return correctMove;
}

const summarizePlayerHand = () => {
   switch (playerHand.playerHandType) {
      case 'Standard':
         return playerHand.playerCard1.value + playerHand.playerCard2.value;
         break;
      case 'Ace':
         // ensure the ace is always the first one listed in playerHandSummary
         if (playerHand.playerCard1.rank === 'A') {
            return playerHand.playerCard1.rank + playerHand.playerCard2.value;
         } else {
            return playerHand.playerCard2.rank + playerHand.playerCard1.value;
         }
         break;
      case 'Pair':
         return String(playerHand.playerCard1.rank) + String(playerHand.playerCard2.rank);
         break;   
   };
};

const determineCorrectMove = (userDecision) => {
   let dealerHandSummary;
   let playerHandSummary = summarizePlayerHand();
   playerHand.sum = playerHandSummary;
   let dealerPlayerHandKey = String(dealerCard.rank) + playerHandSummary;
   let correctMove = getCorrectMove(dealerPlayerHandKey);
   if (userDecision === correctMove) {
      result = 'Win';
      $('#notify-user').append(`<h2>Correct - ${correctMove} with ${playerHand.playerCard1.rank}, ${playerHand.playerCard2.rank} and dealer ${dealerCard.rank}</h2>`);
   } else {
      result = 'Loss';
      $('#notify-user').append(`<h2>Wrong - ${correctMove} with ${playerHand.playerCard1.rank}, ${playerHand.playerCard2.rank} and dealer ${dealerCard.rank}.</h2>`);
   }
   updateScoreboard(result);
   updateMoveHistory(dealerCard, playerHand, userDecision, correctMove, playerHand.playerHandType, result);
   updateLocalStorageHistoryAndScorecard();
}

const changeGameplayStyle = (e) => {
   let gameplayStyleText = e.target.text;
   switch (gameplayStyleText) {
      case 'All cards':
         gameplayStyle = 'all-cards';
         break;
      case 'Aces only':
         gameplayStyle = 'aces-only';
         break;
      case 'Pairs only':
         gameplayStyle = 'pairs-only';
         break;
   }
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
   let canvasDealerCard=document.getElementById("canvas-dealer-card");
   let ctx = canvasDealerCard.getContext("2d");
   let screenMidpoint = $("#canvas-dealer-card").parent().width() / 2 - CARD_WIDTH;
   let rectCoordinates = {
      "x": screenMidpoint,
      "y": 0,
      "width": CARD_WIDTH,
      "height": CARD_HEIGHT
   }
   ctx.rect(rectCoordinates.x, rectCoordinates.y, rectCoordinates.width, rectCoordinates.height);
   ctx.stroke();

   $('#player-cards').append(`<h2>Player cards: ${playerHand.playerCard1.rank}, ${playerHand.playerCard2.rank}</h2>`);
   let canvasPlayerCards=document.getElementById("canvas-player-cards");
   ctx=canvasPlayerCards.getContext("2d");
   ctx.rect(0,0,50,75);
   ctx.stroke();
   ctx.rect(55,0,50,75);
   ctx.stroke();
   $('#player-actions').append(`<button type="button" class="btn btn-light" role="button" value="Hit">HIT</button>`);
   $('#player-actions').append(`<button value="Double">DOUBLE</button>`);
   $('#player-actions').append(`<button value="Split">SPLIT</button>`);
   $('#player-actions').append(`<button value="Stand">STAND</button>`);
   $('#new-hand').append(`<button type="button" class="btn btn-primary" value="new-hand">New hand</button>`);
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
   // $('input').click(changeGameplayStyle);
   $('.gameplay-style-dropdown').click(changeGameplayStyle);
   $('.gameplay-style-dropdown').click(function(e) {
      $(this).addClass('active-tick').siblings().removeClass('active-tick');
   });
});