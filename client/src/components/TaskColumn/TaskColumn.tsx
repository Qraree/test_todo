import React, {FC, useState, useEffect} from 'react';
import  './TaskColumn.scss'
import {ITask} from "../../types/task";
import Task from "./Task/Task";
import {useDispatch, useSelector} from "react-redux";

interface StatusColumnProps {
    name: string,
    status: string,
    items: ITask[]
}

const TaskColumn:FC<StatusColumnProps> = ({name, status, items}) => {
    const [list, setList] = useState<ITask[]>([])

    // @ts-ignore
    const taskList: ITask[] = useSelector(state => state.tasks.tasks)

    useEffect(() => {
        setList(taskList.filter(task => task.status === status))
    }, [])

    const dispatch = useDispatch()


    return (
        <div
            className={'column'}
            // ref={drop}
        >
            <h4>{name}</h4>
            <div className={'taskList'}>
                {items.map(task => <Task task={task} key={task._id} list={list}/>)}
            </div>
        </div>
    );
};

export default TaskColumn;