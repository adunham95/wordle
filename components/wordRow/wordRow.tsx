import React from 'react';
import WordCell, { ILetterCell } from './wordCell';

interface IProps{
    letters?: ILetterCell[]
}

const rowDefault: ILetterCell[] = [
  {
    letter: 'A',
    state: '',
  },
  {
    letter: 'B',
    state: '',
  },
  {
    letter: 'C',
    state: '',
  },
  {
    letter: 'D',
    state: '',
  },
  {
    letter: 'E',
    state: '',
  },
];

function WordRow(props: IProps) {
  const {
    letters = rowDefault,
  } = props;
  return (
    <div>
      {letters.map((l) => <WordCell {...l} />)}
    </div>
  );
}

export default WordRow;
