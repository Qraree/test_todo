import React, {FC} from 'react';
import Project from "../../components/Project/Project";
import './ProjectPage.scss'

const ProjectsPage: FC = () => {
    const projects = [
        {_id: "1", name: 'Project1'},
        {_id: "2", name: 'Project1'},
        {_id: "3", name: 'Project1'},
        {_id: "4", name: 'Project1'},
        {_id: "5", name: 'Project1'},
        {_id: "6", name: 'Project1'},
        {_id: "7", name: 'Project1'},
        {_id: "8", name: 'Project1'},
        {_id: "9", name: 'Project1'},
        {_id: "10", name: 'Project1'},
        {_id: "11", name: 'Project1'},
        {_id: "12", name: 'Project1'},
        {_id: "13", name: 'Project1'},
    ]

    return (
         <div className={'wrapper'}>
             <div className={'projects'}>
                 <h3>Проекты</h3>
                 <div className={'projectsBoard'}>
                    {projects.map(prj => <Project project={prj} key={prj._id}/>)}
                 </div>
             </div>
         </div>
    );
};

export default ProjectsPage;