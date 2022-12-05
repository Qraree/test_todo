import React, {FC, useState} from 'react';
import {useParams} from "react-router-dom";
import './TasksPage.scss'
import TaskColumn from "../../components/TaskColumn/TaskColumn";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TaskModal from "../../components/TaskModal/TaskModal";
import {TaskStatus} from "../../types/task";
import {ITaskColumn} from "../../types/taskColumn";

const TasksPage: FC = () => {
    let params = useParams();
    const {showModal, currentTask} = useTypedSelector(state => state.modal)
    const [boards, setBoards] = useState([
        {id: 1, name: 'Queue', status: TaskStatus.QUEUE},
        {id: 1, name: 'Development', status: TaskStatus.DEVELOPMENT},
        {id: 1, name: 'Done', status: TaskStatus.DONE},
    ])

    // @ts-ignore
    const projectColumns = useTypedSelector(state => state.ui.currentProject.taskColumns)

    return (
        <div className={'wrapper'}>
            <h3>Project {params.projectId}</h3>
            <div className={'status-container'}>
                {projectColumns.map((board: ITaskColumn) => <TaskColumn name={board.name} status={board.status} key={board.id} items={board.items}/>)}
            </div>
            {showModal && <TaskModal currentTask = {currentTask}/>}
        </div>
    );
};

export default TasksPage;