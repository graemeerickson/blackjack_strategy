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
            dealer: 5,
            player: '5',
            correctMove: 'H'
         },
   '56': {
            handType: 'standard',
            dealer: 5,
            player: '6',
            correctMove: 'H'
         },
   '57': {
            handType: 'standard',
            dealer: 5,
            player: '7',
            correctMove: 'H'
         },
   '58': {
            handType: 'standard',
            dealer: 5,
            player: '8',
            correctMove: 'H'
         },
   '59': {
            handType: 'standard',
            dealer: 5,
            player: '9',
            correctMove: 'D'
         },
   '510': {
            handType: 'standard',
            dealer: 5,
            player: '10',
            correctMove: 'D'
         },
   '511': {
            handType: 'standard',
            dealer: 5,
            player: '11',
            correctMove: 'D'
         },
   '512': {
            handType: 'standard',
            dealer: 5,
            player: '12',
            correctMove: 'S'
         },
   '513': {
            handType: 'standard',
            dealer: 5,
            player: '13',
            correctMove: 'S'
         },
   '514': {
            handType: 'standard',
            dealer: 5,
            player: '14',
            correctMove: 'S'
         },
   '515': {
            handType: 'standard',
            dealer: 5,
            player: '15',
            correctMove: 'S'
         },
   '516': {
            handType: 'standard',
            dealer: 5,
            player: '16',
            correctMove: 'S'
         },
   '517': {
            handType: 'standard',
            dealer: 5,
            player: '17',
            correctMove: 'S'
         },
   '518': {
            handType: 'standard',
            dealer: 5,
            player: '18',
            correctMove: 'S'
         },
   '519': {
            handType: 'standard',
            dealer: 5,
            player: '19',
            correctMove: 'S'
         },
   '520': {
            handType: 'standard',
            dealer: 5,
            player: '20',
            correctMove: 'S'
         },
   '521': {
            handType: 'standard',
            dealer: 5,
            player: '21',
            correctMove: 'S'
         },
   '5A2': {
            handType: 'ace',
            dealer: 5,
            player: 'A2',
            correctMove: 'D'
         },
   '5A3': {
            handType: 'ace',
            dealer: 5,
            player: 'A3',
            correctMove: 'D'
         },
   '5A4': {
            handType: 'ace',
            dealer: 5,
            player: 'A4',
            correctMove: 'D'
         },
   '5A5': {
            handType: 'ace',
            dealer: 5,
            player: 'A5',
            correctMove: 'D'
         },
   '5A6': {
            handType: 'ace',
            dealer: 5,
            player: 'A6',
            correctMove: 'D'
         },
   '5A7': {
            handType: 'ace',
            dealer: 5,
            player: 'A7',
            correctMove: 'D'
         },
   '5A8': {
            handType: 'ace',
            dealer: 5,
            player: 'A8',
            correctMove: 'S'
         },
   '5A9': {
            handType: 'ace',
            dealer: 5,
            player: 'A9',
            correctMove: 'S'
         },
   '5A10': {
            handType: 'ace',
            dealer: 5,
            player: 'A10',
            correctMove: 'S'
         },
   '522': {
            handType: 'pair',
            dealer: 5,
            player: '22',
            correctMove: 'SP'
         },
   '533': {
            handType: 'pair',
            dealer: 5,
            player: '33',
            correctMove: 'SP'
         },
   '544': {
            handType: 'pair',
            dealer: 5,
            player: '44',
            correctMove: 'SP'
         },
   '555': {
            handType: 'pair',
            dealer: 5,
            player: '55',
            correctMove: 'D'
         },
   '566': {
            handType: 'pair',
            dealer: 5,
            player: '66',
            correctMove: 'SP'
         },
   '577': {
            handType: 'pair',
            dealer: 5,
            player: '77',
            correctMove: 'SP'
         },
   '588': {
            handType: 'pair',
            dealer: 5,
            player: '88',
            correctMove: 'SP'
         },
   '599': {
            handType: 'pair',
            dealer: 5,
            player: '99',
            correctMove: 'SP'
         },
   '51010': {
            handType: 'pair',
            dealer: 5,
            player: '1010',
            correctMove: 'S'
         },
   '5AA': {
            handType: 'pair',
            dealer: 5,
            player: 'AA',
            correctMove: 'SP'
         }
}