import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import './Project.scss'
import {IProject} from "../../types/project";

interface ProjectProps {
    project: IProject
}

const Project: FC<ProjectProps> = ({project}) => {
    let navigate = useNavigate()

    const randomRgb = () => {
        return `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.5)`
    }
    return (
        <div className={'project'} onClick={() => navigate(`/projects/${project.id}`)} style={{backgroundColor: randomRgb()}}>
            {project.name}
        </div>
    );
};

export default Project;