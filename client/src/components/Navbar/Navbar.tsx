import React from 'react';
import './Navbar.scss'
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {UiActionTypes} from "../../types/ui";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // @ts-ignore
    const currentProject = useTypedSelector(state => state.ui.currentProject)

    function clickHandler() {
        dispatch({type: UiActionTypes.SET_CURRENT_PROJECT, payload: ''})
        navigate('/projects')
    }

    return (
        <div className={'navbar'}>
            <div className={'logo'}>
                To-Do
            </div>
            {currentProject !== ''
            ? <Button className={'link-to-home'} onCLick={clickHandler}>Projects</Button>
            : null
            }
        </div>
    );
};

export default Navbar;