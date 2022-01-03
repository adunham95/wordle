import React from 'react';
import { ILetter } from '../../interface/interfaces';

function WordCell(props: ILetter) {
  const {
    state = '',
    letter = '',
  } = props;
  return (
    <div>
      {letter}
    </div>
  );
}

export default WordCell;
