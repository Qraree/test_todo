import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import './TasksPage.scss'
import TaskColumn from "../../components/TaskColumn/TaskColumn";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TaskModal from "../../components/TaskModal/TaskModal";
import {TaskStatus} from "../../types/task";

const TasksPage: FC = () => {
    let params = useParams();
    const {showModal, currentTask} = useTypedSelector(state => state.modal)
    return (
        <div className={'wrapper'}>
            <h3>Project {params.projectId}</h3>
            <div className={'status-container'}>
                <TaskColumn name={'Queue'} status={TaskStatus.QUEUE}/>
                <TaskColumn name={'Development'} status={TaskStatus.DEVELOPMENT}/>
                <TaskColumn name={'Done'} status={TaskStatus.DONE}/>
            </div>
            {showModal && <TaskModal currentTask = {currentTask}/>}
        </div>
    );
};

export default TasksPage;