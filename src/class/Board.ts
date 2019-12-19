import Deck from './Deck';
import Player from './Player';

export default class Board {
  private players: Array<Player>;
  private deck: Deck;

  constructor() {
    this.deck = new Deck();
    this.players = [];
  }

  public addPlayer(player: Player) {
    this.players.push(player);
  }

  public getPlayers(): Array<Player> {
    return this.players;
  }

  public setPlayers(players: Array<Player>): void {
    this.players = players;
  }

  public getDeck(): Deck {
    return this.deck;
  }

  public setDeck(deck: Deck): void {
    this.deck = deck;
  }
}
