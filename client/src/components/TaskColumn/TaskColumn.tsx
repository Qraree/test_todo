import React, {FC, useState, useEffect} from 'react';
import  './TaskColumn.scss'
import {ITask} from "../../types/task";
import Task from "./Task/Task";
import { DateTime } from "luxon";
import {useDrop} from "react-dnd";
import {TaskTypes} from "../../react dnd types/types";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch, useSelector} from "react-redux";
import task from "./Task/Task";
import {TasksActionTypes} from "../../types/tasks";

interface StatusColumnProps {
    name: string,
    status: string
}

const TaskColumn:FC<StatusColumnProps> = ({name, status}) => {
    const [list, setList] = useState<ITask[]>([])

    // @ts-ignore
    const taskList: ITask[] = useSelector(state => state.tasks.tasks)

    useEffect(() => {
        setList(taskList.filter(task => task.status === status))
    }, [])

    // const tasks: ITask[] = [
    //     {
    //         _id: '1',
    //         name: 'Task',
    //         description: 'Just a simple description for the task',
    //         createdAt: DateTime.local(2022, 11, 15, 8, 30),
    //         deadline: DateTime.local(2022, 12, 15, 8, 30),
    //         priority: 1,
    //         files: [
    //             {_id: '123', name: 'File1.txt', added: DateTime.local(2022, 11, 15, 8, 30)},
    //             {_id: '124', name: 'File2.txt', added: DateTime.local(2022, 11, 13, 9, 34)},
    //             {_id: '125', name: 'File2.pdf', added: DateTime.local(2022, 11, 13, 9, 34)},
    //         ],
    //         status: 'QUEUE',
    //         checkList: [{
    //             _id: '1241',
    //             name: 'Call mom',
    //             done: false
    //         },
    //             {
    //                 _id: '1221',
    //                 name: 'call Dad',
    //                 done: true
    //             }],
    //         projectId: '1',
    //         comments: [
    //             {
    //                 _id: '1215130', content: 'Bla-bla-bla',
    //                 replies: [
    //                     {_id: '1233', content: 'You okay?', replies: [{_id: '414220', content: 'Hello!', replies: [
    //                                 {
    //                                     _id: '12343',
    //                                     content: 'You okay?',
    //                                     replies: [{
    //                                         _id: '12593',
    //                                         content: 'Hello!',
    //                                         replies: [],
    //                                         deleted: false,
    //                                         createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
    //                                     deleted: false,
    //                                     createdAt: DateTime.local(2022, 11, 15, 8, 30)
    //                                 },
    //                                 {
    //                                     _id: '12332',
    //                                     content: 'You okay?',
    //                                     replies: [{
    //                                         _id: '16623',
    //                                         content: 'Hello!',
    //                                         replies: [],
    //                                         deleted: false,
    //                                         createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
    //                                     deleted: false,
    //                                     createdAt: DateTime.local(2022, 11, 15, 8, 30)}
    //                             ], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)}], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)},
    //                     {
    //                         _id: '1412',
    //                         content: 'You okay?',
    //                         replies: [{_id: '8123', content: 'Hello!', replies: [], deleted: true, createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
    //                         deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)}
    //                 ], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)
    //             },
    //
    //         ]
    //     },
    // ]

    const dispatch = useDispatch()

    const [, drop] = useDrop(
        () => ({
            accept: TaskTypes.TASK,
            drop: () => dispatch({type: TasksActionTypes.CHANGE_STATUS, payload: 'DONE'})
        })
    )

    return (
        <div
            className={'column'}
            ref={drop}
        >
            <h4>{name}</h4>
            <div className={'taskList'}>
                {list.map(task => <Task task={task} key={task._id}/>)}
            </div>
        </div>
    );
};

export default TaskColumn;