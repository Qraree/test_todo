import React, {FC} from 'react';
import Project from "../../components/Project/Project";
import './ProjectPage.scss'

const ProjectsPage: FC = () => {
    const projects = [
        {id: 1, name: 'Project1'}, {id: 2, name: 'Project2'}, {id: 3, name: "Project3"},
        {id: 4, name: 'Project4'}, {id: 5, name: 'Project5'}, {id: 6, name: "Project6"},
        {id: 4, name: 'Project4'}, {id: 5, name: 'Project5'}, {id: 6, name: "Project6"},
        {id: 4, name: 'Project4'}, {id: 5, name: 'Project5'}, {id: 6, name: "Project6"},
        {id: 4, name: 'Project4'}, {id: 5, name: 'Project5'}, {id: 6, name: "Project6"},
        {id: 4, name: 'Project4'}, {id: 5, name: 'Project5'}, {id: 6, name: "Project6"},
        {id: 4, name: 'Project4'}, {id: 5, name: 'Project5'}, {id: 6, name: "Project6"},
    ]

    return (
         <div className={'wrapper'}>
             <div className={'projects'}>
                 <h3>Проекты</h3>
                 <div className={'projectsBoard'}>
                    {projects.map(prj => <Project id={prj.id} name={prj.name} key={prj.id}/>)}
                 </div>
             </div>
         </div>
    );
};

export default ProjectsPage;