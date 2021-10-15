import React, {Dispatch, SetStateAction} from 'react'
import './modal.css';

type ModalPropsType ={
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    children: React.ReactNode
}
export const Modal: React.FC<ModalPropsType> = ( {active,setActive ,children }) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modalContent active' : 'modalContent'} onClick={e => e.preventDefault()}>
                {children}
            </div>

        </div>
    )
}