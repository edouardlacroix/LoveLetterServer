import CardsDescription from 'enums/cardsDescription';
import Deck from './Deck';
import Player from './Player';

export default class Board {
  private players: Array<Player>;
  private deck: Deck;

  constructor() {
    this.deck = new Deck();
  }

  public addPlayer(player: Player) {
    this.players.push(player);
  }
}
