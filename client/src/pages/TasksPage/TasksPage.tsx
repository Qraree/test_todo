import React from 'react';
import {useParams} from "react-router-dom";
import './TasksPage.scss'
import StatusColumn from "../../components/StatusColumn/StatusColumn";

const TasksPage = () => {
    let params = useParams();
    return (
        <div className={'wrapper'}>
            <h3>Project {params.projectId}</h3>
            <div className={'status-container'}>
                <StatusColumn name={'Queue'}/>
                <StatusColumn name={'Development'}/>
                <StatusColumn name={'Done'}/>
            </div>
        </div>
    );
};

export default TasksPage;