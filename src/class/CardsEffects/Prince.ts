import Player from '../Player';
import AbstractAction from './Actions/AbstractAction';
import Board from 'class/Board';
import PlayerActionData from 'class/CardsEffects/Actions/PlayerActionData';

export default class Prince extends AbstractAction {
  constructor() {
    super();
  }

  public resolveAction(
    board: Board,
    player: Player,
    data: PlayerActionData
  ): void {
    console.log('BREATH THAT AIR !');
  }
}
