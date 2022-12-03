import React, {FC} from 'react';
import {ICheckListItem} from "../../../../types/task";
import Button from "../../../Button/Button";
import './SubTask.scss'

interface SubTaskProps {
    task: ICheckListItem,
    updateTask: (id: string) => void,
    deleteSubTask: (id: string) => void,
}

const SubTask: FC<SubTaskProps> = ({task, updateTask, deleteSubTask}) => {

    function updateTaskItem() {
        updateTask(task._id)
    }

    function deleteTaskItem() {
        deleteSubTask(task._id)
    }

    return (
        <div className={'subtask'}>
            <input type={'checkbox'} checked={task.done} className={'box'} onChange={updateTaskItem}/>
            <div className={'task-content'} style={{textDecoration: task.done ? 'line-through': 'none'}}>{task.name}</div>
            <Button className={'delete-subtask'} onCLick={deleteTaskItem}>x</Button>
        </div>
    );
};

export default SubTask;