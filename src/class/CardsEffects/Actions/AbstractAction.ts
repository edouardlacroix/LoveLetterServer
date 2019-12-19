import Board from '../../Board';
import Player from '../../Player';
import AbstractActionData from './AbstractActionData';

export default abstract class AbstractAction {
  protected abstract resolveAction(
    board: Board,
    player: Player,
    data?: AbstractActionData
  ): void;
}
