(function () {
  'use strict';

  var n=[{numberRank:0,nameRank:"Two",initial:"2",suit:"Clubs",name:"Two of Clubs"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Clubs",name:"Three of Clubs"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Clubs",name:"Four of Clubs"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Clubs",name:"Five of Clubs"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Clubs",name:"Six of Clubs"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Clubs",name:"Seven of Clubs"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Clubs",name:"Eight of Clubs"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Clubs",name:"Nine of Clubs"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Clubs",name:"Ten of Clubs"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Clubs",name:"Jack of Clubs"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Clubs",name:"Queen of Clubs"},{numberRank:11,nameRank:"King",initial:"K",suit:"Clubs",name:"King of Clubs"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Clubs",name:"Ace of Clubs"},{numberRank:0,nameRank:"Two",initial:"2",suit:"Hearts",name:"Two of Hearts"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Hearts",name:"Three of Hearts"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Hearts",name:"Four of Hearts"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Hearts",name:"Five of Hearts"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Hearts",name:"Six of Hearts"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Hearts",name:"Seven of Hearts"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Hearts",name:"Eight of Hearts"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Hearts",name:"Nine of Hearts"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Hearts",name:"Ten of Hearts"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Hearts",name:"Jack of Hearts"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Hearts",name:"Queen of Hearts"},{numberRank:11,nameRank:"King",initial:"K",suit:"Hearts",name:"King of Hearts"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Hearts",name:"Ace of Hearts"},{numberRank:0,nameRank:"Two",initial:"2",suit:"Spades",name:"Two of Spades"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Spades",name:"Three of Spades"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Spades",name:"Four of Spades"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Spades",name:"Five of Spades"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Spades",name:"Six of Spades"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Spades",name:"Seven of Spades"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Spades",name:"Eight of Spades"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Spades",name:"Nine of Spades"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Spades",name:"Ten of Spades"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Spades",name:"Jack of Spades"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Spades",name:"Queen of Spades"},{numberRank:11,nameRank:"King",initial:"K",suit:"Spades",name:"King of Spades"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Spades",name:"Ace of Spades"},{numberRank:0,nameRank:"Two",initial:"2",suit:"Diamonds",name:"Two of Diamonds"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Diamonds",name:"Three of Diamonds"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Diamonds",name:"Four of Diamonds"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Diamonds",name:"Five of Diamonds"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Diamonds",name:"Six of Diamonds"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Diamonds",name:"Seven of Diamonds"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Diamonds",name:"Eight of Diamonds"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Diamonds",name:"Nine of Diamonds"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Diamonds",name:"Ten of Diamonds"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Diamonds",name:"Jack of Diamonds"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Diamonds",name:"Queen of Diamonds"},{numberRank:11,nameRank:"King",initial:"K",suit:"Diamonds",name:"King of Diamonds"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Diamonds",name:"Ace of Diamonds"}],m={numberRank:99,nameRank:"Joker",initial:"JO",suit:"Joker",name:"Joker (Plain)"},r={numberRank:99,nameRank:"Joker",initial:"JO",suit:"Joker",name:"Joker (Fancy)"};[...n,m,r];var e=class{drawPile;discardPile;constructor(a){this.drawPile=a,this.discardPile=[],this.shuffle(7);}shuffle(a){for(var u=this.drawPile.length,i=0;i<a;i++)for(let s of this.drawPile){let o=this.drawPile.indexOf(s),t=Math.floor(Math.random()*u);this.drawPile[o]=this.drawPile[t],this.drawPile[t]=s;}}addToBottomOfDiscardPile(a){this.discardPile.push(...a);}addToDiscardPile(a){this.addToTopOfDiscardPile(a);}addToTopOfDiscardPile(a){this.discardPile.unshift(...a);}drawFromDiscardPile(a){return this.discardPile.splice(0,a)}addToBottomOfDrawPile(a){this.drawPile.push(...a);}addToDrawPile(a){this.addToBottomOfDrawPile(a);}addToTopOfDrawPile(a){this.drawPile.unshift(...a);}drawFromDrawPile(a){return this.drawPile.splice(0,a)}},b=new e(n);

  /** @typedef {import("@andrewscripts/deck-of-cards.js/dist/DeckOfCards").Card} Card */
  /** @typedef {import("@andrewscripts/deck-of-cards.js/dist/standard52CardsAndJokers").Standard52Card} S52Card */

  function updateElementText(elementId, text) {
    const el = document.getElementById(elementId);
    if (el) el.innerText = text;
  }

  b.shuffle(3);
  const oneThirdOfCards = Math.floor(b.drawPile.length / 3);

  /** @type {{[x: string]: {selected: boolean, cards: Card[]}}} */
  const piles = {
    1: { selected: false, cards: [] },
    2: { selected: false, cards: [] },
    3: { selected: false, cards: [] },
  };

  // Split deck into three piles (left, middle, right)
  piles["1"].cards.push(...b.drawFromDrawPile(oneThirdOfCards));
  piles["2"].cards.push(...b.drawFromDrawPile(oneThirdOfCards));
  piles["3"].cards.push(...b.drawFromDrawPile(b.drawPile.length));

  const pileChooserButtons = document.querySelectorAll(".card-pile button");
  pileChooserButtons.forEach((buttonEl) => {
    buttonEl.addEventListener("click", () => {
      // Select the chosen pile and then have the computer choose one of the remaining piles.
      const chosenPile = buttonEl.id.slice(-1).toString();
      updateElementText("playerPile", `${chosenPile}`);

      piles[chosenPile].selected = true;
      const playerCard = /** @type {S52Card} */ (piles[chosenPile].cards.pop());
      updateElementText("playerCard", `${playerCard?.name}`);

      let compSelected = false;
      let computerCard = null;
      while (!compSelected) {
        const randPileNumber = Math.floor(Math.random() * 3) + 1;
        updateElementText("computerPile", `${randPileNumber.toString()}`);

        if (!piles[randPileNumber].selected) {
          compSelected = true;
          computerCard = /** @type {S52Card} */ (piles[randPileNumber].cards.pop());
          updateElementText("computerCard", `${computerCard?.name}`);
        }
      }

      // Calculate and display results
      if (computerCard) {
        const playerRankHigher = playerCard.numberRank >= computerCard.numberRank;
        updateElementText("playerHigherOrLower", playerRankHigher ? "higher" : "lower");
        updateElementText("playerWinOrLose", playerRankHigher ? "win" : "lose");
      }

      document.querySelectorAll(".hidden").forEach((el) => el.classList.remove("hidden"));

      // Reset selection for next game
      piles[chosenPile].selected = false;

      // TODO: reset cards too
    });
  });

})();
