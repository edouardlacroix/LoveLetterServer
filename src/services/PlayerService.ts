import Player from 'class/Player';
import Deck from 'class/Deck';
import DeckService from './DeckService';
import CardService from './CardService';
import Card from 'class/Card';
import Board from 'class/Board';
import AbstractActionData from 'class/CardsEffects/Actions/AbstractActionData';

export default class PlayerService {
  deckService: DeckService = new DeckService();
  // cardService: CardService = new CardService();

  public getCard(player: Player, deck: Deck): void {
    this.deckService.drawCard(deck, 1).map(item => player.addCard(item));
  }

  public playCard(player: Player, card: Card): void {
    player.discardCard(card);
    // TODO

    let targetPlayer = null;

    // card.getAction().resolveAction( board:Board,player:Player, data:AbstractActionData);
  }
}
