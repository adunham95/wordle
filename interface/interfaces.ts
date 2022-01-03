// eslint-disable-next-line no-shadow
export enum EStatus {
    EMPTY = '',
    LETTER = 'letter',
    LETTER_POSITION = 'position-letter'
}

export interface ILetter{
    state?: EStatus,
    letter?: string
}

export interface IDefaultState{
    word: string,
    rows: {
        letters: ILetter
    }[]
}
