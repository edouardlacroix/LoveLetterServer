import Deck from 'class/Deck';
import Card from 'class/Card';

export default class DeckService {
  public drawCard(deck: Deck, numberOfCard: number): Array<Card> {
    return deck.getDeck().slice(0, numberOfCard);
  }

  public putCardBackOnBottom(deck: Deck, card: Card): void {
    // TODO
  }
}
