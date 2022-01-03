import React, { createContext, useContext, useReducer } from 'react';

/* eslint-disable */
const LetterStateContext = createContext();
const LetterDispatchContext = createContext();
/* eslint-enable */

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    case 'INCREASE_BY':
      return state + action.payload;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export function LetterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <LetterDispatchContext.Provider value={dispatch}>
      <LetterStateContext.Provider value={state}>
        {children}
      </LetterStateContext.Provider>
    </LetterDispatchContext.Provider>
  );
}

export const useCount = () => useContext(LetterStateContext);
export const useDispatchCount = () => useContext(LetterDispatchContext);
