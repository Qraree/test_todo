import React, {FC} from 'react';
import './Input.scss'

interface InputProps {
    className: string
}

const Input:FC<InputProps> = ({className}) => {
    return (
        <input className={className} type={'text'}>

        </input>
    );
};

export default Input;