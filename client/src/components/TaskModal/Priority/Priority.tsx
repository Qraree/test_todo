import React, {FC} from 'react';
import './Priority.scss'

interface PriorityProps {
    color: number,
}


const Priority: FC<PriorityProps> = ({color}) => {

    const colorList = {
        1: 'rgb(95,210,57)',
        2: 'rgb(215,150,62)',
        3: 'rgb(236,83,83)',
    }

    if (color === undefined) {
        return null
    }
    return (
        <div className={'priority'}>
            <div className={'priority-header'}>Priority - </div>
            <div className={'circle-div'}>
                <div className={'circle'} style={{backgroundColor: color === 1 ? colorList[1] : (color === 2 ? colorList[2] : colorList[3])}}></div>
            </div>
        </div>
    );
};

export default Priority;