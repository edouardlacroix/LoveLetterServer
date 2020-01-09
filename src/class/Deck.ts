import Card from './Card';
import CardsDescription from '../enums/cardsDescription';
import Utils from '../utils/utils';

export default class Deck {
  private cardsList: Array<Card>;

  constructor() {
    this.cardsList = [];
    // SPY
    this.cardsList.push(new Card('spy01', CardsDescription.SPY));
    this.cardsList.push(new Card('spy02', CardsDescription.SPY));
    // GUARDS
    this.cardsList.push(new Card('guard01', CardsDescription.GUARD));
    this.cardsList.push(new Card('guard02', CardsDescription.GUARD));
    this.cardsList.push(new Card('guard03', CardsDescription.GUARD));
    this.cardsList.push(new Card('guard04', CardsDescription.GUARD));
    this.cardsList.push(new Card('guard05', CardsDescription.GUARD));
    this.cardsList.push(new Card('guard06', CardsDescription.GUARD));
    // PRIESTS
    this.cardsList.push(new Card('priest01', CardsDescription.PRIEST));
    this.cardsList.push(new Card('priest02', CardsDescription.PRIEST));
    // BARON
    this.cardsList.push(new Card('baron01', CardsDescription.BARON));
    this.cardsList.push(new Card('baron02', CardsDescription.BARON));
    // HANDMAID
    this.cardsList.push(new Card('handmaid01', CardsDescription.HANDMAID));
    this.cardsList.push(new Card('handmaid02', CardsDescription.HANDMAID));
    // PRINCE
    this.cardsList.push(new Card('prince01', CardsDescription.PRINCE));
    this.cardsList.push(new Card('prince02', CardsDescription.PRINCE));
    // CHANCELLOR
    this.cardsList.push(new Card('chancellor01', CardsDescription.CHANCELLOR));
    this.cardsList.push(new Card('chancellor02', CardsDescription.CHANCELLOR));
    // KING
    this.cardsList.push(new Card('king01', CardsDescription.KING));
    // COUNTESS
    this.cardsList.push(new Card('countess01', CardsDescription.COUNTESS));
    // PRINCESS ❤
    this.cardsList.push(new Card('princess01', CardsDescription.PRINCESS));

    this.cardsList = Utils.shuffleArray(this.cardsList);
  }

  // ===============   GETTER  =====================
  public getDeck(): Array<Card> {
    return this.cardsList;
  }

  // ===============   SETTER  =====================
  public setDeck(array: Array<Card>): void {
    this.cardsList = array;
  }
}
