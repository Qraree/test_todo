import React, {FC} from 'react';
import  './TaskColumn.scss'
import {ITask} from "../../types/task";
import Task from "./Task/Task";

interface StatusColumnProps {
    name: string
}

const TaskColumn:FC<StatusColumnProps> = ({name}) => {

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
                {tasks.map(task => <Task task={task}/>)}
            </div>
        </div>
    );
};

export default TaskColumn;