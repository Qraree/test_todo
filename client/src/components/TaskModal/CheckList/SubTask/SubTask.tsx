import React, {FC} from 'react';
import {ICheckListItem} from "../../../../types/task";
import Button from "../../../Button/Button";
import './SubTask.scss'

interface SubTaskProps {
    task: ICheckListItem
}

const SubTask: FC<SubTaskProps> = ({task}) => {
    return (
        <div className={'subtask'}>
            <input type={'checkbox'} checked={task.done} className={'box'}/>
            <div className={'task-content'} style={{textDecoration: task.done ? 'line-through': 'none'}}>{task.name}</div>
            <Button className={'delete-subtask'}>x</Button>
        </div>
    );
};

export default SubTask;