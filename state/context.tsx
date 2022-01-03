import {
  createContext, Dispatch, useContext, useReducer,
} from 'react';
import { GameActions } from './actions';
import { InitialState } from './state';
import { IDefaultState } from '../interface/interfaces';
import { gameReducer } from './reducer';

export const AppContext = createContext<{
    state: IDefaultState;
  dispatch: Dispatch<GameActions>;
}>({
  state: InitialState,
  dispatch: () => undefined,
});

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, InitialState);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
export const useAppDispatch = () => useContext(AppContext);
