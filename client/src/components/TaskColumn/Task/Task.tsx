import React, {FC} from 'react';
import './Task.scss'
import {ITask} from "../../../types/task";
import {useDispatch} from "react-redux";
import {ModalActionTypes} from "../../../types/modal";
import {useDrag} from "react-dnd";
import {TaskTypes} from "../../../react dnd types/types";

interface TaskProps {
    task: ITask
}

const Task: FC<TaskProps> = ({task}) => {
    const dispatch = useDispatch()


    // function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    //     e.preventDefault()
    //     if ((e.target as HTMLTextAreaElement).className === 'task') {
    //         (e.target as HTMLTextAreaElement).style.boxShadow = '0 4px 3px gray'
    //     }
    //
    // }
    //
    //
    // function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    //     (e.target as HTMLTextAreaElement).style.boxShadow = 'none'
    // }
    //
    // function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
    //
    // }
    //
    // function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    //     (e.target as HTMLTextAreaElement).style.boxShadow = 'none'
    // }
    //
    // function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    //     e.preventDefault()
    //
    // }

    const [{isDragging}, drag] = useDrag(() => ({
        type: TaskTypes.TASK,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))


    const colorList = {
        1: 'rgb(95,210,57)',
        2: 'rgb(215,150,62)',
        3: 'rgb(236,83,83)',
    }

    function showModalHandler() {
        dispatch({type: ModalActionTypes.SHOW_MODAL, payload: task})
    }

    return (
        <div
            ref={drag}
            className={'task'}
            // onDragOver={e => dragOverHandler(e)}
            // onDragLeave={e => dragLeaveHandler(e)}
            // onDragStart={e => dragStartHandler(e)}
            // onDragEnd={e => dragEndHandler(e)}
            // onDrop={e => dropHandler(e)}
            // style={{
            //     opacity: isDragging ? 0.5 : 1,
            //     cursor: 'move',
            // }}
            onClick={showModalHandler}

        >
            <div className={'task-name'}>{task.name}</div>
            <div className={'priority-div'} style={{backgroundColor: task.priority === 1 ? colorList[1] : (task.priority === 2 ? colorList[2] : colorList[3])}}></div>
        </div>
    );
};

export default Task;