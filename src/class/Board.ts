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

  public removePlayerById(id: String): void {
    this.players.map(item => {
      if (item.getId() === id) {
        this.players.splice(this.players.indexOf(item), 1);
      }
    });
  }

  public getPlayers(): Array<Player> {
    return this.players;
  }

  public getPlayerById(id: String): Player {
    return this.players.filter(item => item.getId() === id)[0];
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
