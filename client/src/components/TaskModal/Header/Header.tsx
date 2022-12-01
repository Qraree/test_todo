import React, {FC} from 'react';
import './Header.scss'
import {useDispatch} from "react-redux";
import {ModalActionTypes} from "../../../types/modal";

interface HeaderProps {
    name: string,
    status: string,
}

const Header: FC<HeaderProps> = ({name, status}) => {

    const dispatch = useDispatch()

    function closeModalHandler() {
        dispatch({type: ModalActionTypes.HIDE_MODAL})
    }

    return (
        <div className={'modal-header'}>
            <div className={'header-name'}>
                <h2 id={'name'}>{name}</h2>
                <div className={'status'}>{status}</div>
            </div>
            <button onClick={closeModalHandler}>x</button>
        </div>
    );
};

export default Header;