import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import './Project.scss'

interface ProjectProps {
    id: number;
    name: string;
}

const Project: FC<ProjectProps> = ({id, name}) => {
    let navigate = useNavigate()

    const randomRgb = () => {
        return `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.5)`
    }
    return (
        <div className={'project'} onClick={() => navigate(`/projects/${id}`)} style={{backgroundColor: randomRgb()}}>
            {name}
        </div>
    );
};

export default Project;