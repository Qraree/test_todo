import React, {FC} from 'react';
import './Button.scss'

interface ButtonProps {
    children: string,
    className: string,
    onCLick?: () => void,
}

const Button: FC<ButtonProps> = ({children, className, onCLick}) => {
    return (
        <button className={className} onClick={onCLick}>
            {children}
        </button>
    );
};

export default Button;