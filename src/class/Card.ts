import CardsDescription from 'enums/cardsDescription';
import AbstractAction from './CardsEffects/Actions/AbstractAction';
import AbstractActionData from './CardsEffects/Actions/AbstractActionData';

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
}
