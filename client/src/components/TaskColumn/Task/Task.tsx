import React, {FC} from 'react';
import './Task.scss'
import {ITask} from "../../../types/task";
import {useDispatch} from "react-redux";
import {ModalActionTypes} from "../../../types/modal";

interface TaskProps {
    task: ITask
}

const Task: FC<TaskProps> = ({task}) => {
    const dispatch = useDispatch()


    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        if ((e.target as HTMLTextAreaElement).className === 'task') {
            (e.target as HTMLTextAreaElement).style.boxShadow = '0 4px 3px gray'
        }

    }

    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        (e.target as HTMLTextAreaElement).style.boxShadow = 'none'
    }

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {

    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
        (e.target as HTMLTextAreaElement).style.boxShadow = 'none'
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()

    }

    function showModalHandler() {
        dispatch({type: ModalActionTypes.SHOW_MODAL, payload: task})
    }

    return (
        <div
            className={'task'}
            onDragOver={e => dragOverHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragStart={e => dragStartHandler(e)}
            onDragEnd={e => dragEndHandler(e)}
            onDrop={e => dropHandler(e)}
            draggable={true}
            onClick={showModalHandler}

        >
            {task.name}
        </div>
    );
};

export default Task;