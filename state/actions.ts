// eslint-disable-next-line no-shadow
export enum ActionType {
    Add_Letter,
    Delete_Letter,
    Update_Word,
    Submit,
}

export interface AddLetter {
    type: ActionType.Add_Letter,
    payload: {letter: string}
}

export interface DeleteLetter {
    type: ActionType.Delete_Letter,
    payload: {letter: string, row: number}
}

export interface UpdateWord {
    type: ActionType.Update_Word,
    payload: {word: string}
}

export interface Submit {
    type: ActionType.Submit
}

export type GameActions = AddLetter | DeleteLetter | UpdateWord | Submit
