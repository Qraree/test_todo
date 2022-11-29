import React, {FC} from 'react';
import './TaskModal.scss'
import {ITask} from "../../types/task";
import {useDispatch} from "react-redux";
import {ModalActionTypes} from "../../types/modal";

interface TaskProps {
    currentTask: ITask
}


const TaskModal: FC<TaskProps> = ({currentTask}) => {
    const dispatch = useDispatch()

    function closeModalHandler() {
        dispatch({type: ModalActionTypes.HIDE_MODAL})
    }

    return (
        <div className={'modal-wrapper'}>
            <div className={'modal'}>
                <div className={'modal-header'}>
                    <div>{currentTask.name}</div>
                    <button onClick={closeModalHandler}>x</button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;