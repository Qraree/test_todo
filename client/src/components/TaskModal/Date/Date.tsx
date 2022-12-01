import React, {FC} from 'react';
import {DateTime} from "luxon";
import './Date.scss'

interface DateProps {
    startDate: DateTime,
    dueDate: DateTime,
}

const Date: FC<DateProps> = ({startDate, dueDate}) => {
    return (
        <div className={'date'}>
            <div className={'start'}>
            Start date - {startDate.toLocaleString(DateTime.DATETIME_MED)}
            </div>
            <div className={'due'}>
                <div className={'due-name'}>
                    Due date -
                </div>
                 <div className={'due-time'}>
                     {dueDate.toLocaleString(DateTime.DATETIME_MED)}
                 </div>
            </div>
        </div>
    );
};

export default Date;