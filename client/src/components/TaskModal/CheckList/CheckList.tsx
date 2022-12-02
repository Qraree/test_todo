import React, {FC} from 'react';
import './CheckList.scss'
import {ICheckListItem} from "../../../types/task";
import SubTask from "./SubTask/SubTask";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

interface CheckListProps {
    list: ICheckListItem[]
}

const CheckList: FC<CheckListProps> = ({list}) => {
    return (
        <div>
            <h4>Checklist</h4>
            <div>
                {list.map((task) => <SubTask task={task}/>)}
            </div>
            <Input className={'add-subtask'}/>
            <Button className={'add'}>Add</Button>
        </div>
    );
};

export default CheckList;