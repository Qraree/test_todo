import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import './Project.scss'
import {IProject} from "../../types/project";
import {UiActionTypes} from "../../types/ui";
import {useDispatch} from "react-redux";

interface ProjectProps {
    project: IProject
}

const Project: FC<ProjectProps> = ({project}) => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    function navigateToProject() {
        dispatch({type: UiActionTypes.SET_CURRENT_PROJECT, payload: `${project._id}`})
        navigate(`/projects/${project._id}`)
    }

    const randomRgb = () => {
        return `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.5)`
    }
    return (
        <div className={'project'} onClick={navigateToProject} style={{backgroundColor: randomRgb()}}>
            {project.name}
        </div>
    );
};

export default Project;