import React, {FC, useMemo} from 'react';
import {DateTime, Interval} from "luxon";

interface WorkTimeProps {
    date: DateTime
}

const WorkTime:FC<WorkTimeProps> = ({date}) => {

    const workTime = useMemo(() => {
        let days =  Interval.fromDateTimes(date, DateTime.now()).toDuration(['days', 'hours', 'minutes']).toObject().days;
        let hours =  Interval.fromDateTimes(date, DateTime.now()).toDuration(['days', 'hours', 'minutes']).toObject().hours;
        let minutes =  Interval.fromDateTimes(date, DateTime.now()).toDuration(['days', 'hours', 'minutes']).toObject().minutes;
        return {
            days: days,
            hours: hours,
            minutes: Math.round(Number(minutes)),
            // minutesInWork: minutesInWork
        }
    }, [])

    return (
        <div>
            {workTime.days} days, {workTime.hours} hours, {workTime.minutes} minutes
            {/*{workTime.minutesInWork}*/}
        </div>
    );
};

export default WorkTime;