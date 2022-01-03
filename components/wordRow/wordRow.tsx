import React from 'react';
import { EStatus, ILetter } from '../../interface/interfaces';
import WordCell from './wordCell';

interface IProps{
    letters?: ILetter[]
}

const rowDefault: ILetter[] = [
  {
    letter: 'A',
    state: EStatus.EMPTY,
  },
  {
    letter: 'B',
    state: EStatus.EMPTY,
  },
  {
    letter: 'C',
    state: EStatus.EMPTY,
  },
  {
    letter: 'D',
    state: EStatus.EMPTY,
  },
  {
    letter: 'E',
    state: EStatus.EMPTY,
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
