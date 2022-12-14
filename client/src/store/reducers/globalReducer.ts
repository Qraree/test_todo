import {IProject} from "../../types/project";
import {UserAction, UserActionTypes, UserState} from "../../types/user";
import {TaskStatus} from "../../types/task";
import {DateTime} from "luxon";

interface GlobalState {
    app: IProject[]
}


const initialState = {
    app: [
        {
            _id: '1',
            name: 'project1',
            taskColumns: [
                {
                    id: 1,
                    name: 'Queue',
                    status: TaskStatus.QUEUE,
                    items: [
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
                    ]
                },
                {
                    id: 2,
                    name: 'Development',
                    status: TaskStatus.DEVELOPMENT,
                    items: [
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
                    ]
                },
                {
                    id: 3,
                    name: 'Done',
                    status: TaskStatus.DONE,
                    items: [
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
                    ]
                },
            ]
        }
    ]
}


export const globalReducer = (state = initialState, action: UserAction): GlobalState => {
    return state
}

