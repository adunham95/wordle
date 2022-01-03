import React from 'react';
import { useDispatchLetter } from './letterProvider/letterProvider';

interface ISingleLetter{
    letter: string,
    action?: string
}

const letters: Array<Array<ISingleLetter>> = [
  [{ letter: 'q' }, { letter: 'w' }, { letter: 'e' }, { letter: 'r' }, { letter: 't' }, { letter: 'y' }, { letter: 'u' }, { letter: 'i' }, { letter: 'o' }, { letter: 'p' }],
  [{ letter: 'a' }, { letter: 's' }, { letter: 'd' }, { letter: 'f' }, { letter: 'g' }, { letter: 'h' }, { letter: 'j' }, { letter: 'k' }, { letter: 'l' }],
  [{ letter: 'z' }, { letter: 'x' }, { letter: 'c' }, { letter: 'v' }, { letter: 'b' }, { letter: 'n' }, { letter: 'm' }, { letter: 'Enter', action: 'SUBMIT' }],
];

function Keyboard() {
  const dispatch = useDispatchLetter();

  const action = (payload: string, type: string) => {
    console.log(type);
    dispatch({
      type: (typeof type === 'undefined') ? 'ADD_LETTER' : type,
      payload,
    });
  };

  return (
    <div className="fixed w-full bottom-0 pb-4">
      <div className="flex flex-col">
        {
        letters.map((r) => (
          <div className="flex justify-center">
            {
                r.map((l) => (
                  <div className="px-1">
                    <button
                      className="my-1 p-2 bg-gray-500 text-white rounded min-w-1/10 text-base"
                      onClick={() => action(l.letter, l.action)}
                    >
                      {l.letter}
                    </button>
                  </div>
                ))
            }
          </div>
        ))
    }
      </div>
    </div>
  );
}

export default Keyboard;
