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
   moveHistoryStr === null ? moveHistory = [] : moveHistory = JSON.parse(moveHistoryStr);
   let lossHistory = moveHistory.filter( (item) => {
      return item.result === 'Loss'
   })
   let standardCount = 0;
   let aceCount = 0;
   let pairCount = 0;
   lossHistory.forEach( (item) => {
      switch (item.handType) {
         case "Standard":
            standardCount++;
            break;
         case "Ace":
            aceCount++;
            break;
         case "Pair":
            pairCount++;
            break;
      };
   });

   lossHistory.forEach( (item, index) => {
      $('tbody').append(`<tr><td>${index+1}</td><td>${item.handType}</td><td>${item.dealerCard}</td><td>${item.playerCard1}  ${item.playerCard2}</td><td>${item.userDecision}</td><td>${item.correctMove}</td></tr>`)
   });

   let scoreboardStr = localStorage.getItem('storedBlackjackScoreboard');
   scoreboardStr === null ? scoreboard = new Scorecard(0, 0, 0) : scoreboard = JSON.parse(scoreboardStr);

   $('#scorecard-wins').text(scoreboard.wins);
   $('#scorecard-losses').text(scoreboard.losses);
   $('#scorecard-percentage').text('(' + scoreboard.winPercentage + '%)');

   let gameplayStyleStr = localStorage.getItem('storedBlackjackGameplayStyle');
   gameplayStyleStr === null ? gameplayStyle = DEFAULT_GAMEPLAY_STYLE : gameplayStyle = JSON.parse(gameplayStyleStr);

   switch(gameplayStyle) {
      case 'all-cards':
         $('#all-cards').addClass('active');
         break;
      case 'aces-only':
         $('#aces-only').addClass('active');
         break;
      case 'pairs-only':
         $('#pairs-only').addClass('active');
         break;
   };
}

const resetScoreboardAndMoveHistory = () => {
   scoreboard = new Scorecard(0, 0, 0);
   moveHistory = []
   $('#scorecard-wins').text(scoreboard.wins);
   $('#scorecard-losses').text(scoreboard.losses);
   $('#scorecard-percentage').text('(' + scoreboard.winPercentage + '%)');
   $('tbody').empty();
   updateLocalStorageHistoryAndScorecard();
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
   if (result === 'Loss') {
      let rowCount = $('tr').length;
      $('tbody').append(`<tr><td>${rowCount}</td><td>${playerMoveSummary.handType}</td><td>${playerMoveSummary.dealerCard}</td><td>${playerMoveSummary.playerCard1}  ${playerMoveSummary.playerCard2}</td><td>${playerMoveSummary.userDecision}</td><td>${playerMoveSummary.correctMove}</td></tr>`)
   };
}

const getRemainingCards = (myDeck) => {
   let remainingDeck = myDeck.filter( (card) => {
      if (playerHand.playerCard1 == null) {
         return !card.played;
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
   scoreboard.winPercentage = Math.round((scoreboard.wins / (scoreboard.wins + scoreboard.losses)) * 100) * 100 / 100;
   $('#scorecard-wins').text(scoreboard.wins);
   $('#scorecard-losses').text(scoreboard.losses);
   $('#scorecard-percentage').text('(' + scoreboard.winPercentage + '%)');
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
      $('#notify-user').append(`<h4 class="animated fadeInUp result-message">Correct - ${correctMove} with ${playerHand.playerCard1.rank}, ${playerHand.playerCard2.rank} and dealer ${dealerCard.rank}</h4>`);
      $('.user-notification').addClass('visible').removeClass('invisible');
   } else {
      result = 'Loss';
      $('#notify-user').append(`<h4 class="animated shake result-message">Wrong - ${correctMove} with ${playerHand.playerCard1.rank}, ${playerHand.playerCard2.rank} and dealer ${dealerCard.rank}</h4>`);
      $('.user-notification').addClass('visible').removeClass('invisible');
   }
   updateScoreboard(result);
   updateMoveHistory(dealerCard, playerHand, userDecision, correctMove, playerHand.playerHandType, result);
   updateLocalStorageHistoryAndScorecard();
}

const changeGameplayStyle = (e) => {
   $(e.target).addClass('active').siblings().removeClass('active');
   let gameplayStyleText = e.target.value;
   switch (gameplayStyleText) {
      case 'all-cards':
         gameplayStyle = 'all-cards';
         break;
      case 'aces-only':
         gameplayStyle = 'aces-only';
         break;
      case 'pairs-only':
         gameplayStyle = 'pairs-only';
         break;
   }
   updateLocalStorageGameplayStyle();
   dealNewHand();
}

const getUserAction = (e) => {
   userDecision = e.target.value;
   $('.btn-player-action').off('click');  
   determineCorrectMove(userDecision);
}

const initializeDeck = () => {
   return new Deck();
}

const clearBoard = () => {
   $('#dealer-card1').empty();
   $('#dealer-card2').empty();
   $('#player-cards').empty();
   $('#notify-user').empty();
   $('.btn-player-action').off('click');
   $('#new-hand-button').off('click');
}

const showBoard = () => {
   let dealerCardImageName = dealerCard.rank + dealerCard.suit.slice(0,1).toUpperCase();
   let player1CardImageName = playerHand.playerCard1.rank + playerHand.playerCard1.suit.slice(0,1).toUpperCase();
   let player2CardImageName = playerHand.playerCard2.rank + playerHand.playerCard2.suit.slice(0,1).toUpperCase();
   
   $('#dealer-card2').append(`<img class="card-image animated slideInDown" id="dealer-card2" src="images/cards/${dealerCardImageName}.png">`);
   $('#dealer-card1').append(`<img class="card-image animated slideInDown" id="dealer-card1" src="images/cards/gray_back.png">`);
   $('#player-cards').append(`<img class="card-image animated slideInUp" id="player-card1" src="images/cards/${player1CardImageName}.png">`);
   $('#player-cards').append(`<img class="card-image animated slideInUp" id="player-card2" src="images/cards/${player2CardImageName}.png">`);
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
   $('#new-hand-button').click(dealNewHand);
   $('.btn-player-action').click(getUserAction);
}

$(document).ready(function() {
   getLocalStorage();
   dealNewHand();
   $('[data-toggle="popover"]').popover();
   $('.popover-dismiss').popover({
      trigger: 'focus'
   });
   $('.game-mode-button').click(changeGameplayStyle);
   $('#scorecard-reset').click(resetScoreboardAndMoveHistory);
});