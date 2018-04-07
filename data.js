function Card(rank, suit, value, played) {
   this.rank = rank;
   this.suit = suit;
   this.value = value;
   this.played = played;
}

function Deck() {
   this.ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
   this.suits = ['clubs','diamonds','hearts','spades'];
   let cards = [];
   let cardValue;

   this.suits.forEach( (suitItem, suitIndex) => {
      this.ranks.forEach( (rankItem, rankIndex) => {
         if (rankItem === 'J' || rankItem === 'Q' || rankItem === 'K') {
            cardValue = 10;
         } else if (rankItem === 'A') {
            cardValue = 1;
         } else {
            cardValue = Number(rankItem);
         }
         cards.push(new Card(rankItem, suitItem, cardValue, false));
      })
   });
   return cards;
}

const deck = [
   {
      rank: '2',
      suit: 'clubs',
      value: 2,
      played: false
   },
   {
      rank: '2',
      suit: 'diamonds',
      value: 2,
      played: false
   },
   {
      rank: '2',
      suit: 'hearts',
      value: 2,
      played: false
   },
   {
      rank: '2',
      suit: 'spades',
      value: 2,
      played: false
   },
   {
      rank: '3',
      suit: 'clubs',
      value: 3,
      played: false
   },
   {
      rank: '3',
      suit: 'diamonds',
      value: 3,
      played: false
   },
   {
      rank: '3',
      suit: 'hearts',
      value: 3,
      played: false
   },
   {
      rank: '3',
      suit: 'spades',
      value: 3,
      played: false
   },
   {
      rank: '4',
      suit: 'clubs',
      value: 4,
      played: false
   },
   {
      rank: '4',
      suit: 'diamonds',
      value: 4,
      played: false
   },
   {
      rank: '4',
      suit: 'hearts',
      value: 4,
      played: false
   },
   {
      rank: '4',
      suit: 'spades',
      value: 4,
      played: false
   },
   {
      rank: '5',
      suit: 'clubs',
      value: 5,
      played: false
   },
   {
      rank: '5',
      suit: 'diamonds',
      value: 5,
      played: false
   },
   {
      rank: '5',
      suit: 'hearts',
      value: 5,
      played: false
   },
   {
      rank: '5',
      suit: 'spades',
      value: 5,
      played: false
   },
   {
      rank: '6',
      suit: 'clubs',
      value: 6,
      played: false
   },
   {
      rank: '6',
      suit: 'diamonds',
      value: 6,
      played: false
   },
   {
      rank: '6',
      suit: 'hearts',
      value: 6,
      played: false
   },
   {
      rank: '6',
      suit: 'spades',
      value: 6,
      played: false
   },
   {
      rank: '7',
      suit: 'clubs',
      value: 7,
      played: false
   },
   {
      rank: '7',
      suit: 'diamonds',
      value: 7,
      played: false
   },
   {
      rank: '7',
      suit: 'hearts',
      value: 7,
      played: false
   },
   {
      rank: '7',
      suit: 'spades',
      value: 7,
      played: false
   },
   {
      rank: '8',
      suit: 'clubs',
      value: 8,
      played: false
   },
   {
      rank: '8',
      suit: 'diamonds',
      value: 8,
      played: false
   },
   {
      rank: '8',
      suit: 'hearts',
      value: 8,
      played: false
   },
   {
      rank: '8',
      suit: 'spades',
      value: 8,
      played: false
   },
   {
      rank: '9',
      suit: 'clubs',
      value: 9,
      played: false
   },
   {
      rank: '9',
      suit: 'diamonds',
      value: 9,
      played: false
   },
   {
      rank: '9',
      suit: 'hearts',
      value: 9,
      played: false
   },
   {
      rank: '9',
      suit: 'spades',
      value: 9,
      played: false
   },
   {
      rank: '10',
      suit: 'clubs',
      value: 10,
      played: false
   },
   {
      rank: '10',
      suit: 'diamonds',
      value: 10,
      played: false
   },
   {
      rank: '10',
      suit: 'hearts',
      value: 10,
      played: false
   },
   {
      rank: '10',
      suit: 'spades',
      value: 10,
      played: false
   },
   {
      rank: 'J',
      suit: 'clubs',
      value: 10,
      played: false
   },
   {
      rank: 'J',
      suit: 'diamonds',
      value: 10,
      played: false
   },
   {
      rank: 'J',
      suit: 'hearts',
      value: 10,
      played: false
   },
   {
      rank: 'J',
      suit: 'spades',
      value: 10,
      played: false
   },
   {
      rank: 'Q',
      suit: 'clubs',
      value: 10,
      played: false
   },
   {
      rank: 'Q',
      suit: 'diamonds',
      value: 10,
      played: false
   },
   {
      rank: 'Q',
      suit: 'hearts',
      value: 10,
      played: false
   },
   {
      rank: 'Q',
      suit: 'spades',
      value: 10,
      played: false
   },
   {
      rank: 'K',
      suit: 'clubs',
      value: 10,
      played: false
   },
   {
      rank: 'K',
      suit: 'diamonds',
      value: 10,
      played: false
   },
   {
      rank: 'K',
      suit: 'hearts',
      value: 10,
      played: false
   },
   {
      rank: 'K',
      suit: 'spades',
      value: 10,
      played: false
   },
   {
      rank: 'A',
      suit: 'clubs',
      value: 1,
      played: false
   },
   {
      rank: 'A',
      suit: 'diamonds',
      value: 1,
      played: false
   },
   {
      rank: 'A',
      suit: 'hearts',
      value: 1,
      played: false
   },
   {
      rank: 'A',
      suit: 'spades',
      value: 1,
      played: false
   }
];

const oddsTable = {
// DEALER: 2 CARD
   '25': {
            handType: 'standard',
            dealer: 2,
            player: '5',
            correctMove: 'H'
         },
   '26': {
            handType: 'standard',
            dealer: 2,
            player: '6',
            correctMove: 'H'
         },
   '27': {
            handType: 'standard',
            dealer: 2,
            player: '7',
            correctMove: 'H'
         },
   '28': {
            handType: 'standard',
            dealer: 2,
            player: '8',
            correctMove: 'H'
         },
   '29': {
            handType: 'standard',
            dealer: 2,
            player: '9',
            correctMove: 'H'
         },
   '210': {
            handType: 'standard',
            dealer: 2,
            player: '10',
            correctMove: 'D'
         },
   '211': {
            handType: 'standard',
            dealer: 2,
            player: '11',
            correctMove: 'D'
         },
   '212': {
            handType: 'standard',
            dealer: 2,
            player: '12',
            correctMove: 'H'
         },
   '213': {
            handType: 'standard',
            dealer: 2,
            player: '13',
            correctMove: 'S'
         },
   '214': {
            handType: 'standard',
            dealer: 2,
            player: '14',
            correctMove: 'S'
         },
   '215': {
            handType: 'standard',
            dealer: 2,
            player: '15',
            correctMove: 'S'
         },
   '216': {
            handType: 'standard',
            dealer: 2,
            player: '16',
            correctMove: 'S'
         },
   '217': {
            handType: 'standard',
            dealer: 2,
            player: '17',
            correctMove: 'S'
         },
   '218': {
            handType: 'standard',
            dealer: 2,
            player: '18',
            correctMove: 'S'
         },
   '219': {
            handType: 'standard',
            dealer: 2,
            player: '19',
            correctMove: 'S'
         },
   '220': {
            handType: 'standard',
            dealer: 2,
            player: '20',
            correctMove: 'S'
         },
   '221': {
            handType: 'standard',
            dealer: 2,
            player: '21',
            correctMove: 'S'
         },
   '2A2': {
            handType: 'ace',
            dealer: 2,
            player: 'A2',
            correctMove: 'H'
         },
   '2A3': {
            handType: 'ace',
            dealer: 2,
            player: 'A3',
            correctMove: 'H'
         },
   '2A4': {
            handType: 'ace',
            dealer: 2,
            player: 'A4',
            correctMove: 'H'
         },
   '2A5': {
            handType: 'ace',
            dealer: 2,
            player: 'A5',
            correctMove: 'H'
         },
   '2A6': {
            handType: 'ace',
            dealer: 2,
            player: 'A6',
            correctMove: 'H'
         },
   '2A7': {
            handType: 'ace',
            dealer: 2,
            player: 'A7',
            correctMove: 'S'
         },
   '2A8': {
            handType: 'ace',
            dealer: 2,
            player: 'A8',
            correctMove: 'S'
         },
   '2A9': {
            handType: 'ace',
            dealer: 2,
            player: 'A9',
            correctMove: 'S'
         },
   '2A10': {
            handType: 'ace',
            dealer: 2,
            player: 'A10',
            correctMove: 'S'
         },
   '222': {
            handType: 'pair',
            dealer: 2,
            player: '22',
            correctMove: 'SP'
         },
   '233': {
            handType: 'pair',
            dealer: 2,
            player: '33',
            correctMove: 'SP'
         },
   '244': {
            handType: 'pair',
            dealer: 2,
            player: '44',
            correctMove: 'H'
         },
   '255': {
            handType: 'pair',
            dealer: 2,
            player: '55',
            correctMove: 'D'
         },
   '266': {
            handType: 'pair',
            dealer: 2,
            player: '66',
            correctMove: 'SP'
         },
   '277': {
            handType: 'pair',
            dealer: 2,
            player: '77',
            correctMove: 'SP'
         },
   '288': {
            handType: 'pair',
            dealer: 2,
            player: '88',
            correctMove: 'SP'
         },
   '299': {
            handType: 'pair',
            dealer: 2,
            player: '99',
            correctMove: 'SP'
         },
   '21010': {
            handType: 'pair',
            dealer: 2,
            player: '1010',
            correctMove: 'S'
         },
   '2AA': {
            handType: 'pair',
            dealer: 2,
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: 3 CARD
   '35': {
            handType: 'standard',
            dealer: 3,
            player: '5',
            correctMove: 'H'
         },
   '36': {
            handType: 'standard',
            dealer: 3,
            player: '6',
            correctMove: 'H'
         },
   '37': {
            handType: 'standard',
            dealer: 3,
            player: '7',
            correctMove: 'H'
         },
   '38': {
            handType: 'standard',
            dealer: 3,
            player: '8',
            correctMove: 'H'
         },
   '39': {
            handType: 'standard',
            dealer: 3,
            player: '9',
            correctMove: 'D'
         },
   '310': {
            handType: 'standard',
            dealer: 3,
            player: '10',
            correctMove: 'D'
         },
   '311': {
            handType: 'standard',
            dealer: 3,
            player: '11',
            correctMove: 'D'
         },
   '312': {
            handType: 'standard',
            dealer: 3,
            player: '12',
            correctMove: 'H'
         },
   '313': {
            handType: 'standard',
            dealer: 3,
            player: '13',
            correctMove: 'S'
         },
   '314': {
            handType: 'standard',
            dealer: 3,
            player: '14',
            correctMove: 'S'
         },
   '315': {
            handType: 'standard',
            dealer: 3,
            player: '15',
            correctMove: 'S'
         },
   '316': {
            handType: 'standard',
            dealer: 3,
            player: '16',
            correctMove: 'S'
         },
   '317': {
            handType: 'standard',
            dealer: 3,
            player: '17',
            correctMove: 'S'
         },
   '318': {
            handType: 'standard',
            dealer: 3,
            player: '18',
            correctMove: 'S'
         },
   '319': {
            handType: 'standard',
            dealer: 3,
            player: '19',
            correctMove: 'S'
         },
   '320': {
            handType: 'standard',
            dealer: 3,
            player: '20',
            correctMove: 'S'
         },
   '321': {
            handType: 'standard',
            dealer: 3,
            player: '21',
            correctMove: 'S'
         },
   '3A2': {
            handType: 'ace',
            dealer: 3,
            player: 'A2',
            correctMove: 'H'
         },
   '3A3': {
            handType: 'ace',
            dealer: 3,
            player: 'A3',
            correctMove: 'H'
         },
   '3A4': {
            handType: 'ace',
            dealer: 3,
            player: 'A4',
            correctMove: 'H'
         },
   '3A5': {
            handType: 'ace',
            dealer: 3,
            player: 'A5',
            correctMove: 'H'
         },
   '3A6': {
            handType: 'ace',
            dealer: 3,
            player: 'A6',
            correctMove: 'D'
         },
   '3A7': {
            handType: 'ace',
            dealer: 3,
            player: 'A7',
            correctMove: 'D'
         },
   '3A8': {
            handType: 'ace',
            dealer: 3,
            player: 'A8',
            correctMove: 'S'
         },
   '3A9': {
            handType: 'ace',
            dealer: 3,
            player: 'A9',
            correctMove: 'S'
         },
   '3A10': {
            handType: 'ace',
            dealer: 3,
            player: 'A10',
            correctMove: 'S'
         },
   '322': {
            handType: 'pair',
            dealer: 3,
            player: '22',
            correctMove: 'SP'
         },
   '333': {
            handType: 'pair',
            dealer: 3,
            player: '33',
            correctMove: 'SP'
         },
   '344': {
            handType: 'pair',
            dealer: 3,
            player: '44',
            correctMove: 'H'
         },
   '355': {
            handType: 'pair',
            dealer: 3,
            player: '55',
            correctMove: 'D'
         },
   '366': {
            handType: 'pair',
            dealer: 3,
            player: '66',
            correctMove: 'SP'
         },
   '377': {
            handType: 'pair',
            dealer: 3,
            player: '77',
            correctMove: 'SP'
         },
   '388': {
            handType: 'pair',
            dealer: 3,
            player: '88',
            correctMove: 'SP'
         },
   '399': {
            handType: 'pair',
            dealer: 3,
            player: '99',
            correctMove: 'SP'
         },
   '31010': {
            handType: 'pair',
            dealer: 3,
            player: '1010',
            correctMove: 'S'
         },
   '3AA': {
            handType: 'pair',
            dealer: 3,
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: 4 CARD
   '45': {
            handType: 'standard',
            dealer: 4,
            player: '5',
            correctMove: 'H'
         },
   '46': {
            handType: 'standard',
            dealer: 4,
            player: '6',
            correctMove: 'H'
         },
   '47': {
            handType: 'standard',
            dealer: 4,
            player: '7',
            correctMove: 'H'
         },
   '48': {
            handType: 'standard',
            dealer: 4,
            player: '8',
            correctMove: 'H'
         },
   '49': {
            handType: 'standard',
            dealer: 4,
            player: '9',
            correctMove: 'D'
         },
   '410': {
            handType: 'standard',
            dealer: 4,
            player: '10',
            correctMove: 'D'
         },
   '411': {
            handType: 'standard',
            dealer: 4,
            player: '11',
            correctMove: 'D'
         },
   '412': {
            handType: 'standard',
            dealer: 4,
            player: '12',
            correctMove: 'S'
         },
   '413': {
            handType: 'standard',
            dealer: 4,
            player: '13',
            correctMove: 'S'
         },
   '414': {
            handType: 'standard',
            dealer: 4,
            player: '14',
            correctMove: 'S'
         },
   '415': {
            handType: 'standard',
            dealer: 4,
            player: '15',
            correctMove: 'S'
         },
   '416': {
            handType: 'standard',
            dealer: 4,
            player: '16',
            correctMove: 'S'
         },
   '417': {
            handType: 'standard',
            dealer: 4,
            player: '17',
            correctMove: 'S'
         },
   '418': {
            handType: 'standard',
            dealer: 4,
            player: '18',
            correctMove: 'S'
         },
   '419': {
            handType: 'standard',
            dealer: 4,
            player: '19',
            correctMove: 'S'
         },
   '420': {
            handType: 'standard',
            dealer: 4,
            player: '20',
            correctMove: 'S'
         },
   '421': {
            handType: 'standard',
            dealer: 4,
            player: '21',
            correctMove: 'S'
         },
   '4A2': {
            handType: 'ace',
            dealer: 4,
            player: 'A2',
            correctMove: 'H'
         },
   '4A3': {
            handType: 'ace',
            dealer: 4,
            player: 'A3',
            correctMove: 'H'
         },
   '4A4': {
            handType: 'ace',
            dealer: 4,
            player: 'A4',
            correctMove: 'D'
         },
   '4A5': {
            handType: 'ace',
            dealer: 4,
            player: 'A5',
            correctMove: 'D'
         },
   '4A6': {
            handType: 'ace',
            dealer: 4,
            player: 'A6',
            correctMove: 'D'
         },
   '4A7': {
            handType: 'ace',
            dealer: 4,
            player: 'A7',
            correctMove: 'D'
         },
   '4A8': {
            handType: 'ace',
            dealer: 4,
            player: 'A8',
            correctMove: 'S'
         },
   '4A9': {
            handType: 'ace',
            dealer: 4,
            player: 'A9',
            correctMove: 'S'
         },
   '4A10': {
            handType: 'ace',
            dealer: 4,
            player: 'A10',
            correctMove: 'S'
         },
   '422': {
            handType: 'pair',
            dealer: 4,
            player: '22',
            correctMove: 'SP'
         },
   '433': {
            handType: 'pair',
            dealer: 4,
            player: '33',
            correctMove: 'SP'
         },
   '444': {
            handType: 'pair',
            dealer: 4,
            player: '44',
            correctMove: 'H'
         },
   '455': {
            handType: 'pair',
            dealer: 4,
            player: '55',
            correctMove: 'D'
         },
   '466': {
            handType: 'pair',
            dealer: 4,
            player: '66',
            correctMove: 'SP'
         },
   '477': {
            handType: 'pair',
            dealer: 4,
            player: '77',
            correctMove: 'SP'
         },
   '488': {
            handType: 'pair',
            dealer: 4,
            player: '88',
            correctMove: 'SP'
         },
   '499': {
            handType: 'pair',
            dealer: 4,
            player: '99',
            correctMove: 'SP'
         },
   '41010': {
            handType: 'pair',
            dealer: 4,
            player: '1010',
            correctMove: 'S'
         },
   '4AA': {
            handType: 'pair',
            dealer: 4,
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER 5 CARD
   '55': {
            handType: 'standard',
            dealer: 6,
            player: '5',
            correctMove: 'H'
         },
   '56': {
            handType: 'standard',
            dealer: 6,
            player: '6',
            correctMove: 'H'
         },
   '57': {
            handType: 'standard',
            dealer: 6,
            player: '7',
            correctMove: 'H'
         },
   '58': {
            handType: 'standard',
            dealer: 6,
            player: '8',
            correctMove: 'H'
         },
   '59': {
            handType: 'standard',
            dealer: 6,
            player: '9',
            correctMove: 'D'
         },
   '510': {
            handType: 'standard',
            dealer: 6,
            player: '10',
            correctMove: 'D'
         },
   '511': {
            handType: 'standard',
            dealer: 6,
            player: '11',
            correctMove: 'D'
         },
   '512': {
            handType: 'standard',
            dealer: 6,
            player: '12',
            correctMove: 'S'
         },
   '513': {
            handType: 'standard',
            dealer: 6,
            player: '13',
            correctMove: 'S'
         },
   '514': {
            handType: 'standard',
            dealer: 6,
            player: '14',
            correctMove: 'S'
         },
   '515': {
            handType: 'standard',
            dealer: 6,
            player: '15',
            correctMove: 'S'
         },
   '516': {
            handType: 'standard',
            dealer: 6,
            player: '16',
            correctMove: 'S'
         },
   '517': {
            handType: 'standard',
            dealer: 6,
            player: '17',
            correctMove: 'S'
         },
   '518': {
            handType: 'standard',
            dealer: 6,
            player: '18',
            correctMove: 'S'
         },
   '519': {
            handType: 'standard',
            dealer: 6,
            player: '19',
            correctMove: 'S'
         },
   '520': {
            handType: 'standard',
            dealer: 6,
            player: '20',
            correctMove: 'S'
         },
   '521': {
            handType: 'standard',
            dealer: 6,
            player: '21',
            correctMove: 'S'
         },
   '5A2': {
            handType: 'ace',
            dealer: 6,
            player: 'A2',
            correctMove: 'D'
         },
   '5A3': {
            handType: 'ace',
            dealer: 6,
            player: 'A3',
            correctMove: 'D'
         },
   '5A4': {
            handType: 'ace',
            dealer: 6,
            player: 'A4',
            correctMove: 'D'
         },
   '5A5': {
            handType: 'ace',
            dealer: 6,
            player: 'A5',
            correctMove: 'D'
         },
   '5A6': {
            handType: 'ace',
            dealer: 6,
            player: 'A6',
            correctMove: 'D'
         },
   '5A7': {
            handType: 'ace',
            dealer: 6,
            player: 'A7',
            correctMove: 'D'
         },
   '5A8': {
            handType: 'ace',
            dealer: 6,
            player: 'A8',
            correctMove: 'S'
         },
   '5A9': {
            handType: 'ace',
            dealer: 6,
            player: 'A9',
            correctMove: 'S'
         },
   '5A10': {
            handType: 'ace',
            dealer: 6,
            player: 'A10',
            correctMove: 'S'
         },
   '522': {
            handType: 'pair',
            dealer: 6,
            player: '22',
            correctMove: 'SP'
         },
   '533': {
            handType: 'pair',
            dealer: 6,
            player: '33',
            correctMove: 'SP'
         },
   '544': {
            handType: 'pair',
            dealer: 6,
            player: '44',
            correctMove: 'SP'
         },
   '555': {
            handType: 'pair',
            dealer: 6,
            player: '55',
            correctMove: 'D'
         },
   '566': {
            handType: 'pair',
            dealer: 6,
            player: '66',
            correctMove: 'SP'
         },
   '577': {
            handType: 'pair',
            dealer: 6,
            player: '77',
            correctMove: 'SP'
         },
   '588': {
            handType: 'pair',
            dealer: 6,
            player: '88',
            correctMove: 'SP'
         },
   '599': {
            handType: 'pair',
            dealer: 6,
            player: '99',
            correctMove: 'SP'
         },
   '51010': {
            handType: 'pair',
            dealer: 6,
            player: '1010',
            correctMove: 'S'
         },
   '5AA': {
            handType: 'pair',
            dealer: 6,
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: 6 CARD
   '65': {
            handType: 'standard',
            dealer: 6,
            player: '5',
            correctMove: 'H'
         },
   '66': {
            handType: 'standard',
            dealer: 6,
            player: '6',
            correctMove: 'H'
         },
   '67': {
            handType: 'standard',
            dealer: 6,
            player: '7',
            correctMove: 'H'
         },
   '68': {
            handType: 'standard',
            dealer: 6,
            player: '8',
            correctMove: 'H'
         },
   '69': {
            handType: 'standard',
            dealer: 6,
            player: '9',
            correctMove: 'D'
         },
   '610': {
            handType: 'standard',
            dealer: 6,
            player: '10',
            correctMove: 'D'
         },
   '611': {
            handType: 'standard',
            dealer: 6,
            player: '11',
            correctMove: 'D'
         },
   '612': {
            handType: 'standard',
            dealer: 6,
            player: '12',
            correctMove: 'S'
         },
   '613': {
            handType: 'standard',
            dealer: 6,
            player: '13',
            correctMove: 'S'
         },
   '614': {
            handType: 'standard',
            dealer: 6,
            player: '14',
            correctMove: 'S'
         },
   '615': {
            handType: 'standard',
            dealer: 6,
            player: '15',
            correctMove: 'S'
         },
   '616': {
            handType: 'standard',
            dealer: 6,
            player: '16',
            correctMove: 'S'
         },
   '617': {
            handType: 'standard',
            dealer: 6,
            player: '17',
            correctMove: 'S'
         },
   '618': {
            handType: 'standard',
            dealer: 6,
            player: '18',
            correctMove: 'S'
         },
   '619': {
            handType: 'standard',
            dealer: 6,
            player: '19',
            correctMove: 'S'
         },
   '620': {
            handType: 'standard',
            dealer: 6,
            player: '20',
            correctMove: 'S'
         },
   '621': {
            handType: 'standard',
            dealer: 6,
            player: '21',
            correctMove: 'S'
         },
   '6A2': {
            handType: 'ace',
            dealer: 6,
            player: 'A2',
            correctMove: 'D'
         },
   '6A3': {
            handType: 'ace',
            dealer: 6,
            player: 'A3',
            correctMove: 'D'
         },
   '6A4': {
            handType: 'ace',
            dealer: 6,
            player: 'A4',
            correctMove: 'D'
         },
   '6A5': {
            handType: 'ace',
            dealer: 6,
            player: 'A5',
            correctMove: 'D'
         },
   '6A6': {
            handType: 'ace',
            dealer: 6,
            player: 'A6',
            correctMove: 'D'
         },
   '6A7': {
            handType: 'ace',
            dealer: 6,
            player: 'A7',
            correctMove: 'D'
         },
   '6A8': {
            handType: 'ace',
            dealer: 6,
            player: 'A8',
            correctMove: 'S'
         },
   '6A9': {
            handType: 'ace',
            dealer: 6,
            player: 'A9',
            correctMove: 'S'
         },
   '6A10': {
            handType: 'ace',
            dealer: 6,
            player: 'A10',
            correctMove: 'S'
         },
   '622': {
            handType: 'pair',
            dealer: 6,
            player: '22',
            correctMove: 'SP'
         },
   '633': {
            handType: 'pair',
            dealer: 6,
            player: '33',
            correctMove: 'SP'
         },
   '644': {
            handType: 'pair',
            dealer: 6,
            player: '44',
            correctMove: 'SP'
         },
   '655': {
            handType: 'pair',
            dealer: 6,
            player: '55',
            correctMove: 'D'
         },
   '666': {
            handType: 'pair',
            dealer: 6,
            player: '66',
            correctMove: 'SP'
         },
   '677': {
            handType: 'pair',
            dealer: 6,
            player: '77',
            correctMove: 'SP'
         },
   '688': {
            handType: 'pair',
            dealer: 6,
            player: '88',
            correctMove: 'SP'
         },
   '699': {
            handType: 'pair',
            dealer: 6,
            player: '99',
            correctMove: 'SP'
         },
   '61010': {
            handType: 'pair',
            dealer: 6,
            player: '1010',
            correctMove: 'S'
         },
   '6AA': {
            handType: 'pair',
            dealer: 6,
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: 7 CARD
   '75': {
            handType: 'standard',
            dealer: 7,
            player: '5',
            correctMove: 'H'
         },
   '76': {
            handType: 'standard',
            dealer: 7,
            player: '6',
            correctMove: 'H'
         },
   '77': {
            handType: 'standard',
            dealer: 7,
            player: '7',
            correctMove: 'H'
         },
   '78': {
            handType: 'standard',
            dealer: 7,
            player: '8',
            correctMove: 'H'
         },
   '79': {
            handType: 'standard',
            dealer: 7,
            player: '9',
            correctMove: 'H'
         },
   '710': {
            handType: 'standard',
            dealer: 7,
            player: '10',
            correctMove: 'D'
         },
   '711': {
            handType: 'standard',
            dealer: 7,
            player: '11',
            correctMove: 'D'
         },
   '712': {
            handType: 'standard',
            dealer: 7,
            player: '12',
            correctMove: 'H'
         },
   '713': {
            handType: 'standard',
            dealer: 7,
            player: '13',
            correctMove: 'H'
         },
   '714': {
            handType: 'standard',
            dealer: 7,
            player: '14',
            correctMove: 'H'
         },
   '715': {
            handType: 'standard',
            dealer: 7,
            player: '15',
            correctMove: 'H'
         },
   '716': {
            handType: 'standard',
            dealer: 7,
            player: '16',
            correctMove: 'H'
         },
   '717': {
            handType: 'standard',
            dealer: 7,
            player: '17',
            correctMove: 'S'
         },
   '718': {
            handType: 'standard',
            dealer: 7,
            player: '18',
            correctMove: 'S'
         },
   '719': {
            handType: 'standard',
            dealer: 7,
            player: '19',
            correctMove: 'S'
         },
   '720': {
            handType: 'standard',
            dealer: 7,
            player: '20',
            correctMove: 'S'
         },
   '721': {
            handType: 'standard',
            dealer: 7,
            player: '21',
            correctMove: 'S'
         },
   '7A2': {
            handType: 'ace',
            dealer: 7,
            player: 'A2',
            correctMove: 'H'
         },
   '7A3': {
            handType: 'ace',
            dealer: 7,
            player: 'A3',
            correctMove: 'H'
         },
   '7A4': {
            handType: 'ace',
            dealer: 7,
            player: 'A4',
            correctMove: 'H'
         },
   '7A5': {
            handType: 'ace',
            dealer: 7,
            player: 'A5',
            correctMove: 'H'
         },
   '7A6': {
            handType: 'ace',
            dealer: 7,
            player: 'A6',
            correctMove: 'H'
         },
   '7A7': {
            handType: 'ace',
            dealer: 7,
            player: 'A7',
            correctMove: 'S'
         },
   '7A8': {
            handType: 'ace',
            dealer: 7,
            player: 'A8',
            correctMove: 'S'
         },
   '7A9': {
            handType: 'ace',
            dealer: 7,
            player: 'A9',
            correctMove: 'S'
         },
   '7A10': {
            handType: 'ace',
            dealer: 7,
            player: 'A10',
            correctMove: 'S'
         },
   '722': {
            handType: 'pair',
            dealer: 7,
            player: '22',
            correctMove: 'SP'
         },
   '733': {
            handType: 'pair',
            dealer: 7,
            player: '33',
            correctMove: 'SP'
         },
   '744': {
            handType: 'pair',
            dealer: 7,
            player: '44',
            correctMove: 'H'
         },
   '755': {
            handType: 'pair',
            dealer: 7,
            player: '55',
            correctMove: 'D'
         },
   '766': {
            handType: 'pair',
            dealer: 7,
            player: '66',
            correctMove: 'H'
         },
   '777': {
            handType: 'pair',
            dealer: 7,
            player: '77',
            correctMove: 'SP'
         },
   '788': {
            handType: 'pair',
            dealer: 7,
            player: '88',
            correctMove: 'SP'
         },
   '799': {
            handType: 'pair',
            dealer: 7,
            player: '99',
            correctMove: 'S'
         },
   '71010': {
            handType: 'pair',
            dealer: 7,
            player: '1010',
            correctMove: 'S'
         },
   '7AA': {
            handType: 'pair',
            dealer: 7,
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: 8 CARD
   '85': {
            handType: 'standard',
            dealer: 8,
            player: '5',
            correctMove: 'H'
         },
   '86': {
            handType: 'standard',
            dealer: 8,
            player: '6',
            correctMove: 'H'
         },
   '87': {
            handType: 'standard',
            dealer: 8,
            player: '7',
            correctMove: 'H'
         },
   '88': {
            handType: 'standard',
            dealer: 8,
            player: '8',
            correctMove: 'H'
         },
   '89': {
            handType: 'standard',
            dealer: 8,
            player: '9',
            correctMove: 'H'
         },
   '810': {
            handType: 'standard',
            dealer: 8,
            player: '10',
            correctMove: 'D'
         },
   '811': {
            handType: 'standard',
            dealer: 8,
            player: '11',
            correctMove: 'D'
         },
   '812': {
            handType: 'standard',
            dealer: 8,
            player: '12',
            correctMove: 'H'
         },
   '813': {
            handType: 'standard',
            dealer: 8,
            player: '13',
            correctMove: 'H'
         },
   '814': {
            handType: 'standard',
            dealer: 8,
            player: '14',
            correctMove: 'H'
         },
   '815': {
            handType: 'standard',
            dealer: 8,
            player: '15',
            correctMove: 'H'
         },
   '816': {
            handType: 'standard',
            dealer: 8,
            player: '16',
            correctMove: 'H'
         },
   '817': {
            handType: 'standard',
            dealer: 8,
            player: '17',
            correctMove: 'S'
         },
   '818': {
            handType: 'standard',
            dealer: 8,
            player: '18',
            correctMove: 'S'
         },
   '819': {
            handType: 'standard',
            dealer: 8,
            player: '19',
            correctMove: 'S'
         },
   '820': {
            handType: 'standard',
            dealer: 8,
            player: '20',
            correctMove: 'S'
         },
   '821': {
            handType: 'standard',
            dealer: 8,
            player: '21',
            correctMove: 'S'
         },
   '8A2': {
            handType: 'ace',
            dealer: 8,
            player: 'A2',
            correctMove: 'H'
         },
   '8A3': {
            handType: 'ace',
            dealer: 8,
            player: 'A3',
            correctMove: 'H'
         },
   '8A4': {
            handType: 'ace',
            dealer: 8,
            player: 'A4',
            correctMove: 'H'
         },
   '8A5': {
            handType: 'ace',
            dealer: 8,
            player: 'A5',
            correctMove: 'H'
         },
   '8A6': {
            handType: 'ace',
            dealer: 8,
            player: 'A6',
            correctMove: 'H'
         },
   '8A7': {
            handType: 'ace',
            dealer: 8,
            player: 'A7',
            correctMove: 'S'
         },
   '8A8': {
            handType: 'ace',
            dealer: 8,
            player: 'A8',
            correctMove: 'S'
         },
   '8A9': {
            handType: 'ace',
            dealer: 8,
            player: 'A9',
            correctMove: 'S'
         },
   '8A10': {
            handType: 'ace',
            dealer: 8,
            player: 'A10',
            correctMove: 'S'
         },
   '822': {
            handType: 'pair',
            dealer: 8,
            player: '22',
            correctMove: 'H'
         },
   '833': {
            handType: 'pair',
            dealer: 8,
            player: '33',
            correctMove: 'H'
         },
   '844': {
            handType: 'pair',
            dealer: 8,
            player: '44',
            correctMove: 'H'
         },
   '855': {
            handType: 'pair',
            dealer: 8,
            player: '55',
            correctMove: 'D'
         },
   '866': {
            handType: 'pair',
            dealer: 8,
            player: '66',
            correctMove: 'H'
         },
   '877': {
            handType: 'pair',
            dealer: 8,
            player: '77',
            correctMove: 'H'
         },
   '888': {
            handType: 'pair',
            dealer: 8,
            player: '88',
            correctMove: 'SP'
         },
   '899': {
            handType: 'pair',
            dealer: 8,
            player: '99',
            correctMove: 'SP'
         },
   '81010': {
            handType: 'pair',
            dealer: 8,
            player: '1010',
            correctMove: 'S'
         },
   '8AA': {
            handType: 'pair',
            dealer: 8,
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: 9 CARD
   '95': {
            handType: 'standard',
            dealer: 9,
            player: '5',
            correctMove: 'H'
         },
   '96': {
            handType: 'standard',
            dealer: 9,
            player: '6',
            correctMove: 'H'
         },
   '97': {
            handType: 'standard',
            dealer: 9,
            player: '7',
            correctMove: 'H'
         },
   '98': {
            handType: 'standard',
            dealer: 9,
            player: '8',
            correctMove: 'H'
         },
   '99': {
            handType: 'standard',
            dealer: 9,
            player: '9',
            correctMove: 'H'
         },
   '910': {
            handType: 'standard',
            dealer: 9,
            player: '10',
            correctMove: 'D'
         },
   '911': {
            handType: 'standard',
            dealer: 9,
            player: '11',
            correctMove: 'D'
         },
   '912': {
            handType: 'standard',
            dealer: 9,
            player: '12',
            correctMove: 'H'
         },
   '913': {
            handType: 'standard',
            dealer: 9,
            player: '13',
            correctMove: 'H'
         },
   '914': {
            handType: 'standard',
            dealer: 9,
            player: '14',
            correctMove: 'H'
         },
   '915': {
            handType: 'standard',
            dealer: 9,
            player: '15',
            correctMove: 'H'
         },
   '916': {
            handType: 'standard',
            dealer: 9,
            player: '16',
            correctMove: 'H'
         },
   '917': {
            handType: 'standard',
            dealer: 9,
            player: '17',
            correctMove: 'S'
         },
   '918': {
            handType: 'standard',
            dealer: 9,
            player: '18',
            correctMove: 'S'
         },
   '919': {
            handType: 'standard',
            dealer: 9,
            player: '19',
            correctMove: 'S'
         },
   '920': {
            handType: 'standard',
            dealer: 9,
            player: '20',
            correctMove: 'S'
         },
   '921': {
            handType: 'standard',
            dealer: 9,
            player: '21',
            correctMove: 'S'
         },
   '9A2': {
            handType: 'ace',
            dealer: 9,
            player: 'A2',
            correctMove: 'H'
         },
   '9A3': {
            handType: 'ace',
            dealer: 9,
            player: 'A3',
            correctMove: 'H'
         },
   '9A4': {
            handType: 'ace',
            dealer: 9,
            player: 'A4',
            correctMove: 'H'
         },
   '9A5': {
            handType: 'ace',
            dealer: 9,
            player: 'A5',
            correctMove: 'H'
         },
   '9A6': {
            handType: 'ace',
            dealer: 9,
            player: 'A6',
            correctMove: 'H'
         },
   '9A7': {
            handType: 'ace',
            dealer: 9,
            player: 'A7',
            correctMove: 'H'
         },
   '9A8': {
            handType: 'ace',
            dealer: 9,
            player: 'A8',
            correctMove: 'S'
         },
   '9A9': {
            handType: 'ace',
            dealer: 9,
            player: 'A9',
            correctMove: 'S'
         },
   '9A10': {
            handType: 'ace',
            dealer: 9,
            player: 'A10',
            correctMove: 'S'
         },
   '922': {
            handType: 'pair',
            dealer: 9,
            player: '22',
            correctMove: 'H'
         },
   '933': {
            handType: 'pair',
            dealer: 9,
            player: '33',
            correctMove: 'H'
         },
   '944': {
            handType: 'pair',
            dealer: 9,
            player: '44',
            correctMove: 'H'
         },
   '955': {
            handType: 'pair',
            dealer: 9,
            player: '55',
            correctMove: 'D'
         },
   '966': {
            handType: 'pair',
            dealer: 9,
            player: '66',
            correctMove: 'H'
         },
   '977': {
            handType: 'pair',
            dealer: 9,
            player: '77',
            correctMove: 'H'
         },
   '988': {
            handType: 'pair',
            dealer: 9,
            player: '88',
            correctMove: 'SP'
         },
   '999': {
            handType: 'pair',
            dealer: 9,
            player: '99',
            correctMove: 'SP'
         },
   '91010': {
            handType: 'pair',
            dealer: 9,
            player: '1010',
            correctMove: 'S'
         },
   '9AA': {
            handType: 'pair',
            dealer: 9,
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: 10 CARD
   '105': {
            handType: 'standard',
            dealer: 10,
            player: '5',
            correctMove: 'H'
         },
   '106': {
            handType: 'standard',
            dealer: 10,
            player: '6',
            correctMove: 'H'
         },
   '107': {
            handType: 'standard',
            dealer: 10,
            player: '7',
            correctMove: 'H'
         },
   '108': {
            handType: 'standard',
            dealer: 10,
            player: '8',
            correctMove: 'H'
         },
   '109': {
            handType: 'standard',
            dealer: 10,
            player: '9',
            correctMove: 'H'
         },
   '1010': {
            handType: 'standard',
            dealer: 10,
            player: '10',
            correctMove: 'H'
         },
   '1011': {
            handType: 'standard',
            dealer: 10,
            player: '11',
            correctMove: 'D'
         },
   '1012': {
            handType: 'standard',
            dealer: 10,
            player: '12',
            correctMove: 'H'
         },
   '1013': {
            handType: 'standard',
            dealer: 10,
            player: '13',
            correctMove: 'H'
         },
   '1014': {
            handType: 'standard',
            dealer: 10,
            player: '14',
            correctMove: 'H'
         },
   '1015': {
            handType: 'standard',
            dealer: 10,
            player: '15',
            correctMove: 'H'
         },
   '1016': {
            handType: 'standard',
            dealer: 10,
            player: '16',
            correctMove: 'H'
         },
   '1017': {
            handType: 'standard',
            dealer: 10,
            player: '17',
            correctMove: 'S'
         },
   '1018': {
            handType: 'standard',
            dealer: 10,
            player: '18',
            correctMove: 'S'
         },
   '1019': {
            handType: 'standard',
            dealer: 10,
            player: '19',
            correctMove: 'S'
         },
   '1020': {
            handType: 'standard',
            dealer: 10,
            player: '20',
            correctMove: 'S'
         },
   '1021': {
            handType: 'standard',
            dealer: 10,
            player: '21',
            correctMove: 'S'
         },
   '10A2': {
            handType: 'ace',
            dealer: 10,
            player: 'A2',
            correctMove: 'H'
         },
   '10A3': {
            handType: 'ace',
            dealer: 10,
            player: 'A3',
            correctMove: 'H'
         },
   '10A4': {
            handType: 'ace',
            dealer: 10,
            player: 'A4',
            correctMove: 'H'
         },
   '10A5': {
            handType: 'ace',
            dealer: 10,
            player: 'A5',
            correctMove: 'H'
         },
   '10A6': {
            handType: 'ace',
            dealer: 10,
            player: 'A6',
            correctMove: 'H'
         },
   '10A7': {
            handType: 'ace',
            dealer: 10,
            player: 'A7',
            correctMove: 'H'
         },
   '10A8': {
            handType: 'ace',
            dealer: 10,
            player: 'A8',
            correctMove: 'S'
         },
   '10A9': {
            handType: 'ace',
            dealer: 10,
            player: 'A9',
            correctMove: 'S'
         },
   '10A10': {
            handType: 'ace',
            dealer: 10,
            player: 'A10',
            correctMove: 'S'
         },
   '1022': {
            handType: 'pair',
            dealer: 10,
            player: '22',
            correctMove: 'H'
         },
   '1033': {
            handType: 'pair',
            dealer: 10,
            player: '33',
            correctMove: 'H'
         },
   '1044': {
            handType: 'pair',
            dealer: 10,
            player: '44',
            correctMove: 'H'
         },
   '1055': {
            handType: 'pair',
            dealer: 10,
            player: '55',
            correctMove: 'H'
         },
   '1066': {
            handType: 'pair',
            dealer: 10,
            player: '66',
            correctMove: 'H'
         },
   '1077': {
            handType: 'pair',
            dealer: 10,
            player: '77',
            correctMove: 'H'
         },
   '1088': {
            handType: 'pair',
            dealer: 10,
            player: '88',
            correctMove: 'SP'
         },
   '1099': {
            handType: 'pair',
            dealer: 10,
            player: '99',
            correctMove: 'S'
         },
   '101010': {
            handType: 'pair',
            dealer: 10,
            player: '1010',
            correctMove: 'S'
         },
   '10AA': {
            handType: 'pair',
            dealer: 10,
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: J CARD
   'J5': {
            handType: 'standard',
            dealer: 'J',
            player: '5',
            correctMove: 'H'
         },
   'J6': {
            handType: 'standard',
            dealer: 'J',
            player: '6',
            correctMove: 'H'
         },
   'J7': {
            handType: 'standard',
            dealer: 'J',
            player: '7',
            correctMove: 'H'
         },
   'J8': {
            handType: 'standard',
            dealer: 'J',
            player: '8',
            correctMove: 'H'
         },
   'J9': {
            handType: 'standard',
            dealer: 'J',
            player: '9',
            correctMove: 'H'
         },
   'J10': {
            handType: 'standard',
            dealer: 'J',
            player: '10',
            correctMove: 'H'
         },
   'J11': {
            handType: 'standard',
            dealer: 'J',
            player: '11',
            correctMove: 'D'
         },
   'J12': {
            handType: 'standard',
            dealer: 'J',
            player: '12',
            correctMove: 'H'
         },
   'J13': {
            handType: 'standard',
            dealer: 'J',
            player: '13',
            correctMove: 'H'
         },
   'J14': {
            handType: 'standard',
            dealer: 'J',
            player: '14',
            correctMove: 'H'
         },
   'J15': {
            handType: 'standard',
            dealer: 'J',
            player: '15',
            correctMove: 'H'
         },
   'J16': {
            handType: 'standard',
            dealer: 'J',
            player: '16',
            correctMove: 'H'
         },
   'J17': {
            handType: 'standard',
            dealer: 'J',
            player: '17',
            correctMove: 'S'
         },
   'J18': {
            handType: 'standard',
            dealer: 'J',
            player: '18',
            correctMove: 'S'
         },
   'J19': {
            handType: 'standard',
            dealer: 'J',
            player: '19',
            correctMove: 'S'
         },
   'J20': {
            handType: 'standard',
            dealer: 'J',
            player: '20',
            correctMove: 'S'
         },
   'J21': {
            handType: 'standard',
            dealer: 'J',
            player: '21',
            correctMove: 'S'
         },
   'JA2': {
            handType: 'ace',
            dealer: 'J',
            player: 'A2',
            correctMove: 'H'
         },
   'JA3': {
            handType: 'ace',
            dealer: 'J',
            player: 'A3',
            correctMove: 'H'
         },
   'JA4': {
            handType: 'ace',
            dealer: 'J',
            player: 'A4',
            correctMove: 'H'
         },
   'JA5': {
            handType: 'ace',
            dealer: 'J',
            player: 'A5',
            correctMove: 'H'
         },
   'JA6': {
            handType: 'ace',
            dealer: 'J',
            player: 'A6',
            correctMove: 'H'
         },
   'JA7': {
            handType: 'ace',
            dealer: 'J',
            player: 'A7',
            correctMove: 'H'
         },
   'JA8': {
            handType: 'ace',
            dealer: 'J',
            player: 'A8',
            correctMove: 'S'
         },
   'JA9': {
            handType: 'ace',
            dealer: 'J',
            player: 'A9',
            correctMove: 'S'
         },
   'JA10': {
            handType: 'ace',
            dealer: 'J',
            player: 'A10',
            correctMove: 'S'
         },
   'J22': {
            handType: 'pair',
            dealer: 'J',
            player: '22',
            correctMove: 'H'
         },
   'J33': {
            handType: 'pair',
            dealer: 'J',
            player: '33',
            correctMove: 'H'
         },
   'J44': {
            handType: 'pair',
            dealer: 'J',
            player: '44',
            correctMove: 'H'
         },
   'J55': {
            handType: 'pair',
            dealer: 'J',
            player: '55',
            correctMove: 'H'
         },
   'J66': {
            handType: 'pair',
            dealer: 'J',
            player: '66',
            correctMove: 'H'
         },
   'J77': {
            handType: 'pair',
            dealer: 'J',
            player: '77',
            correctMove: 'H'
         },
   'J88': {
            handType: 'pair',
            dealer: 'J',
            player: '88',
            correctMove: 'SP'
         },
   'J99': {
            handType: 'pair',
            dealer: 'J',
            player: '99',
            correctMove: 'S'
         },
   'J1010': {
            handType: 'pair',
            dealer: 'J',
            player: '1010',
            correctMove: 'S'
         },
   'JAA': {
            handType: 'pair',
            dealer: 'J',
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: Q CARD
   'Q5': {
            handType: 'standard',
            dealer: 'Q',
            player: '5',
            correctMove: 'H'
         },
   'Q6': {
            handType: 'standard',
            dealer: 'Q',
            player: '6',
            correctMove: 'H'
         },
   'Q7': {
            handType: 'standard',
            dealer: 'Q',
            player: '7',
            correctMove: 'H'
         },
   'Q8': {
            handType: 'standard',
            dealer: 'Q',
            player: '8',
            correctMove: 'H'
         },
   'Q9': {
            handType: 'standard',
            dealer: 'Q',
            player: '9',
            correctMove: 'H'
         },
   'Q10': {
            handType: 'standard',
            dealer: 'Q',
            player: '10',
            correctMove: 'H'
         },
   'Q11': {
            handType: 'standard',
            dealer: 'Q',
            player: '11',
            correctMove: 'D'
         },
   'Q12': {
            handType: 'standard',
            dealer: 'Q',
            player: '12',
            correctMove: 'H'
         },
   'Q13': {
            handType: 'standard',
            dealer: 'Q',
            player: '13',
            correctMove: 'H'
         },
   'Q14': {
            handType: 'standard',
            dealer: 'Q',
            player: '14',
            correctMove: 'H'
         },
   'Q15': {
            handType: 'standard',
            dealer: 'Q',
            player: '15',
            correctMove: 'H'
         },
   'Q16': {
            handType: 'standard',
            dealer: 'Q',
            player: '16',
            correctMove: 'H'
         },
   'Q17': {
            handType: 'standard',
            dealer: 'Q',
            player: '17',
            correctMove: 'S'
         },
   'Q18': {
            handType: 'standard',
            dealer: 'Q',
            player: '18',
            correctMove: 'S'
         },
   'Q19': {
            handType: 'standard',
            dealer: 'Q',
            player: '19',
            correctMove: 'S'
         },
   'Q20': {
            handType: 'standard',
            dealer: 'Q',
            player: '20',
            correctMove: 'S'
         },
   'Q21': {
            handType: 'standard',
            dealer: 'Q',
            player: '21',
            correctMove: 'S'
         },
   'QA2': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A2',
            correctMove: 'H'
         },
   'QA3': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A3',
            correctMove: 'H'
         },
   'QA4': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A4',
            correctMove: 'H'
         },
   'QA5': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A5',
            correctMove: 'H'
         },
   'QA6': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A6',
            correctMove: 'H'
         },
   'QA7': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A7',
            correctMove: 'H'
         },
   'QA8': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A8',
            correctMove: 'S'
         },
   'QA9': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A9',
            correctMove: 'S'
         },
   'QA10': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A10',
            correctMove: 'S'
         },
   'Q22': {
            handType: 'pair',
            dealer: 'Q',
            player: '22',
            correctMove: 'H'
         },
   'Q33': {
            handType: 'pair',
            dealer: 'Q',
            player: '33',
            correctMove: 'H'
         },
   'Q44': {
            handType: 'pair',
            dealer: 'Q',
            player: '44',
            correctMove: 'H'
         },
   'Q55': {
            handType: 'pair',
            dealer: 'Q',
            player: '55',
            correctMove: 'H'
         },
   'Q66': {
            handType: 'pair',
            dealer: 'Q',
            player: '66',
            correctMove: 'H'
         },
   'Q77': {
            handType: 'pair',
            dealer: 'Q',
            player: '77',
            correctMove: 'H'
         },
   'Q88': {
            handType: 'pair',
            dealer: 'Q',
            player: '88',
            correctMove: 'SP'
         },
   'Q99': {
            handType: 'pair',
            dealer: 'Q',
            player: '99',
            correctMove: 'S'
         },
   'Q1010': {
            handType: 'pair',
            dealer: 'Q',
            player: '1010',
            correctMove: 'S'
         },
   'QAA': {
            handType: 'pair',
            dealer: 'Q',
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: K CARD
   'K5': {
            handType: 'standard',
            dealer: 'K',
            player: '5',
            correctMove: 'H'
         },
   'K6': {
            handType: 'standard',
            dealer: 'K',
            player: '6',
            correctMove: 'H'
         },
   'K7': {
            handType: 'standard',
            dealer: 'K',
            player: '7',
            correctMove: 'H'
         },
   'K8': {
            handType: 'standard',
            dealer: 'K',
            player: '8',
            correctMove: 'H'
         },
   'K9': {
            handType: 'standard',
            dealer: 'K',
            player: '9',
            correctMove: 'H'
         },
   'K10': {
            handType: 'standard',
            dealer: 'K',
            player: '10',
            correctMove: 'H'
         },
   'K11': {
            handType: 'standard',
            dealer: 'K',
            player: '11',
            correctMove: 'D'
         },
   'K12': {
            handType: 'standard',
            dealer: 'K',
            player: '12',
            correctMove: 'H'
         },
   'K13': {
            handType: 'standard',
            dealer: 'K',
            player: '13',
            correctMove: 'H'
         },
   'K14': {
            handType: 'standard',
            dealer: 'K',
            player: '14',
            correctMove: 'H'
         },
   'K15': {
            handType: 'standard',
            dealer: 'K',
            player: '15',
            correctMove: 'H'
         },
   'K16': {
            handType: 'standard',
            dealer: 'K',
            player: '16',
            correctMove: 'H'
         },
   'K17': {
            handType: 'standard',
            dealer: 'K',
            player: '17',
            correctMove: 'S'
         },
   'K18': {
            handType: 'standard',
            dealer: 'K',
            player: '18',
            correctMove: 'S'
         },
   'K19': {
            handType: 'standard',
            dealer: 'K',
            player: '19',
            correctMove: 'S'
         },
   'K20': {
            handType: 'standard',
            dealer: 'K',
            player: '20',
            correctMove: 'S'
         },
   'K21': {
            handType: 'standard',
            dealer: 'K',
            player: '21',
            correctMove: 'S'
         },
   'KA2': {
            handType: 'ace',
            dealer: 'K',
            player: 'A2',
            correctMove: 'H'
         },
   'KA3': {
            handType: 'ace',
            dealer: 'K',
            player: 'A3',
            correctMove: 'H'
         },
   'KA4': {
            handType: 'ace',
            dealer: 'K',
            player: 'A4',
            correctMove: 'H'
         },
   'KA5': {
            handType: 'ace',
            dealer: 'K',
            player: 'A5',
            correctMove: 'H'
         },
   'KA6': {
            handType: 'ace',
            dealer: 'K',
            player: 'A6',
            correctMove: 'H'
         },
   'KA7': {
            handType: 'ace',
            dealer: 'K',
            player: 'A7',
            correctMove: 'H'
         },
   'KA8': {
            handType: 'ace',
            dealer: 'K',
            player: 'A8',
            correctMove: 'S'
         },
   'KA9': {
            handType: 'ace',
            dealer: 'K',
            player: 'A9',
            correctMove: 'S'
         },
   'KA10': {
            handType: 'ace',
            dealer: 'K',
            player: 'A10',
            correctMove: 'S'
         },
   'K22': {
            handType: 'pair',
            dealer: 'K',
            player: '22',
            correctMove: 'H'
         },
   'K33': {
            handType: 'pair',
            dealer: 'K',
            player: '33',
            correctMove: 'H'
         },
   'K44': {
            handType: 'pair',
            dealer: 'K',
            player: '44',
            correctMove: 'H'
         },
   'K55': {
            handType: 'pair',
            dealer: 'K',
            player: '55',
            correctMove: 'H'
         },
   'K66': {
            handType: 'pair',
            dealer: 'K',
            player: '66',
            correctMove: 'H'
         },
   'K77': {
            handType: 'pair',
            dealer: 'K',
            player: '77',
            correctMove: 'H'
         },
   'K88': {
            handType: 'pair',
            dealer: 'K',
            player: '88',
            correctMove: 'SP'
         },
   'K99': {
            handType: 'pair',
            dealer: 'K',
            player: '99',
            correctMove: 'S'
         },
   'K1010': {
            handType: 'pair',
            dealer: 'K',
            player: '1010',
            correctMove: 'S'
         },
   'KAA': {
            handType: 'pair',
            dealer: 'K',
            player: 'AA',
            correctMove: 'SP'
         },
// DEALER: ACE CARD
   'A5': {
            handType: 'standard',
            dealer: 'A',
            player: '5',
            correctMove: 'H'
         },
   'A6': {
            handType: 'standard',
            dealer: 'A',
            player: '6',
            correctMove: 'H'
         },
   'A7': {
            handType: 'standard',
            dealer: 'A',
            player: '7',
            correctMove: 'H'
         },
   'A8': {
            handType: 'standard',
            dealer: 'A',
            player: '8',
            correctMove: 'H'
         },
   'A9': {
            handType: 'standard',
            dealer: 'A',
            player: '9',
            correctMove: 'H'
         },
   'A10': {
            handType: 'standard',
            dealer: 'A',
            player: '10',
            correctMove: 'H'
         },
   'A11': {
            handType: 'standard',
            dealer: 'A',
            player: '11',
            correctMove: 'H'
         },
   'A12': {
            handType: 'standard',
            dealer: 'A',
            player: '12',
            correctMove: 'H'
         },
   'A13': {
            handType: 'standard',
            dealer: 'A',
            player: '13',
            correctMove: 'H'
         },
   'A14': {
            handType: 'standard',
            dealer: 'A',
            player: '14',
            correctMove: 'H'
         },
   'A15': {
            handType: 'standard',
            dealer: 'A',
            player: '15',
            correctMove: 'H'
         },
   'A16': {
            handType: 'standard',
            dealer: 'A',
            player: '16',
            correctMove: 'H'
         },
   'A17': {
            handType: 'standard',
            dealer: 'A',
            player: '17',
            correctMove: 'S'
         },
   'A18': {
            handType: 'standard',
            dealer: 'A',
            player: '18',
            correctMove: 'S'
         },
   'A19': {
            handType: 'standard',
            dealer: 'A',
            player: '19',
            correctMove: 'S'
         },
   'A20': {
            handType: 'standard',
            dealer: 'A',
            player: '20',
            correctMove: 'S'
         },
   'A21': {
            handType: 'standard',
            dealer: 'A',
            player: '21',
            correctMove: 'S'
         },
   'AA2': {
            handType: 'ace',
            dealer: 'A',
            player: 'A2',
            correctMove: 'H'
         },
   'AA3': {
            handType: 'ace',
            dealer: 'A',
            player: 'A3',
            correctMove: 'H'
         },
   'AA4': {
            handType: 'ace',
            dealer: 'A',
            player: 'A4',
            correctMove: 'H'
         },
   'AA5': {
            handType: 'ace',
            dealer: 'A',
            player: 'A5',
            correctMove: 'H'
         },
   'AA6': {
            handType: 'ace',
            dealer: 'A',
            player: 'A6',
            correctMove: 'H'
         },
   'AA7': {
            handType: 'ace',
            dealer: 'A',
            player: 'A7',
            correctMove: 'H'
         },
   'AA8': {
            handType: 'ace',
            dealer: 'A',
            player: 'A8',
            correctMove: 'S'
         },
   'AA9': {
            handType: 'ace',
            dealer: 'A',
            player: 'A9',
            correctMove: 'S'
         },
   'AA10': {
            handType: 'ace',
            dealer: 'A',
            player: 'A10',
            correctMove: 'S'
         },
   'A22': {
            handType: 'pair',
            dealer: 'A',
            player: '22',
            correctMove: 'H'
         },
   'A33': {
            handType: 'pair',
            dealer: 'A',
            player: '33',
            correctMove: 'H'
         },
   'A44': {
            handType: 'pair',
            dealer: 'A',
            player: '44',
            correctMove: 'H'
         },
   'A55': {
            handType: 'pair',
            dealer: 'A',
            player: '55',
            correctMove: 'H'
         },
   'A66': {
            handType: 'pair',
            dealer: 'A',
            player: '66',
            correctMove: 'H'
         },
   'A77': {
            handType: 'pair',
            dealer: 'A',
            player: '77',
            correctMove: 'H'
         },
   'A88': {
            handType: 'pair',
            dealer: 'A',
            player: '88',
            correctMove: 'SP'
         },
   'A99': {
            handType: 'pair',
            dealer: 'A',
            player: '99',
            correctMove: 'S'
         },
   'A1010': {
            handType: 'pair',
            dealer: 'A',
            player: '1010',
            correctMove: 'S'
         },
   'AAA': {
            handType: 'pair',
            dealer: 'A',
            player: 'AA',
            correctMove: 'SP'
         }
}