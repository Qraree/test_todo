import React, {FC} from 'react';
import  './TaskColumn.scss'
import {ITask} from "../../types/task";
import Task from "./Task/Task";
import { DateTime } from "luxon";

interface StatusColumnProps {
    name: string
}

const TaskColumn:FC<StatusColumnProps> = ({name}) => {

    const tasks: ITask[] = [
        {
            _id: '1',
            name: 'Task',
            description: 'Just a simple description for the task',
            createdAt: DateTime.local(2022, 11, 15, 8, 30),
            deadline: DateTime.local(2022, 12, 15, 8, 30),
            priority: 2,
            files: [
                {name: 'File1.txt', added: DateTime.local(2022, 11, 15, 8, 30)},
                {name: 'File2.txt', added: DateTime.local(2022, 11, 13, 9, 34)},
                {name: 'File2.pdf', added: DateTime.local(2022, 11, 13, 9, 34)},
            ],
            status: 'QUEUE',
            checkList: [{
                _id: '1241',
                name: 'Call mom',
                done: false
            },
                {
                    _id: '1221',
                    name: 'call Dad',
                    done: true
                }],
            projectId: '1',
            comments: [
                {
                    _id: '123', content: 'Bla-bla-bla',
                    replies: [
                        {_id: '123', content: 'You okay?', replies: [{_id: '12', content: 'Hello!', replies: [
                                    {_id: '123', content: 'You okay?', replies: [{_id: '123', content: 'Hello!'}]},
                                    {_id: '123', content: 'You okay?', replies: [{_id: '123', content: 'Hello!'}]}
                                ]}]},
                        {_id: '1412', content: 'You okay?', replies: [{_id: '123', content: 'Hello!'}]}
                    ]
                },
                {_id: '123', content: 'I will do this task!'},
                {_id: '123', content: 'I will do this task!'},
                {
                    _id: '123', content: 'Bla-bla-bla',
                    replies: [
                        {_id: '123', content: 'You okay?', replies: [{_id: '12345', content: 'Hello!'}]},
                        {_id: '123', content: 'You okay?', replies: [{_id: '123', content: 'Hello!'}]}
                    ]
                },
            ]
        },


    ]

    return (
        <div className={'column'}>
            <h4>{name}</h4>
            <div className={'taskList'}>
                {tasks.map(task => <Task task={task} key={task._id}/>)}
            </div>
        </div>
    );
};

export default TaskColumn;