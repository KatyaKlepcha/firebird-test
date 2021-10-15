import {UserType} from "./users-reducer";
import React, {useCallback, useState} from "react";
import {Modal} from "../Modal/Modal";
import './user.css'
import {HighLight} from "../HighLight/HighLight";


export type UsersPropsType = {
    removeUser: (id: string) => void
    user: UserType
    filter: string
}

export const User = (props: UsersPropsType) => {
    const [modalActive, setModalActive] = useState(false)

    const removeUser: React.MouseEventHandler<HTMLElement> = (e) => {
            e.stopPropagation()
            props.removeUser(props.user.id)
    }


    const light = useCallback((str) => {
        return <HighLight filter={props.filter} str={str}/>
    }, [props.filter])

    return (
        <div className='users-wrapper'>
            <div className='users' onClick={() => {
                setModalActive(true)
            }}>
                <div className='user'>
                    <div>
                        <span className='usersSpanTitle'>name: </span>
                        <span className='usersSpanDate'> {light(props.user.name)}</span>
                    </div>
                    <div>
                        <span className='usersSpanTitle'>username: </span>
                        <span className='usersSpanDate'>{light(props.user.username)}</span>
                    </div>
                    <div>
                        <span className='usersSpanTitle'>email: </span>
                        <span className='usersSpanDate'>{light(props.user.email)}</span>
                    </div>
                </div>
                <button onClick={removeUser} className='button'>Delete</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div>
                    <h3>Address: </h3>
                    <div>
                        <span className='modalTitle'>street: </span>
                        <span>{props.user.address.street}</span>
                    </div>
                    <div>
                        <span className='modalTitle'>suite: </span>
                        <span>{props.user.address.suite}</span>
                    </div>
                    <div>
                        <span className='modalTitle'>city: </span>
                        <span>{props.user.address.city}</span>
                    </div>
                    <div>
                        <span className='modalTitle'>zipcode: </span>
                        <span>{props.user.address.zipcode}</span>
                    </div>
                    <div>
                        <span className='modalTitle'>geo.lat: </span>
                        <span>{props.user.address.geo.lat}</span>
                    </div>
                    <div>
                        <span className='modalTitle'>geo.lng: </span>
                        <span>{props.user.address.geo.lng}</span>
                    </div>
                </div>
                <div>
                    <h3>Company:</h3>
                    <div>
                        <span className='modalTitle'>name: </span>
                        <span>{props.user.company.name}</span>
                    </div>
                    <div>
                        <span className='modalTitle'>catch phrase: </span>
                        <span>{props.user.company.catchPhrase}</span>
                    </div>
                    <div>
                        <span className='modalTitle'>bs: </span>
                        <span>{props.user.company.bs}</span>
                    </div>
                </div>
            </Modal>

        </div>
    )
}