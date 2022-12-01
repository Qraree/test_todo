import React, {FC} from 'react';
import './Button.scss'

interface ButtonProps {
    children: string,
    className: string,
}

const Button: FC<ButtonProps> = ({children, className}) => {
    return (
        <button className={className}>
            {children}
        </button>
    );
};

export default Button;