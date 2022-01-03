import { ActionType, GameActions, AddLetter } from './actions';
import { IDefaultState, ILetter } from '../interface/interfaces';

export function gameReducer(state: IDefaultState, action: GameActions) {
  console.log(action?.payload);
  switch (action.type) {
    case ActionType.Add_Letter:
      console.log('add letter');
      return { ...state };
    default:
      return { ...state };
  }
}
