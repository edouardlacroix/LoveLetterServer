import Player from '../Player';
import AbstractAction from './Actions/AbstractAction';
import Board from 'class/Board';
import PlayerAndCardActionData from 'class/CardsEffects/Actions/EnemyAndCardActionData';

export default class Guard extends AbstractAction {
  constructor() {
    super();
  }

  public resolveAction(
    board: Board,
    player: Player,
    data: PlayerAndCardActionData
  ): void {
    console.log('I BRING DEMOCRACY');
  }
}
