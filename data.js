function Card(rank, suit, value, played) {
   this.rank = rank;
   this.suit = suit;
   this.value = value;
   this.played = played;
}

function Deck() {
   this.ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
   this.suits = ['clubs','diamonds','hearts','spades'];
   let cards = [];
   let cardValue;

   this.suits.forEach( (suitItem, suitIndex) => {
      this.ranks.forEach( (rankItem, rankIndex) => {
         if (rankItem === 'J' || rankItem === 'Q' || rankItem === 'K') {
            cardValue = 10;
         } else if (rankItem === 'A') {
            cardValue = 11;
         } else {
            cardValue = Number(rankItem);
         }
         cards.push(new Card(rankItem, suitItem, cardValue, false));
      })
   });
   return cards;
}

function Scorecard(wins, losses, winPercentage) {
   this.wins = wins;
   this.losses = losses;
   this.winPercentage = winPercentage;
}

const oddsTable = {
// DEALER: 2 CARD
   '25': {
            handType: 'standard',
            dealer: 2,
            player: '5',
            correctMove: 'Hit'
         },
   '26': {
            handType: 'standard',
            dealer: 2,
            player: '6',
            correctMove: 'Hit'
         },
   '27': {
            handType: 'standard',
            dealer: 2,
            player: '7',
            correctMove: 'Hit'
         },
   '28': {
            handType: 'standard',
            dealer: 2,
            player: '8',
            correctMove: 'Hit'
         },
   '29': {
            handType: 'standard',
            dealer: 2,
            player: '9',
            correctMove: 'Hit'
         },
   '210': {
            handType: 'standard',
            dealer: 2,
            player: '10',
            correctMove: 'Double'
         },
   '211': {
            handType: 'standard',
            dealer: 2,
            player: '11',
            correctMove: 'Double'
         },
   '212': {
            handType: 'standard',
            dealer: 2,
            player: '12',
            correctMove: 'Hit'
         },
   '213': {
            handType: 'standard',
            dealer: 2,
            player: '13',
            correctMove: 'Stand'
         },
   '214': {
            handType: 'standard',
            dealer: 2,
            player: '14',
            correctMove: 'Stand'
         },
   '215': {
            handType: 'standard',
            dealer: 2,
            player: '15',
            correctMove: 'Stand'
         },
   '216': {
            handType: 'standard',
            dealer: 2,
            player: '16',
            correctMove: 'Stand'
         },
   '217': {
            handType: 'standard',
            dealer: 2,
            player: '17',
            correctMove: 'Stand'
         },
   '218': {
            handType: 'standard',
            dealer: 2,
            player: '18',
            correctMove: 'Stand'
         },
   '219': {
            handType: 'standard',
            dealer: 2,
            player: '19',
            correctMove: 'Stand'
         },
   '220': {
            handType: 'standard',
            dealer: 2,
            player: '20',
            correctMove: 'Stand'
         },
   '221': {
            handType: 'standard',
            dealer: 2,
            player: '21',
            correctMove: 'Stand'
         },
   '2A2': {
            handType: 'ace',
            dealer: 2,
            player: 'A2',
            correctMove: 'Hit'
         },
   '2A3': {
            handType: 'ace',
            dealer: 2,
            player: 'A3',
            correctMove: 'Hit'
         },
   '2A4': {
            handType: 'ace',
            dealer: 2,
            player: 'A4',
            correctMove: 'Hit'
         },
   '2A5': {
            handType: 'ace',
            dealer: 2,
            player: 'A5',
            correctMove: 'Hit'
         },
   '2A6': {
            handType: 'ace',
            dealer: 2,
            player: 'A6',
            correctMove: 'Hit'
         },
   '2A7': {
            handType: 'ace',
            dealer: 2,
            player: 'A7',
            correctMove: 'Stand'
         },
   '2A8': {
            handType: 'ace',
            dealer: 2,
            player: 'A8',
            correctMove: 'Stand'
         },
   '2A9': {
            handType: 'ace',
            dealer: 2,
            player: 'A9',
            correctMove: 'Stand'
         },
   '2A10': {
            handType: 'ace',
            dealer: 2,
            player: 'A10',
            correctMove: 'Stand'
         },
   '222': {
            handType: 'pair',
            dealer: 2,
            player: '22',
            correctMove: 'Split'
         },
   '233': {
            handType: 'pair',
            dealer: 2,
            player: '33',
            correctMove: 'Split'
         },
   '244': {
            handType: 'pair',
            dealer: 2,
            player: '44',
            correctMove: 'Hit'
         },
   '255': {
            handType: 'pair',
            dealer: 2,
            player: '55',
            correctMove: 'Double'
         },
   '266': {
            handType: 'pair',
            dealer: 2,
            player: '66',
            correctMove: 'Split'
         },
   '277': {
            handType: 'pair',
            dealer: 2,
            player: '77',
            correctMove: 'Split'
         },
   '288': {
            handType: 'pair',
            dealer: 2,
            player: '88',
            correctMove: 'Split'
         },
   '299': {
            handType: 'pair',
            dealer: 2,
            player: '99',
            correctMove: 'Split'
         },
   '21010': {
            handType: 'pair',
            dealer: 2,
            player: '1010',
            correctMove: 'Stand'
         },
   '2AA': {
            handType: 'pair',
            dealer: 2,
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: 3 CARD
   '35': {
            handType: 'standard',
            dealer: 3,
            player: '5',
            correctMove: 'Hit'
         },
   '36': {
            handType: 'standard',
            dealer: 3,
            player: '6',
            correctMove: 'Hit'
         },
   '37': {
            handType: 'standard',
            dealer: 3,
            player: '7',
            correctMove: 'Hit'
         },
   '38': {
            handType: 'standard',
            dealer: 3,
            player: '8',
            correctMove: 'Hit'
         },
   '39': {
            handType: 'standard',
            dealer: 3,
            player: '9',
            correctMove: 'Double'
         },
   '310': {
            handType: 'standard',
            dealer: 3,
            player: '10',
            correctMove: 'Double'
         },
   '311': {
            handType: 'standard',
            dealer: 3,
            player: '11',
            correctMove: 'Double'
         },
   '312': {
            handType: 'standard',
            dealer: 3,
            player: '12',
            correctMove: 'Hit'
         },
   '313': {
            handType: 'standard',
            dealer: 3,
            player: '13',
            correctMove: 'Stand'
         },
   '314': {
            handType: 'standard',
            dealer: 3,
            player: '14',
            correctMove: 'Stand'
         },
   '315': {
            handType: 'standard',
            dealer: 3,
            player: '15',
            correctMove: 'Stand'
         },
   '316': {
            handType: 'standard',
            dealer: 3,
            player: '16',
            correctMove: 'Stand'
         },
   '317': {
            handType: 'standard',
            dealer: 3,
            player: '17',
            correctMove: 'Stand'
         },
   '318': {
            handType: 'standard',
            dealer: 3,
            player: '18',
            correctMove: 'Stand'
         },
   '319': {
            handType: 'standard',
            dealer: 3,
            player: '19',
            correctMove: 'Stand'
         },
   '320': {
            handType: 'standard',
            dealer: 3,
            player: '20',
            correctMove: 'Stand'
         },
   '321': {
            handType: 'standard',
            dealer: 3,
            player: '21',
            correctMove: 'Stand'
         },
   '3A2': {
            handType: 'ace',
            dealer: 3,
            player: 'A2',
            correctMove: 'Hit'
         },
   '3A3': {
            handType: 'ace',
            dealer: 3,
            player: 'A3',
            correctMove: 'Hit'
         },
   '3A4': {
            handType: 'ace',
            dealer: 3,
            player: 'A4',
            correctMove: 'Hit'
         },
   '3A5': {
            handType: 'ace',
            dealer: 3,
            player: 'A5',
            correctMove: 'Hit'
         },
   '3A6': {
            handType: 'ace',
            dealer: 3,
            player: 'A6',
            correctMove: 'Double'
         },
   '3A7': {
            handType: 'ace',
            dealer: 3,
            player: 'A7',
            correctMove: 'Double'
         },
   '3A8': {
            handType: 'ace',
            dealer: 3,
            player: 'A8',
            correctMove: 'Stand'
         },
   '3A9': {
            handType: 'ace',
            dealer: 3,
            player: 'A9',
            correctMove: 'Stand'
         },
   '3A10': {
            handType: 'ace',
            dealer: 3,
            player: 'A10',
            correctMove: 'Stand'
         },
   '322': {
            handType: 'pair',
            dealer: 3,
            player: '22',
            correctMove: 'Split'
         },
   '333': {
            handType: 'pair',
            dealer: 3,
            player: '33',
            correctMove: 'Split'
         },
   '344': {
            handType: 'pair',
            dealer: 3,
            player: '44',
            correctMove: 'Hit'
         },
   '355': {
            handType: 'pair',
            dealer: 3,
            player: '55',
            correctMove: 'Double'
         },
   '366': {
            handType: 'pair',
            dealer: 3,
            player: '66',
            correctMove: 'Split'
         },
   '377': {
            handType: 'pair',
            dealer: 3,
            player: '77',
            correctMove: 'Split'
         },
   '388': {
            handType: 'pair',
            dealer: 3,
            player: '88',
            correctMove: 'Split'
         },
   '399': {
            handType: 'pair',
            dealer: 3,
            player: '99',
            correctMove: 'Split'
         },
   '31010': {
            handType: 'pair',
            dealer: 3,
            player: '1010',
            correctMove: 'Stand'
         },
   '3AA': {
            handType: 'pair',
            dealer: 3,
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: 4 CARD
   '45': {
            handType: 'standard',
            dealer: 4,
            player: '5',
            correctMove: 'Hit'
         },
   '46': {
            handType: 'standard',
            dealer: 4,
            player: '6',
            correctMove: 'Hit'
         },
   '47': {
            handType: 'standard',
            dealer: 4,
            player: '7',
            correctMove: 'Hit'
         },
   '48': {
            handType: 'standard',
            dealer: 4,
            player: '8',
            correctMove: 'Hit'
         },
   '49': {
            handType: 'standard',
            dealer: 4,
            player: '9',
            correctMove: 'Double'
         },
   '410': {
            handType: 'standard',
            dealer: 4,
            player: '10',
            correctMove: 'Double'
         },
   '411': {
            handType: 'standard',
            dealer: 4,
            player: '11',
            correctMove: 'Double'
         },
   '412': {
            handType: 'standard',
            dealer: 4,
            player: '12',
            correctMove: 'Stand'
         },
   '413': {
            handType: 'standard',
            dealer: 4,
            player: '13',
            correctMove: 'Stand'
         },
   '414': {
            handType: 'standard',
            dealer: 4,
            player: '14',
            correctMove: 'Stand'
         },
   '415': {
            handType: 'standard',
            dealer: 4,
            player: '15',
            correctMove: 'Stand'
         },
   '416': {
            handType: 'standard',
            dealer: 4,
            player: '16',
            correctMove: 'Stand'
         },
   '417': {
            handType: 'standard',
            dealer: 4,
            player: '17',
            correctMove: 'Stand'
         },
   '418': {
            handType: 'standard',
            dealer: 4,
            player: '18',
            correctMove: 'Stand'
         },
   '419': {
            handType: 'standard',
            dealer: 4,
            player: '19',
            correctMove: 'Stand'
         },
   '420': {
            handType: 'standard',
            dealer: 4,
            player: '20',
            correctMove: 'Stand'
         },
   '421': {
            handType: 'standard',
            dealer: 4,
            player: '21',
            correctMove: 'Stand'
         },
   '4A2': {
            handType: 'ace',
            dealer: 4,
            player: 'A2',
            correctMove: 'Hit'
         },
   '4A3': {
            handType: 'ace',
            dealer: 4,
            player: 'A3',
            correctMove: 'Hit'
         },
   '4A4': {
            handType: 'ace',
            dealer: 4,
            player: 'A4',
            correctMove: 'Double'
         },
   '4A5': {
            handType: 'ace',
            dealer: 4,
            player: 'A5',
            correctMove: 'Double'
         },
   '4A6': {
            handType: 'ace',
            dealer: 4,
            player: 'A6',
            correctMove: 'Double'
         },
   '4A7': {
            handType: 'ace',
            dealer: 4,
            player: 'A7',
            correctMove: 'Double'
         },
   '4A8': {
            handType: 'ace',
            dealer: 4,
            player: 'A8',
            correctMove: 'Stand'
         },
   '4A9': {
            handType: 'ace',
            dealer: 4,
            player: 'A9',
            correctMove: 'Stand'
         },
   '4A10': {
            handType: 'ace',
            dealer: 4,
            player: 'A10',
            correctMove: 'Stand'
         },
   '422': {
            handType: 'pair',
            dealer: 4,
            player: '22',
            correctMove: 'Split'
         },
   '433': {
            handType: 'pair',
            dealer: 4,
            player: '33',
            correctMove: 'Split'
         },
   '444': {
            handType: 'pair',
            dealer: 4,
            player: '44',
            correctMove: 'Hit'
         },
   '455': {
            handType: 'pair',
            dealer: 4,
            player: '55',
            correctMove: 'Double'
         },
   '466': {
            handType: 'pair',
            dealer: 4,
            player: '66',
            correctMove: 'Split'
         },
   '477': {
            handType: 'pair',
            dealer: 4,
            player: '77',
            correctMove: 'Split'
         },
   '488': {
            handType: 'pair',
            dealer: 4,
            player: '88',
            correctMove: 'Split'
         },
   '499': {
            handType: 'pair',
            dealer: 4,
            player: '99',
            correctMove: 'Split'
         },
   '41010': {
            handType: 'pair',
            dealer: 4,
            player: '1010',
            correctMove: 'Stand'
         },
   '4AA': {
            handType: 'pair',
            dealer: 4,
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER 5 CARD
   '55': {
            handType: 'standard',
            dealer: 6,
            player: '5',
            correctMove: 'Hit'
         },
   '56': {
            handType: 'standard',
            dealer: 6,
            player: '6',
            correctMove: 'Hit'
         },
   '57': {
            handType: 'standard',
            dealer: 6,
            player: '7',
            correctMove: 'Hit'
         },
   '58': {
            handType: 'standard',
            dealer: 6,
            player: '8',
            correctMove: 'Hit'
         },
   '59': {
            handType: 'standard',
            dealer: 6,
            player: '9',
            correctMove: 'Double'
         },
   '510': {
            handType: 'standard',
            dealer: 6,
            player: '10',
            correctMove: 'Double'
         },
   '511': {
            handType: 'standard',
            dealer: 6,
            player: '11',
            correctMove: 'Double'
         },
   '512': {
            handType: 'standard',
            dealer: 6,
            player: '12',
            correctMove: 'Stand'
         },
   '513': {
            handType: 'standard',
            dealer: 6,
            player: '13',
            correctMove: 'Stand'
         },
   '514': {
            handType: 'standard',
            dealer: 6,
            player: '14',
            correctMove: 'Stand'
         },
   '515': {
            handType: 'standard',
            dealer: 6,
            player: '15',
            correctMove: 'Stand'
         },
   '516': {
            handType: 'standard',
            dealer: 6,
            player: '16',
            correctMove: 'Stand'
         },
   '517': {
            handType: 'standard',
            dealer: 6,
            player: '17',
            correctMove: 'Stand'
         },
   '518': {
            handType: 'standard',
            dealer: 6,
            player: '18',
            correctMove: 'Stand'
         },
   '519': {
            handType: 'standard',
            dealer: 6,
            player: '19',
            correctMove: 'Stand'
         },
   '520': {
            handType: 'standard',
            dealer: 6,
            player: '20',
            correctMove: 'Stand'
         },
   '521': {
            handType: 'standard',
            dealer: 6,
            player: '21',
            correctMove: 'Stand'
         },
   '5A2': {
            handType: 'ace',
            dealer: 6,
            player: 'A2',
            correctMove: 'Double'
         },
   '5A3': {
            handType: 'ace',
            dealer: 6,
            player: 'A3',
            correctMove: 'Double'
         },
   '5A4': {
            handType: 'ace',
            dealer: 6,
            player: 'A4',
            correctMove: 'Double'
         },
   '5A5': {
            handType: 'ace',
            dealer: 6,
            player: 'A5',
            correctMove: 'Double'
         },
   '5A6': {
            handType: 'ace',
            dealer: 6,
            player: 'A6',
            correctMove: 'Double'
         },
   '5A7': {
            handType: 'ace',
            dealer: 6,
            player: 'A7',
            correctMove: 'Double'
         },
   '5A8': {
            handType: 'ace',
            dealer: 6,
            player: 'A8',
            correctMove: 'Stand'
         },
   '5A9': {
            handType: 'ace',
            dealer: 6,
            player: 'A9',
            correctMove: 'Stand'
         },
   '5A10': {
            handType: 'ace',
            dealer: 6,
            player: 'A10',
            correctMove: 'Stand'
         },
   '522': {
            handType: 'pair',
            dealer: 6,
            player: '22',
            correctMove: 'Split'
         },
   '533': {
            handType: 'pair',
            dealer: 6,
            player: '33',
            correctMove: 'Split'
         },
   '544': {
            handType: 'pair',
            dealer: 6,
            player: '44',
            correctMove: 'Split'
         },
   '555': {
            handType: 'pair',
            dealer: 6,
            player: '55',
            correctMove: 'Double'
         },
   '566': {
            handType: 'pair',
            dealer: 6,
            player: '66',
            correctMove: 'Split'
         },
   '577': {
            handType: 'pair',
            dealer: 6,
            player: '77',
            correctMove: 'Split'
         },
   '588': {
            handType: 'pair',
            dealer: 6,
            player: '88',
            correctMove: 'Split'
         },
   '599': {
            handType: 'pair',
            dealer: 6,
            player: '99',
            correctMove: 'Split'
         },
   '51010': {
            handType: 'pair',
            dealer: 6,
            player: '1010',
            correctMove: 'Stand'
         },
   '5AA': {
            handType: 'pair',
            dealer: 6,
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: 6 CARD
   '65': {
            handType: 'standard',
            dealer: 6,
            player: '5',
            correctMove: 'Hit'
         },
   '66': {
            handType: 'standard',
            dealer: 6,
            player: '6',
            correctMove: 'Hit'
         },
   '67': {
            handType: 'standard',
            dealer: 6,
            player: '7',
            correctMove: 'Hit'
         },
   '68': {
            handType: 'standard',
            dealer: 6,
            player: '8',
            correctMove: 'Hit'
         },
   '69': {
            handType: 'standard',
            dealer: 6,
            player: '9',
            correctMove: 'Double'
         },
   '610': {
            handType: 'standard',
            dealer: 6,
            player: '10',
            correctMove: 'Double'
         },
   '611': {
            handType: 'standard',
            dealer: 6,
            player: '11',
            correctMove: 'Double'
         },
   '612': {
            handType: 'standard',
            dealer: 6,
            player: '12',
            correctMove: 'Stand'
         },
   '613': {
            handType: 'standard',
            dealer: 6,
            player: '13',
            correctMove: 'Stand'
         },
   '614': {
            handType: 'standard',
            dealer: 6,
            player: '14',
            correctMove: 'Stand'
         },
   '615': {
            handType: 'standard',
            dealer: 6,
            player: '15',
            correctMove: 'Stand'
         },
   '616': {
            handType: 'standard',
            dealer: 6,
            player: '16',
            correctMove: 'Stand'
         },
   '617': {
            handType: 'standard',
            dealer: 6,
            player: '17',
            correctMove: 'Stand'
         },
   '618': {
            handType: 'standard',
            dealer: 6,
            player: '18',
            correctMove: 'Stand'
         },
   '619': {
            handType: 'standard',
            dealer: 6,
            player: '19',
            correctMove: 'Stand'
         },
   '620': {
            handType: 'standard',
            dealer: 6,
            player: '20',
            correctMove: 'Stand'
         },
   '621': {
            handType: 'standard',
            dealer: 6,
            player: '21',
            correctMove: 'Stand'
         },
   '6A2': {
            handType: 'ace',
            dealer: 6,
            player: 'A2',
            correctMove: 'Double'
         },
   '6A3': {
            handType: 'ace',
            dealer: 6,
            player: 'A3',
            correctMove: 'Double'
         },
   '6A4': {
            handType: 'ace',
            dealer: 6,
            player: 'A4',
            correctMove: 'Double'
         },
   '6A5': {
            handType: 'ace',
            dealer: 6,
            player: 'A5',
            correctMove: 'Double'
         },
   '6A6': {
            handType: 'ace',
            dealer: 6,
            player: 'A6',
            correctMove: 'Double'
         },
   '6A7': {
            handType: 'ace',
            dealer: 6,
            player: 'A7',
            correctMove: 'Double'
         },
   '6A8': {
            handType: 'ace',
            dealer: 6,
            player: 'A8',
            correctMove: 'Stand'
         },
   '6A9': {
            handType: 'ace',
            dealer: 6,
            player: 'A9',
            correctMove: 'Stand'
         },
   '6A10': {
            handType: 'ace',
            dealer: 6,
            player: 'A10',
            correctMove: 'Stand'
         },
   '622': {
            handType: 'pair',
            dealer: 6,
            player: '22',
            correctMove: 'Split'
         },
   '633': {
            handType: 'pair',
            dealer: 6,
            player: '33',
            correctMove: 'Split'
         },
   '644': {
            handType: 'pair',
            dealer: 6,
            player: '44',
            correctMove: 'Split'
         },
   '655': {
            handType: 'pair',
            dealer: 6,
            player: '55',
            correctMove: 'Double'
         },
   '666': {
            handType: 'pair',
            dealer: 6,
            player: '66',
            correctMove: 'Split'
         },
   '677': {
            handType: 'pair',
            dealer: 6,
            player: '77',
            correctMove: 'Split'
         },
   '688': {
            handType: 'pair',
            dealer: 6,
            player: '88',
            correctMove: 'Split'
         },
   '699': {
            handType: 'pair',
            dealer: 6,
            player: '99',
            correctMove: 'Split'
         },
   '61010': {
            handType: 'pair',
            dealer: 6,
            player: '1010',
            correctMove: 'Stand'
         },
   '6AA': {
            handType: 'pair',
            dealer: 6,
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: 7 CARD
   '75': {
            handType: 'standard',
            dealer: 7,
            player: '5',
            correctMove: 'Hit'
         },
   '76': {
            handType: 'standard',
            dealer: 7,
            player: '6',
            correctMove: 'Hit'
         },
   '77': {
            handType: 'standard',
            dealer: 7,
            player: '7',
            correctMove: 'Hit'
         },
   '78': {
            handType: 'standard',
            dealer: 7,
            player: '8',
            correctMove: 'Hit'
         },
   '79': {
            handType: 'standard',
            dealer: 7,
            player: '9',
            correctMove: 'Hit'
         },
   '710': {
            handType: 'standard',
            dealer: 7,
            player: '10',
            correctMove: 'Double'
         },
   '711': {
            handType: 'standard',
            dealer: 7,
            player: '11',
            correctMove: 'Double'
         },
   '712': {
            handType: 'standard',
            dealer: 7,
            player: '12',
            correctMove: 'Hit'
         },
   '713': {
            handType: 'standard',
            dealer: 7,
            player: '13',
            correctMove: 'Hit'
         },
   '714': {
            handType: 'standard',
            dealer: 7,
            player: '14',
            correctMove: 'Hit'
         },
   '715': {
            handType: 'standard',
            dealer: 7,
            player: '15',
            correctMove: 'Hit'
         },
   '716': {
            handType: 'standard',
            dealer: 7,
            player: '16',
            correctMove: 'Hit'
         },
   '717': {
            handType: 'standard',
            dealer: 7,
            player: '17',
            correctMove: 'Stand'
         },
   '718': {
            handType: 'standard',
            dealer: 7,
            player: '18',
            correctMove: 'Stand'
         },
   '719': {
            handType: 'standard',
            dealer: 7,
            player: '19',
            correctMove: 'Stand'
         },
   '720': {
            handType: 'standard',
            dealer: 7,
            player: '20',
            correctMove: 'Stand'
         },
   '721': {
            handType: 'standard',
            dealer: 7,
            player: '21',
            correctMove: 'Stand'
         },
   '7A2': {
            handType: 'ace',
            dealer: 7,
            player: 'A2',
            correctMove: 'Hit'
         },
   '7A3': {
            handType: 'ace',
            dealer: 7,
            player: 'A3',
            correctMove: 'Hit'
         },
   '7A4': {
            handType: 'ace',
            dealer: 7,
            player: 'A4',
            correctMove: 'Hit'
         },
   '7A5': {
            handType: 'ace',
            dealer: 7,
            player: 'A5',
            correctMove: 'Hit'
         },
   '7A6': {
            handType: 'ace',
            dealer: 7,
            player: 'A6',
            correctMove: 'Hit'
         },
   '7A7': {
            handType: 'ace',
            dealer: 7,
            player: 'A7',
            correctMove: 'Stand'
         },
   '7A8': {
            handType: 'ace',
            dealer: 7,
            player: 'A8',
            correctMove: 'Stand'
         },
   '7A9': {
            handType: 'ace',
            dealer: 7,
            player: 'A9',
            correctMove: 'Stand'
         },
   '7A10': {
            handType: 'ace',
            dealer: 7,
            player: 'A10',
            correctMove: 'Stand'
         },
   '722': {
            handType: 'pair',
            dealer: 7,
            player: '22',
            correctMove: 'Split'
         },
   '733': {
            handType: 'pair',
            dealer: 7,
            player: '33',
            correctMove: 'Split'
         },
   '744': {
            handType: 'pair',
            dealer: 7,
            player: '44',
            correctMove: 'Hit'
         },
   '755': {
            handType: 'pair',
            dealer: 7,
            player: '55',
            correctMove: 'Double'
         },
   '766': {
            handType: 'pair',
            dealer: 7,
            player: '66',
            correctMove: 'Hit'
         },
   '777': {
            handType: 'pair',
            dealer: 7,
            player: '77',
            correctMove: 'Split'
         },
   '788': {
            handType: 'pair',
            dealer: 7,
            player: '88',
            correctMove: 'Split'
         },
   '799': {
            handType: 'pair',
            dealer: 7,
            player: '99',
            correctMove: 'Stand'
         },
   '71010': {
            handType: 'pair',
            dealer: 7,
            player: '1010',
            correctMove: 'Stand'
         },
   '7AA': {
            handType: 'pair',
            dealer: 7,
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: 8 CARD
   '85': {
            handType: 'standard',
            dealer: 8,
            player: '5',
            correctMove: 'Hit'
         },
   '86': {
            handType: 'standard',
            dealer: 8,
            player: '6',
            correctMove: 'Hit'
         },
   '87': {
            handType: 'standard',
            dealer: 8,
            player: '7',
            correctMove: 'Hit'
         },
   '88': {
            handType: 'standard',
            dealer: 8,
            player: '8',
            correctMove: 'Hit'
         },
   '89': {
            handType: 'standard',
            dealer: 8,
            player: '9',
            correctMove: 'Hit'
         },
   '810': {
            handType: 'standard',
            dealer: 8,
            player: '10',
            correctMove: 'Double'
         },
   '811': {
            handType: 'standard',
            dealer: 8,
            player: '11',
            correctMove: 'Double'
         },
   '812': {
            handType: 'standard',
            dealer: 8,
            player: '12',
            correctMove: 'Hit'
         },
   '813': {
            handType: 'standard',
            dealer: 8,
            player: '13',
            correctMove: 'Hit'
         },
   '814': {
            handType: 'standard',
            dealer: 8,
            player: '14',
            correctMove: 'Hit'
         },
   '815': {
            handType: 'standard',
            dealer: 8,
            player: '15',
            correctMove: 'Hit'
         },
   '816': {
            handType: 'standard',
            dealer: 8,
            player: '16',
            correctMove: 'Hit'
         },
   '817': {
            handType: 'standard',
            dealer: 8,
            player: '17',
            correctMove: 'Stand'
         },
   '818': {
            handType: 'standard',
            dealer: 8,
            player: '18',
            correctMove: 'Stand'
         },
   '819': {
            handType: 'standard',
            dealer: 8,
            player: '19',
            correctMove: 'Stand'
         },
   '820': {
            handType: 'standard',
            dealer: 8,
            player: '20',
            correctMove: 'Stand'
         },
   '821': {
            handType: 'standard',
            dealer: 8,
            player: '21',
            correctMove: 'Stand'
         },
   '8A2': {
            handType: 'ace',
            dealer: 8,
            player: 'A2',
            correctMove: 'Hit'
         },
   '8A3': {
            handType: 'ace',
            dealer: 8,
            player: 'A3',
            correctMove: 'Hit'
         },
   '8A4': {
            handType: 'ace',
            dealer: 8,
            player: 'A4',
            correctMove: 'Hit'
         },
   '8A5': {
            handType: 'ace',
            dealer: 8,
            player: 'A5',
            correctMove: 'Hit'
         },
   '8A6': {
            handType: 'ace',
            dealer: 8,
            player: 'A6',
            correctMove: 'Hit'
         },
   '8A7': {
            handType: 'ace',
            dealer: 8,
            player: 'A7',
            correctMove: 'Stand'
         },
   '8A8': {
            handType: 'ace',
            dealer: 8,
            player: 'A8',
            correctMove: 'Stand'
         },
   '8A9': {
            handType: 'ace',
            dealer: 8,
            player: 'A9',
            correctMove: 'Stand'
         },
   '8A10': {
            handType: 'ace',
            dealer: 8,
            player: 'A10',
            correctMove: 'Stand'
         },
   '822': {
            handType: 'pair',
            dealer: 8,
            player: '22',
            correctMove: 'Hit'
         },
   '833': {
            handType: 'pair',
            dealer: 8,
            player: '33',
            correctMove: 'Hit'
         },
   '844': {
            handType: 'pair',
            dealer: 8,
            player: '44',
            correctMove: 'Hit'
         },
   '855': {
            handType: 'pair',
            dealer: 8,
            player: '55',
            correctMove: 'Double'
         },
   '866': {
            handType: 'pair',
            dealer: 8,
            player: '66',
            correctMove: 'Hit'
         },
   '877': {
            handType: 'pair',
            dealer: 8,
            player: '77',
            correctMove: 'Hit'
         },
   '888': {
            handType: 'pair',
            dealer: 8,
            player: '88',
            correctMove: 'Split'
         },
   '899': {
            handType: 'pair',
            dealer: 8,
            player: '99',
            correctMove: 'Split'
         },
   '81010': {
            handType: 'pair',
            dealer: 8,
            player: '1010',
            correctMove: 'Stand'
         },
   '8AA': {
            handType: 'pair',
            dealer: 8,
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: 9 CARD
   '95': {
            handType: 'standard',
            dealer: 9,
            player: '5',
            correctMove: 'Hit'
         },
   '96': {
            handType: 'standard',
            dealer: 9,
            player: '6',
            correctMove: 'Hit'
         },
   '97': {
            handType: 'standard',
            dealer: 9,
            player: '7',
            correctMove: 'Hit'
         },
   '98': {
            handType: 'standard',
            dealer: 9,
            player: '8',
            correctMove: 'Hit'
         },
   '99': {
            handType: 'standard',
            dealer: 9,
            player: '9',
            correctMove: 'Hit'
         },
   '910': {
            handType: 'standard',
            dealer: 9,
            player: '10',
            correctMove: 'Double'
         },
   '911': {
            handType: 'standard',
            dealer: 9,
            player: '11',
            correctMove: 'Double'
         },
   '912': {
            handType: 'standard',
            dealer: 9,
            player: '12',
            correctMove: 'Hit'
         },
   '913': {
            handType: 'standard',
            dealer: 9,
            player: '13',
            correctMove: 'Hit'
         },
   '914': {
            handType: 'standard',
            dealer: 9,
            player: '14',
            correctMove: 'Hit'
         },
   '915': {
            handType: 'standard',
            dealer: 9,
            player: '15',
            correctMove: 'Hit'
         },
   '916': {
            handType: 'standard',
            dealer: 9,
            player: '16',
            correctMove: 'Hit'
         },
   '917': {
            handType: 'standard',
            dealer: 9,
            player: '17',
            correctMove: 'Stand'
         },
   '918': {
            handType: 'standard',
            dealer: 9,
            player: '18',
            correctMove: 'Stand'
         },
   '919': {
            handType: 'standard',
            dealer: 9,
            player: '19',
            correctMove: 'Stand'
         },
   '920': {
            handType: 'standard',
            dealer: 9,
            player: '20',
            correctMove: 'Stand'
         },
   '921': {
            handType: 'standard',
            dealer: 9,
            player: '21',
            correctMove: 'Stand'
         },
   '9A2': {
            handType: 'ace',
            dealer: 9,
            player: 'A2',
            correctMove: 'Hit'
         },
   '9A3': {
            handType: 'ace',
            dealer: 9,
            player: 'A3',
            correctMove: 'Hit'
         },
   '9A4': {
            handType: 'ace',
            dealer: 9,
            player: 'A4',
            correctMove: 'Hit'
         },
   '9A5': {
            handType: 'ace',
            dealer: 9,
            player: 'A5',
            correctMove: 'Hit'
         },
   '9A6': {
            handType: 'ace',
            dealer: 9,
            player: 'A6',
            correctMove: 'Hit'
         },
   '9A7': {
            handType: 'ace',
            dealer: 9,
            player: 'A7',
            correctMove: 'Hit'
         },
   '9A8': {
            handType: 'ace',
            dealer: 9,
            player: 'A8',
            correctMove: 'Stand'
         },
   '9A9': {
            handType: 'ace',
            dealer: 9,
            player: 'A9',
            correctMove: 'Stand'
         },
   '9A10': {
            handType: 'ace',
            dealer: 9,
            player: 'A10',
            correctMove: 'Stand'
         },
   '922': {
            handType: 'pair',
            dealer: 9,
            player: '22',
            correctMove: 'Hit'
         },
   '933': {
            handType: 'pair',
            dealer: 9,
            player: '33',
            correctMove: 'Hit'
         },
   '944': {
            handType: 'pair',
            dealer: 9,
            player: '44',
            correctMove: 'Hit'
         },
   '955': {
            handType: 'pair',
            dealer: 9,
            player: '55',
            correctMove: 'Double'
         },
   '966': {
            handType: 'pair',
            dealer: 9,
            player: '66',
            correctMove: 'Hit'
         },
   '977': {
            handType: 'pair',
            dealer: 9,
            player: '77',
            correctMove: 'Hit'
         },
   '988': {
            handType: 'pair',
            dealer: 9,
            player: '88',
            correctMove: 'Split'
         },
   '999': {
            handType: 'pair',
            dealer: 9,
            player: '99',
            correctMove: 'Split'
         },
   '91010': {
            handType: 'pair',
            dealer: 9,
            player: '1010',
            correctMove: 'Stand'
         },
   '9AA': {
            handType: 'pair',
            dealer: 9,
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: 10 CARD
   '105': {
            handType: 'standard',
            dealer: 10,
            player: '5',
            correctMove: 'Hit'
         },
   '106': {
            handType: 'standard',
            dealer: 10,
            player: '6',
            correctMove: 'Hit'
         },
   '107': {
            handType: 'standard',
            dealer: 10,
            player: '7',
            correctMove: 'Hit'
         },
   '108': {
            handType: 'standard',
            dealer: 10,
            player: '8',
            correctMove: 'Hit'
         },
   '109': {
            handType: 'standard',
            dealer: 10,
            player: '9',
            correctMove: 'Hit'
         },
   '1010': {
            handType: 'standard',
            dealer: 10,
            player: '10',
            correctMove: 'Hit'
         },
   '1011': {
            handType: 'standard',
            dealer: 10,
            player: '11',
            correctMove: 'Double'
         },
   '1012': {
            handType: 'standard',
            dealer: 10,
            player: '12',
            correctMove: 'Hit'
         },
   '1013': {
            handType: 'standard',
            dealer: 10,
            player: '13',
            correctMove: 'Hit'
         },
   '1014': {
            handType: 'standard',
            dealer: 10,
            player: '14',
            correctMove: 'Hit'
         },
   '1015': {
            handType: 'standard',
            dealer: 10,
            player: '15',
            correctMove: 'Hit'
         },
   '1016': {
            handType: 'standard',
            dealer: 10,
            player: '16',
            correctMove: 'Hit'
         },
   '1017': {
            handType: 'standard',
            dealer: 10,
            player: '17',
            correctMove: 'Stand'
         },
   '1018': {
            handType: 'standard',
            dealer: 10,
            player: '18',
            correctMove: 'Stand'
         },
   '1019': {
            handType: 'standard',
            dealer: 10,
            player: '19',
            correctMove: 'Stand'
         },
   '1020': {
            handType: 'standard',
            dealer: 10,
            player: '20',
            correctMove: 'Stand'
         },
   '1021': {
            handType: 'standard',
            dealer: 10,
            player: '21',
            correctMove: 'Stand'
         },
   '10A2': {
            handType: 'ace',
            dealer: 10,
            player: 'A2',
            correctMove: 'Hit'
         },
   '10A3': {
            handType: 'ace',
            dealer: 10,
            player: 'A3',
            correctMove: 'Hit'
         },
   '10A4': {
            handType: 'ace',
            dealer: 10,
            player: 'A4',
            correctMove: 'Hit'
         },
   '10A5': {
            handType: 'ace',
            dealer: 10,
            player: 'A5',
            correctMove: 'Hit'
         },
   '10A6': {
            handType: 'ace',
            dealer: 10,
            player: 'A6',
            correctMove: 'Hit'
         },
   '10A7': {
            handType: 'ace',
            dealer: 10,
            player: 'A7',
            correctMove: 'Hit'
         },
   '10A8': {
            handType: 'ace',
            dealer: 10,
            player: 'A8',
            correctMove: 'Stand'
         },
   '10A9': {
            handType: 'ace',
            dealer: 10,
            player: 'A9',
            correctMove: 'Stand'
         },
   '10A10': {
            handType: 'ace',
            dealer: 10,
            player: 'A10',
            correctMove: 'Stand'
         },
   '1022': {
            handType: 'pair',
            dealer: 10,
            player: '22',
            correctMove: 'Hit'
         },
   '1033': {
            handType: 'pair',
            dealer: 10,
            player: '33',
            correctMove: 'Hit'
         },
   '1044': {
            handType: 'pair',
            dealer: 10,
            player: '44',
            correctMove: 'Hit'
         },
   '1055': {
            handType: 'pair',
            dealer: 10,
            player: '55',
            correctMove: 'Hit'
         },
   '1066': {
            handType: 'pair',
            dealer: 10,
            player: '66',
            correctMove: 'Hit'
         },
   '1077': {
            handType: 'pair',
            dealer: 10,
            player: '77',
            correctMove: 'Hit'
         },
   '1088': {
            handType: 'pair',
            dealer: 10,
            player: '88',
            correctMove: 'Split'
         },
   '1099': {
            handType: 'pair',
            dealer: 10,
            player: '99',
            correctMove: 'Stand'
         },
   '101010': {
            handType: 'pair',
            dealer: 10,
            player: '1010',
            correctMove: 'Stand'
         },
   '10AA': {
            handType: 'pair',
            dealer: 10,
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: J CARD
   'J5': {
            handType: 'standard',
            dealer: 'J',
            player: '5',
            correctMove: 'Hit'
         },
   'J6': {
            handType: 'standard',
            dealer: 'J',
            player: '6',
            correctMove: 'Hit'
         },
   'J7': {
            handType: 'standard',
            dealer: 'J',
            player: '7',
            correctMove: 'Hit'
         },
   'J8': {
            handType: 'standard',
            dealer: 'J',
            player: '8',
            correctMove: 'Hit'
         },
   'J9': {
            handType: 'standard',
            dealer: 'J',
            player: '9',
            correctMove: 'Hit'
         },
   'J10': {
            handType: 'standard',
            dealer: 'J',
            player: '10',
            correctMove: 'Hit'
         },
   'J11': {
            handType: 'standard',
            dealer: 'J',
            player: '11',
            correctMove: 'Double'
         },
   'J12': {
            handType: 'standard',
            dealer: 'J',
            player: '12',
            correctMove: 'Hit'
         },
   'J13': {
            handType: 'standard',
            dealer: 'J',
            player: '13',
            correctMove: 'Hit'
         },
   'J14': {
            handType: 'standard',
            dealer: 'J',
            player: '14',
            correctMove: 'Hit'
         },
   'J15': {
            handType: 'standard',
            dealer: 'J',
            player: '15',
            correctMove: 'Hit'
         },
   'J16': {
            handType: 'standard',
            dealer: 'J',
            player: '16',
            correctMove: 'Hit'
         },
   'J17': {
            handType: 'standard',
            dealer: 'J',
            player: '17',
            correctMove: 'Stand'
         },
   'J18': {
            handType: 'standard',
            dealer: 'J',
            player: '18',
            correctMove: 'Stand'
         },
   'J19': {
            handType: 'standard',
            dealer: 'J',
            player: '19',
            correctMove: 'Stand'
         },
   'J20': {
            handType: 'standard',
            dealer: 'J',
            player: '20',
            correctMove: 'Stand'
         },
   'J21': {
            handType: 'standard',
            dealer: 'J',
            player: '21',
            correctMove: 'Stand'
         },
   'JA2': {
            handType: 'ace',
            dealer: 'J',
            player: 'A2',
            correctMove: 'Hit'
         },
   'JA3': {
            handType: 'ace',
            dealer: 'J',
            player: 'A3',
            correctMove: 'Hit'
         },
   'JA4': {
            handType: 'ace',
            dealer: 'J',
            player: 'A4',
            correctMove: 'Hit'
         },
   'JA5': {
            handType: 'ace',
            dealer: 'J',
            player: 'A5',
            correctMove: 'Hit'
         },
   'JA6': {
            handType: 'ace',
            dealer: 'J',
            player: 'A6',
            correctMove: 'Hit'
         },
   'JA7': {
            handType: 'ace',
            dealer: 'J',
            player: 'A7',
            correctMove: 'Hit'
         },
   'JA8': {
            handType: 'ace',
            dealer: 'J',
            player: 'A8',
            correctMove: 'Stand'
         },
   'JA9': {
            handType: 'ace',
            dealer: 'J',
            player: 'A9',
            correctMove: 'Stand'
         },
   'JA10': {
            handType: 'ace',
            dealer: 'J',
            player: 'A10',
            correctMove: 'Stand'
         },
   'J22': {
            handType: 'pair',
            dealer: 'J',
            player: '22',
            correctMove: 'Hit'
         },
   'J33': {
            handType: 'pair',
            dealer: 'J',
            player: '33',
            correctMove: 'Hit'
         },
   'J44': {
            handType: 'pair',
            dealer: 'J',
            player: '44',
            correctMove: 'Hit'
         },
   'J55': {
            handType: 'pair',
            dealer: 'J',
            player: '55',
            correctMove: 'Hit'
         },
   'J66': {
            handType: 'pair',
            dealer: 'J',
            player: '66',
            correctMove: 'Hit'
         },
   'J77': {
            handType: 'pair',
            dealer: 'J',
            player: '77',
            correctMove: 'Hit'
         },
   'J88': {
            handType: 'pair',
            dealer: 'J',
            player: '88',
            correctMove: 'Split'
         },
   'J99': {
            handType: 'pair',
            dealer: 'J',
            player: '99',
            correctMove: 'Stand'
         },
   'J1010': {
            handType: 'pair',
            dealer: 'J',
            player: '1010',
            correctMove: 'Stand'
         },
   'JAA': {
            handType: 'pair',
            dealer: 'J',
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: Q CARD
   'Q5': {
            handType: 'standard',
            dealer: 'Q',
            player: '5',
            correctMove: 'Hit'
         },
   'Q6': {
            handType: 'standard',
            dealer: 'Q',
            player: '6',
            correctMove: 'Hit'
         },
   'Q7': {
            handType: 'standard',
            dealer: 'Q',
            player: '7',
            correctMove: 'Hit'
         },
   'Q8': {
            handType: 'standard',
            dealer: 'Q',
            player: '8',
            correctMove: 'Hit'
         },
   'Q9': {
            handType: 'standard',
            dealer: 'Q',
            player: '9',
            correctMove: 'Hit'
         },
   'Q10': {
            handType: 'standard',
            dealer: 'Q',
            player: '10',
            correctMove: 'Hit'
         },
   'Q11': {
            handType: 'standard',
            dealer: 'Q',
            player: '11',
            correctMove: 'Double'
         },
   'Q12': {
            handType: 'standard',
            dealer: 'Q',
            player: '12',
            correctMove: 'Hit'
         },
   'Q13': {
            handType: 'standard',
            dealer: 'Q',
            player: '13',
            correctMove: 'Hit'
         },
   'Q14': {
            handType: 'standard',
            dealer: 'Q',
            player: '14',
            correctMove: 'Hit'
         },
   'Q15': {
            handType: 'standard',
            dealer: 'Q',
            player: '15',
            correctMove: 'Hit'
         },
   'Q16': {
            handType: 'standard',
            dealer: 'Q',
            player: '16',
            correctMove: 'Hit'
         },
   'Q17': {
            handType: 'standard',
            dealer: 'Q',
            player: '17',
            correctMove: 'Stand'
         },
   'Q18': {
            handType: 'standard',
            dealer: 'Q',
            player: '18',
            correctMove: 'Stand'
         },
   'Q19': {
            handType: 'standard',
            dealer: 'Q',
            player: '19',
            correctMove: 'Stand'
         },
   'Q20': {
            handType: 'standard',
            dealer: 'Q',
            player: '20',
            correctMove: 'Stand'
         },
   'Q21': {
            handType: 'standard',
            dealer: 'Q',
            player: '21',
            correctMove: 'Stand'
         },
   'QA2': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A2',
            correctMove: 'Hit'
         },
   'QA3': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A3',
            correctMove: 'Hit'
         },
   'QA4': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A4',
            correctMove: 'Hit'
         },
   'QA5': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A5',
            correctMove: 'Hit'
         },
   'QA6': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A6',
            correctMove: 'Hit'
         },
   'QA7': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A7',
            correctMove: 'Hit'
         },
   'QA8': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A8',
            correctMove: 'Stand'
         },
   'QA9': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A9',
            correctMove: 'Stand'
         },
   'QA10': {
            handType: 'ace',
            dealer: 'Q',
            player: 'A10',
            correctMove: 'Stand'
         },
   'Q22': {
            handType: 'pair',
            dealer: 'Q',
            player: '22',
            correctMove: 'Hit'
         },
   'Q33': {
            handType: 'pair',
            dealer: 'Q',
            player: '33',
            correctMove: 'Hit'
         },
   'Q44': {
            handType: 'pair',
            dealer: 'Q',
            player: '44',
            correctMove: 'Hit'
         },
   'Q55': {
            handType: 'pair',
            dealer: 'Q',
            player: '55',
            correctMove: 'Hit'
         },
   'Q66': {
            handType: 'pair',
            dealer: 'Q',
            player: '66',
            correctMove: 'Hit'
         },
   'Q77': {
            handType: 'pair',
            dealer: 'Q',
            player: '77',
            correctMove: 'Hit'
         },
   'Q88': {
            handType: 'pair',
            dealer: 'Q',
            player: '88',
            correctMove: 'Split'
         },
   'Q99': {
            handType: 'pair',
            dealer: 'Q',
            player: '99',
            correctMove: 'Stand'
         },
   'Q1010': {
            handType: 'pair',
            dealer: 'Q',
            player: '1010',
            correctMove: 'Stand'
         },
   'QAA': {
            handType: 'pair',
            dealer: 'Q',
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: K CARD
   'K5': {
            handType: 'standard',
            dealer: 'K',
            player: '5',
            correctMove: 'Hit'
         },
   'K6': {
            handType: 'standard',
            dealer: 'K',
            player: '6',
            correctMove: 'Hit'
         },
   'K7': {
            handType: 'standard',
            dealer: 'K',
            player: '7',
            correctMove: 'Hit'
         },
   'K8': {
            handType: 'standard',
            dealer: 'K',
            player: '8',
            correctMove: 'Hit'
         },
   'K9': {
            handType: 'standard',
            dealer: 'K',
            player: '9',
            correctMove: 'Hit'
         },
   'K10': {
            handType: 'standard',
            dealer: 'K',
            player: '10',
            correctMove: 'Hit'
         },
   'K11': {
            handType: 'standard',
            dealer: 'K',
            player: '11',
            correctMove: 'Double'
         },
   'K12': {
            handType: 'standard',
            dealer: 'K',
            player: '12',
            correctMove: 'Hit'
         },
   'K13': {
            handType: 'standard',
            dealer: 'K',
            player: '13',
            correctMove: 'Hit'
         },
   'K14': {
            handType: 'standard',
            dealer: 'K',
            player: '14',
            correctMove: 'Hit'
         },
   'K15': {
            handType: 'standard',
            dealer: 'K',
            player: '15',
            correctMove: 'Hit'
         },
   'K16': {
            handType: 'standard',
            dealer: 'K',
            player: '16',
            correctMove: 'Hit'
         },
   'K17': {
            handType: 'standard',
            dealer: 'K',
            player: '17',
            correctMove: 'Stand'
         },
   'K18': {
            handType: 'standard',
            dealer: 'K',
            player: '18',
            correctMove: 'Stand'
         },
   'K19': {
            handType: 'standard',
            dealer: 'K',
            player: '19',
            correctMove: 'Stand'
         },
   'K20': {
            handType: 'standard',
            dealer: 'K',
            player: '20',
            correctMove: 'Stand'
         },
   'K21': {
            handType: 'standard',
            dealer: 'K',
            player: '21',
            correctMove: 'Stand'
         },
   'KA2': {
            handType: 'ace',
            dealer: 'K',
            player: 'A2',
            correctMove: 'Hit'
         },
   'KA3': {
            handType: 'ace',
            dealer: 'K',
            player: 'A3',
            correctMove: 'Hit'
         },
   'KA4': {
            handType: 'ace',
            dealer: 'K',
            player: 'A4',
            correctMove: 'Hit'
         },
   'KA5': {
            handType: 'ace',
            dealer: 'K',
            player: 'A5',
            correctMove: 'Hit'
         },
   'KA6': {
            handType: 'ace',
            dealer: 'K',
            player: 'A6',
            correctMove: 'Hit'
         },
   'KA7': {
            handType: 'ace',
            dealer: 'K',
            player: 'A7',
            correctMove: 'Hit'
         },
   'KA8': {
            handType: 'ace',
            dealer: 'K',
            player: 'A8',
            correctMove: 'Stand'
         },
   'KA9': {
            handType: 'ace',
            dealer: 'K',
            player: 'A9',
            correctMove: 'Stand'
         },
   'KA10': {
            handType: 'ace',
            dealer: 'K',
            player: 'A10',
            correctMove: 'Stand'
         },
   'K22': {
            handType: 'pair',
            dealer: 'K',
            player: '22',
            correctMove: 'Hit'
         },
   'K33': {
            handType: 'pair',
            dealer: 'K',
            player: '33',
            correctMove: 'Hit'
         },
   'K44': {
            handType: 'pair',
            dealer: 'K',
            player: '44',
            correctMove: 'Hit'
         },
   'K55': {
            handType: 'pair',
            dealer: 'K',
            player: '55',
            correctMove: 'Hit'
         },
   'K66': {
            handType: 'pair',
            dealer: 'K',
            player: '66',
            correctMove: 'Hit'
         },
   'K77': {
            handType: 'pair',
            dealer: 'K',
            player: '77',
            correctMove: 'Hit'
         },
   'K88': {
            handType: 'pair',
            dealer: 'K',
            player: '88',
            correctMove: 'Split'
         },
   'K99': {
            handType: 'pair',
            dealer: 'K',
            player: '99',
            correctMove: 'Stand'
         },
   'K1010': {
            handType: 'pair',
            dealer: 'K',
            player: '1010',
            correctMove: 'Stand'
         },
   'KAA': {
            handType: 'pair',
            dealer: 'K',
            player: 'AA',
            correctMove: 'Split'
         },
// DEALER: ACE CARD
   'A5': {
            handType: 'standard',
            dealer: 'A',
            player: '5',
            correctMove: 'Hit'
         },
   'A6': {
            handType: 'standard',
            dealer: 'A',
            player: '6',
            correctMove: 'Hit'
         },
   'A7': {
            handType: 'standard',
            dealer: 'A',
            player: '7',
            correctMove: 'Hit'
         },
   'A8': {
            handType: 'standard',
            dealer: 'A',
            player: '8',
            correctMove: 'Hit'
         },
   'A9': {
            handType: 'standard',
            dealer: 'A',
            player: '9',
            correctMove: 'Hit'
         },
   'A10': {
            handType: 'standard',
            dealer: 'A',
            player: '10',
            correctMove: 'Hit'
         },
   'A11': {
            handType: 'standard',
            dealer: 'A',
            player: '11',
            correctMove: 'Hit'
         },
   'A12': {
            handType: 'standard',
            dealer: 'A',
            player: '12',
            correctMove: 'Hit'
         },
   'A13': {
            handType: 'standard',
            dealer: 'A',
            player: '13',
            correctMove: 'Hit'
         },
   'A14': {
            handType: 'standard',
            dealer: 'A',
            player: '14',
            correctMove: 'Hit'
         },
   'A15': {
            handType: 'standard',
            dealer: 'A',
            player: '15',
            correctMove: 'Hit'
         },
   'A16': {
            handType: 'standard',
            dealer: 'A',
            player: '16',
            correctMove: 'Hit'
         },
   'A17': {
            handType: 'standard',
            dealer: 'A',
            player: '17',
            correctMove: 'Stand'
         },
   'A18': {
            handType: 'standard',
            dealer: 'A',
            player: '18',
            correctMove: 'Stand'
         },
   'A19': {
            handType: 'standard',
            dealer: 'A',
            player: '19',
            correctMove: 'Stand'
         },
   'A20': {
            handType: 'standard',
            dealer: 'A',
            player: '20',
            correctMove: 'Stand'
         },
   'A21': {
            handType: 'standard',
            dealer: 'A',
            player: '21',
            correctMove: 'Stand'
         },
   'AA2': {
            handType: 'ace',
            dealer: 'A',
            player: 'A2',
            correctMove: 'Hit'
         },
   'AA3': {
            handType: 'ace',
            dealer: 'A',
            player: 'A3',
            correctMove: 'Hit'
         },
   'AA4': {
            handType: 'ace',
            dealer: 'A',
            player: 'A4',
            correctMove: 'Hit'
         },
   'AA5': {
            handType: 'ace',
            dealer: 'A',
            player: 'A5',
            correctMove: 'Hit'
         },
   'AA6': {
            handType: 'ace',
            dealer: 'A',
            player: 'A6',
            correctMove: 'Hit'
         },
   'AA7': {
            handType: 'ace',
            dealer: 'A',
            player: 'A7',
            correctMove: 'Hit'
         },
   'AA8': {
            handType: 'ace',
            dealer: 'A',
            player: 'A8',
            correctMove: 'Stand'
         },
   'AA9': {
            handType: 'ace',
            dealer: 'A',
            player: 'A9',
            correctMove: 'Stand'
         },
   'AA10': {
            handType: 'ace',
            dealer: 'A',
            player: 'A10',
            correctMove: 'Stand'
         },
   'A22': {
            handType: 'pair',
            dealer: 'A',
            player: '22',
            correctMove: 'Hit'
         },
   'A33': {
            handType: 'pair',
            dealer: 'A',
            player: '33',
            correctMove: 'Hit'
         },
   'A44': {
            handType: 'pair',
            dealer: 'A',
            player: '44',
            correctMove: 'Hit'
         },
   'A55': {
            handType: 'pair',
            dealer: 'A',
            player: '55',
            correctMove: 'Hit'
         },
   'A66': {
            handType: 'pair',
            dealer: 'A',
            player: '66',
            correctMove: 'Hit'
         },
   'A77': {
            handType: 'pair',
            dealer: 'A',
            player: '77',
            correctMove: 'Hit'
         },
   'A88': {
            handType: 'pair',
            dealer: 'A',
            player: '88',
            correctMove: 'Split'
         },
   'A99': {
            handType: 'pair',
            dealer: 'A',
            player: '99',
            correctMove: 'Stand'
         },
   'A1010': {
            handType: 'pair',
            dealer: 'A',
            player: '1010',
            correctMove: 'Stand'
         },
   'AAA': {
            handType: 'pair',
            dealer: 'A',
            player: 'AA',
            correctMove: 'Split'
         }
}