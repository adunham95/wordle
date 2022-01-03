import { ActionType, GameActions } from './actions';
import { IDefaultState } from '../interface/interfaces';

export function gameReducer(state: IDefaultState, action: GameActions) {
  switch (action.type) {
    case ActionType.Add_Letter:
      console.log('add letter');
      return { ...state };
    default:
      return { ...state };
  }
}
