import React, {FC} from 'react';
import  './StatusColumn.scss'
import {ITask} from "../../types/task";

interface StatusColumnProps {
    name: string
}

const StatusColumn:FC<StatusColumnProps> = ({name}) => {

    const tasks: ITask[] = [
        {
            name: 'Call mom'
        },
        {
            name: 'Call bro'
        },
        {
            name: 'Call sis'
        },
        {
            name: 'Call dad'
        },

    ]

    return (
        <div className={'column'}>
            <h4>{name}</h4>
            <div className={'taskList'}>
                {tasks.map(task => <div className={'task'}>{task.name}</div>)}
            </div>
        </div>
    );
};

export default StatusColumn;