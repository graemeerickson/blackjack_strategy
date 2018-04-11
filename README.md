# Blackjack Strategy
[Start training now!](https://graemeerickson.github.io/blackjack_strategy/ "Play now")

## Project Proposal
A single-player game intended to train a user on Blackjack basic strategy.

## Objective & Game Details
#### Objective
Blackjack Strategy helps teach the user to play Blackjack according to basic strategy in order to reduce the House edge by as much as possible.

Presented with a pair of cards and a dealer's up card, the user can select from four options: (1) Hit, (2) Stand, (3) Split, or (4) Double. The user can alternatively choose to be dealt a new hand.

There isn't a way to win or lose at Blackjack Strategy, though there is a scoreboard that tracks the user's won & lost hands. The user can click on the "Loss History" button to review lost hands and determine where to focus on improving. The Game Mode options - i.e., _All cards_, _Aces only_, and _Pairs only_ - enable the user to choose to see only specified hand types.

Blackjack Strategy was designed with mobile in mind. It uses Bootstrap's grid functionality and looks good on modern smartphones.

#### Screenshots
<img width="1440" alt="blackjack strategy screenshots - 1" src="https://user-images.githubusercontent.com/5596001/38625245-debe8480-3d5e-11e8-804f-0ccec65a4e60.png">
<img width="1440" alt="blackjack strategy screenshots - 2" src="https://user-images.githubusercontent.com/5596001/38625246-df340124-3d5e-11e8-896a-0d3196864b4a.png">
<img width="1440" alt="blackjack strategy screenshots - 3" src="https://user-images.githubusercontent.com/5596001/38625247-dfa65094-3d5e-11e8-8b13-c3af8494e60f.png">
<img width="1423" alt="blackjack strategy screenshots - 4" src="https://user-images.githubusercontent.com/5596001/38625249-e031e3c0-3d5e-11e8-89df-a84523f9b5f8.png">
<img width="1423" alt="blackjack strategy screenshots - 5" src="https://user-images.githubusercontent.com/5596001/38625528-89b67a32-3d5f-11e8-8d6d-461be3e01b7d.png">

#### Data Structures
Primary data objects include:
* Card: object
	* rank: String (e.g., 'Jack')
	* suit: String (e.g., 'Clubs')
	* value: Integer
	* played: Boolean (true/false)
* Deck: object containing 52 Cards
* Scorecard: object
	* wins: Integer
	* losses: Integer
	* winPercentage: Number
* oddsTable: object containing every possible dealer/player hands card combination
* Images of cards
	* Initially attempted to draw via Canvas, but chose instead to use 52 (+1 back) card PNGs.
	
A new deck of cards is initialized for every deal. Dealer and player cards are chosen at random from the deck, and no card is played twice in the same hand.

Once the user selects an action, the dealer and players card ranks are used to create a key, which is used to search the oddsTable object to retrieve the correct choice. The user is then notified whether or not he/she was correct, and the scoreboard is updated appropriately.

Local Storage is used to improve the user experience. These data points are stored in Local Storage and retrieved upon page load:
* Game mode preference (i.e., _All cards_, _Aces only_, _Pairs only_)
* Move history
* Scoreboard

## Tools & Technologies
* HTML
* CSS
* Javascript
* jQuery
* [Bootstrap 4](https://getbootstrap.com/ "Bootstrap"): nav, grid, buttons, button groups, popovers, modals
* [Animate.css](https://daneden.github.io/animate.css/ "Animate.css")
* Github
* Trello

## If I had more time...
I would implement the following additional features:
* Pagination on the Loss History modal to include a second page showing a high-level summary of lost moves by hand type.
* Improve consistency of responsiveness across all screen sizes.
* Set cards to rotate slightly using CSS transform in order to give appearance of having been physically dealt by a dealer.
* Show the user's odds of winning given chosen action vs correct action.
* Make win/loss messages more meaningful (e.g., "Always double on 11").
* Optimize card image loading performance.
