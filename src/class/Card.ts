import CardsDescription from 'enums/cardsDescription';
import AbstractAction from './CardsEffects/Actions/AbstractAction';

export default class Card {
  private id: string;
  private rank: number;
  private description: string;
  private name: string;
  private action: AbstractAction;

  constructor(id: string, type: CardsDescription) {
    this.id = id;
    this.rank = type.rank;
    this.description = type.description;
    this.name = type.name;
    this.action = type.action;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getRank(): number {
    return this.rank;
  }

  public setRank(rank: number): void {
    this.rank = rank;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getAction(): AbstractAction {
    return this.action;
  }

  public setAction(action: AbstractAction): void {
    this.action = action;
  }
}
