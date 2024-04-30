import { baseDeck } from "@andrewscripts/deck-of-cards.js";

/** @typedef {import("@andrewscripts/deck-of-cards.js/dist/DeckOfCards").Card} Card */
/** @typedef {import("@andrewscripts/deck-of-cards.js/dist/standard52CardsAndJokers").Standard52Card} S52Card */

function updateElementText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) el.innerText = text;
}

baseDeck.shuffle(3);
const oneThirdOfCards = Math.floor(baseDeck.drawPile.length / 3);

/** @type {{[x: string]: {selected: boolean, cards: Card[]}}} */
const piles = {
  1: { selected: false, cards: [] },
  2: { selected: false, cards: [] },
  3: { selected: false, cards: [] },
};

// Split deck into three piles (left, middle, right)
piles["1"].cards.push(...baseDeck.drawFromDrawPile(oneThirdOfCards));
piles["2"].cards.push(...baseDeck.drawFromDrawPile(oneThirdOfCards));
piles["3"].cards.push(...baseDeck.drawFromDrawPile(baseDeck.drawPile.length));

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
