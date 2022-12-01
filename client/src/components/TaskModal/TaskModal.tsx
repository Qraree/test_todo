import React, {FC} from 'react';
import './TaskModal.scss'
import {ITask} from "../../types/task";
import {useDispatch} from "react-redux";
import {ModalActionTypes} from "../../types/modal";
import Description from "./Description/Description";
import Priority from "./Priority/Priority";
import Date from "./Date/Date";
import Header from "./Header/Header";
import Attachments from "./Attachments/Attachments";

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
                <Header name={currentTask.name} status={currentTask.status}/>
                <div className={'modal-content'}>
                    <div className={'task-content'}>
                        <Date startDate={currentTask.createdAt} dueDate={currentTask.deadline}/>
                        <Priority color={currentTask.priority}/>
                        <Description description={currentTask.description}/>
                        <Attachments files={currentTask.files}/>
                        </div>
                    <div className={'task-buttons'}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;