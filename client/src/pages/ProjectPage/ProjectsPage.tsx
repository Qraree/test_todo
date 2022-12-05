import React, {FC} from 'react';
import Project from "../../components/Project/Project";
import './ProjectPage.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import { IProject } from '../../types/project';

const ProjectsPage: FC = () => {
    // @ts-ignore
    const projects = useTypedSelector(state => state.global.app)
    return (
        <div className={'wrapper'}>
            <div className={'projects'}>
                <h3>Проекты</h3>
                <div className={'projectsBoard'}>
                    {projects.map((prj: IProject) => <Project project={prj} key={prj._id}/>)}
                 </div>
             </div>
         </div>
    );
};

export default ProjectsPage;