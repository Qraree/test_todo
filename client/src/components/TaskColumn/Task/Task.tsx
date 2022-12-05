import React, {FC} from 'react';
import './Task.scss'
import {ITask} from "../../../types/task";
import {useDispatch} from "react-redux";
import {ModalActionTypes} from "../../../types/modal";
import {useDrag} from "react-dnd";
import {TaskTypes} from "../../../react dnd types/types";
import {UiActionTypes} from "../../../types/ui";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface TaskProps {
    task: ITask,
    list: any
}

const Task: FC<TaskProps> = ({task, list}) => {
    const dispatch = useDispatch()
    const {currentBoard, currentTask} = useTypedSelector(state => state.ui)


    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        if ((e.target as HTMLTextAreaElement).className === 'task') {
            (e.target as HTMLTextAreaElement).style.boxShadow = '0 4px 3px gray'
        }

    }

    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        (e.target as HTMLTextAreaElement).style.boxShadow = 'none'
    }

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, list: any, task: any) {
        dispatch({type: UiActionTypes.SET_CURRENT_BOARD, payload: list})
        dispatch({type: UiActionTypes.SET_CURRENT_TASK, payload: task})
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
        (e.target as HTMLTextAreaElement).style.boxShadow = 'none'
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, list:any, task: any) {
        e.preventDefault()

    }

    // const [{isDragging}, drag] = useDrag(() => ({
    //     type: TaskTypes.TASK,
    //     collect: monitor => ({
    //         isDragging: !!monitor.isDragging()
    //     })
    // }))


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
            // ref={drag}
            className={'task'}
            onDragOver={e => dragOverHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragStart={e => dragStartHandler(e, list, task)}
            onDragEnd={e => dragEndHandler(e)}
            onDrop={e => dropHandler(e, list, task)}
            draggable={true}
            onClick={showModalHandler}

        >
            <div className={'task-name'}>{task.name}</div>
            <div className={'priority-div'} style={{backgroundColor: task.priority === 1 ? colorList[1] : (task.priority === 2 ? colorList[2] : colorList[3])}}></div>
        </div>
    );
};

export default Task;