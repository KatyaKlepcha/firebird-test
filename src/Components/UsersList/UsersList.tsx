import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersTC, removeUserAC, UserType} from "../Users/users-reducer";
import {AppRootStateType} from "../../store";
import {User} from "../Users/User";
import './usersList.css'

export const UsersList = () => {

    const users = useSelector<AppRootStateType, UserType[]>(state => state.users);
    const dispatch = useDispatch()
    useEffect(() => {
        const thunk = fetchUsersTC()
        dispatch(thunk)
    }, [dispatch])

    const removeUser = (id: string) => {
        dispatch(removeUserAC(id))
    }


    const resetUsers = () => {
        dispatch(fetchUsersTC())
    }


    const [filter, setFilter] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setFilter(value)
    }


    return (
        <div>
            <div className={"search-wrapper"}>
                <input type="text" onChange={handleChange}
                       value={filter} placeholder='Search' className='inputUsersList'/>
            </div>

            <button onClick={resetUsers} className='usersListButton'>Reset</button>

            {users.map((u: UserType) => {
                return (
                    <User user={u} removeUser={removeUser} filter={filter} key={u.id}/>
                )
            })}

        </div>
    );
}



