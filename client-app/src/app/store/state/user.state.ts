export interface IUser {
    id: string;
    email: string;
    name: string;
}

export interface IUserState {
    user: IUser
}

export const initialUserState: IUserState = {
    user: null
}