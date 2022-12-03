import React, {FC} from 'react';
import {DateTime, Interval} from "luxon";
import './Date.scss'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import {TextField} from "@mui/material";
import {DateTimePicker} from "@mui/x-date-pickers";
import WorkTime from "./WorkTime/WorkTime";

interface DateProps {
    startDate: DateTime,
    dueDate: DateTime,
}

const Date: FC<DateProps> = ({startDate, dueDate}) => {
    const [value, setValue] = React.useState<DateTime | null>(
        dueDate,
    );

    const handleChange = (newValue: DateTime | null) => {
        setValue(newValue);
    };

    function dateHandler() {
        console.log('date was changed')
    }

    return (
        <div className={'date'}>
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <div className={'start'}>
                Start date - {startDate.toLocaleString(DateTime.DATETIME_MED)}
                </div>
                <div className={'timeAtWork'}>
                    <div>Time at work - </div>
                    <div>
                        <WorkTime date={startDate}/>
                    </div>
                </div>
                <div className={'due'}>
                    <div className={'due-name'}>
                        Due date -
                    </div>
                    <DateTimePicker
                        label=""
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        className={'picker'}
                        onClose={dateHandler}
                    />
                </div>
            </LocalizationProvider>
        </div>
    );
};

export default Date;