import React from 'react';

export interface ILetterCell{
    state?: '' | 'letter' | 'position-letter'
    letter?: string
}

function WordCell(props: ILetterCell) {
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
