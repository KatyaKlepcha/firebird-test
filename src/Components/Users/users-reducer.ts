import {Dispatch} from "redux";

export const initialState: Array<UserType> = []

export type UserType = {
    id: string
    name: string
    username: string
    email: string
    address: AddressPropsType
    company: CompanyPropsType
}

type AddressPropsType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: GeoPropsType
}

type GeoPropsType = {
    lat: string
    lng: string
}

type CompanyPropsType = {
    name: string
    catchPhrase: string
    bs: string
}

export const UsersReducer = (state: Array<UserType> = initialState, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'GET-USERS':
            return action.users
        case 'REMOVE-USER':
            return state.filter(u => u.id !== action.id)
        default:
            return state
    }
}

export const removeUserAC = (id: string) => ({type: 'REMOVE-USER', id} as const)
export const getUsersAC = (users: Array<UserType>) => ({type: 'GET-USERS', users} as const)

export const fetchUsersTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => dispatch(getUsersAC(data)))
    }
}

export type RemoveUserActionType = ReturnType<typeof removeUserAC>;
export type SetUsersActionType = ReturnType<typeof getUsersAC>;

type ActionsType = RemoveUserActionType | SetUsersActionType