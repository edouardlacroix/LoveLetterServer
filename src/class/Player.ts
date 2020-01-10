import Card from './Card';
import CardsDescription from 'enums/cardsDescription';

export default class Player {
  private id: string;
  private cardsInHand: Array<Card>;
  private cardsPlayed: Array<Card>;
  private name: string;
  private points: number;
  private isActive: boolean;

  constructor(id: string, name: string) {
    this.id = id;
    this.cardsInHand = [];
    this.cardsPlayed = [];
    this.name = name;
    this.points = 0;
    this.isActive = true;
  }

  // ===============   GETTER  =====================
  public getId(): string {
    return this.id;
  }

  public getCardsInHand(): Array<Card> {
    return this.cardsInHand;
  }

  public getCardsPlayed(): Array<Card> {
    return this.cardsPlayed;
  }

  public getPoints(): number {
    return this.points;
  }

  public getName(): string {
    return this.name;
  }

  public getPlayerActivity(): boolean {
    return this.isActive;
  }
  // ===============   SETTER  =====================

  public setCardsInHand(cards: Array<Card>): void {
    this.cardsInHand = cards;
  }

  public setCardsPlayed(cards: Array<Card>): void {
    this.cardsPlayed = cards;
  }

  public setPoints(points: number): void {
    this.points = points;
  }

  public setPlayerActivity(state: boolean): void {
    this.isActive = state;
  }

  public setName(name: string): void {
    this.name = name;
  }

  // ===============   UTILS  =====================
  public addCard(card: Card): void {
    this.cardsInHand.push(card);
  }

  public removeCardFromHand(card: Card): Card {
    return this.cardsInHand.splice(this.cardsInHand.indexOf(card), 1)[0];
  }

  public discardCard(card: Card): void {
    this.cardsPlayed.push(this.removeCardFromHand(card));
  }

  // TODO MOVE TO SERVICE
  public getCardInHandById(cardId: String): Card {
    return this.cardsInHand.filter(item => item.getId() === cardId)[0];
  }
}
