// eslint-disable-next-line no-shadow
export enum ActionType {
    Add_Letter,
    Delete_Letter,
    Update_Word,
    Submit,
}

interface IPayload{
    letter?: string,
    word?: string
}

export interface AddLetter {
    type: ActionType.Add_Letter,
    payload: IPayload
}

export interface DeleteLetter {
    type: ActionType.Delete_Letter,
    payload: IPayload
}

export interface UpdateWord {
    type: ActionType.Update_Word,
    payload: IPayload
}

export interface Submit {
    type: ActionType.Submit
    payload: IPayload
}

export type GameActions = AddLetter | DeleteLetter | UpdateWord | Submit
