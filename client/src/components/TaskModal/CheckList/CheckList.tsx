import React, {FC, useState} from 'react';
import './CheckList.scss'
import {ICheckListItem} from "../../../types/task";
import SubTask from "./SubTask/SubTask";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

interface CheckListProps {
    list: ICheckListItem[]
}

const CheckList: FC<CheckListProps> = ({list}) => {
    const [checkListState, setCheckListState] = useState(list)
    const [input, setInput] = useState<string>('')

    function updateStatus(id: string) {
        setCheckListState(checkListState.map(subTask => {
            if (subTask._id === id) {
                return {...subTask, done: !subTask.done}
            }
            return subTask
        }))
    }

    function addNewSubTask() {
        let newSubTask = {
            _id: "id" + Math.random().toString(16).slice(2),
            name: input,
            done: false,
        }
        setCheckListState([...checkListState, newSubTask])
        setInput('')
    }

    function deleteSubTask (id: string) {
        setCheckListState(checkListState.filter(subtask => subtask._id !== id))
    }



    return (
        <div>
            <h4>Checklist</h4>
            <div>
                {checkListState.map((task) => (
                    <SubTask
                        task={task}
                        key={task._id}
                        updateTask={updateStatus}
                        deleteSubTask={deleteSubTask}
                    />))}
            </div>
            <input className={'add-subtask'} value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className={'add'} onClick={addNewSubTask}>Add</button>
        </div>
    );
};

export default CheckList;