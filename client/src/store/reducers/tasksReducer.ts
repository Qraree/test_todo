import {TaskAction, TasksActionTypes, TasksState} from "../../types/tasks";
import {DateTime} from "luxon";
import {TaskStatus} from "../../types/task";


export const initialState = {
    tasks:[
        {
            _id: '1',
            name: 'Task',
            description: 'Just a simple description for the task',
            createdAt: DateTime.local(2022, 11, 15, 8, 30),
            deadline: DateTime.local(2022, 12, 15, 8, 30),
            priority: 1,
            files: [
                {_id: '123', name: 'File1.txt', added: DateTime.local(2022, 11, 15, 8, 30)},
                {_id: '124', name: 'File2.txt', added: DateTime.local(2022, 11, 13, 9, 34)},
                {_id: '125', name: 'File2.pdf', added: DateTime.local(2022, 11, 13, 9, 34)},
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
                    _id: '1215130', content: 'Bla-bla-bla',
                    replies: [
                        {_id: '1233', content: 'You okay?', replies: [{_id: '414220', content: 'Hello!', replies: [
                                    {
                                        _id: '12343',
                                        content: 'You okay?',
                                        replies: [{
                                            _id: '12593',
                                            content: 'Hello!',
                                            replies: [],
                                            deleted: false,
                                            createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
                                        deleted: false,
                                        createdAt: DateTime.local(2022, 11, 15, 8, 30)
                                    },
                                    {
                                        _id: '12332',
                                        content: 'You okay?',
                                        replies: [{
                                            _id: '16623',
                                            content: 'Hello!',
                                            replies: [],
                                            deleted: false,
                                            createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
                                        deleted: false,
                                        createdAt: DateTime.local(2022, 11, 15, 8, 30)}
                                ], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)}], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)},
                        {
                            _id: '1412',
                            content: 'You okay?',
                            replies: [{_id: '8123', content: 'Hello!', replies: [], deleted: true, createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
                            deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)}
                    ], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)
                },

            ]
        },
        {
            _id: '2',
            name: 'Call mom',
            description: 'Need to call mom',
            createdAt: DateTime.local(2022, 11, 15, 8, 30),
            deadline: DateTime.local(2022, 12, 15, 8, 30),
            priority: 3,
            files: [
                {_id: '123', name: 'File1.txt', added: DateTime.local(2022, 11, 15, 8, 30)},
            ],
            status: TaskStatus.DEVELOPMENT,
            checkList: [{
                _id: '1241',
                name: 'Call mom',
                done: false
            },

                ],
            projectId: '1',
            comments: [
                {
                    _id: '121511350', content: 'Bla-bla-bla',
                    replies: [
                        {_id: '121433', content: 'You okay?', replies: [{_id: '41542520', content: 'Hello!', replies: [
                                    {
                                        _id: '123431',
                                        content: 'You okay?',
                                        replies: [{
                                            _id: '12593',
                                            content: 'Hello!',
                                            replies: [],
                                            deleted: false,
                                            createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
                                        deleted: false,
                                        createdAt: DateTime.local(2022, 11, 15, 8, 30)
                                    },
                                    {
                                        _id: '12332',
                                        content: 'You okay?',
                                        replies: [{
                                            _id: '16623',
                                            content: 'Hello!',
                                            replies: [],
                                            deleted: false,
                                            createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
                                        deleted: false,
                                        createdAt: DateTime.local(2022, 11, 15, 8, 30)}
                                ], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)}], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)},
                        {
                            _id: '14124',
                            content: 'You okay?',
                            replies: [{_id: '8123', content: 'Hello!', replies: [], deleted: true, createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
                            deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)}
                    ], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)
                },

            ]
        },
        {
            _id: '4',
            name: 'Call mom',
            description: 'Need to call mom',
            createdAt: DateTime.local(2022, 11, 15, 8, 30),
            deadline: DateTime.local(2022, 12, 15, 8, 30),
            priority: 3,
            files: [
                {_id: '123', name: 'File1.txt', added: DateTime.local(2022, 11, 15, 8, 30)},
            ],
            status: TaskStatus.DEVELOPMENT,
            checkList: [{
                _id: '1241',
                name: 'Call mom',
                done: false
            },

            ],
            projectId: '1',
            comments: [
                {
                    _id: '12151350', content: 'Bla-bla-bla',
                    replies: [
                        {_id: '12133', content: 'You okay?', replies: [{_id: '4154220', content: 'Hello!', replies: [
                                    {
                                        _id: '123431',
                                        content: 'You okay?',
                                        replies: [{
                                            _id: '12593',
                                            content: 'Hello!',
                                            replies: [],
                                            deleted: false,
                                            createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
                                        deleted: false,
                                        createdAt: DateTime.local(2022, 11, 15, 8, 30)
                                    },
                                    {
                                        _id: '12332',
                                        content: 'You okay?',
                                        replies: [{
                                            _id: '16623',
                                            content: 'Hello!',
                                            replies: [],
                                            deleted: false,
                                            createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
                                        deleted: false,
                                        createdAt: DateTime.local(2022, 11, 15, 8, 30)}
                                ], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)}], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)},
                        {
                            _id: '14124',
                            content: 'You okay?',
                            replies: [{_id: '8123', content: 'Hello!', replies: [], deleted: true, createdAt: DateTime.local(2022, 11, 15, 8, 30)}],
                            deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)}
                    ], deleted: false, createdAt: DateTime.local(2022, 11, 15, 8, 30)
                },

            ]
        },
        ],
}

export const tasksReducer = (state = initialState, action: TaskAction): TasksState => {
    switch (action.type) {
        case TasksActionTypes.CHANGE_STATUS:
            return {
                tasks: state.tasks.map(
                    (task, i) => i === 1 ? {...task, status: action.payload}
                        : task
                )
            }
        default:
            return state
    }
}