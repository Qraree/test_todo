import React, {FC} from 'react';
import './File.scss'
import {IFile} from "../../../../types/task";
import {DateTime} from "luxon";
import Button from "../../../Button/Button";

interface FileProps {
    file: IFile
}

const File: FC<FileProps> = ({file}) => {
    return (
        <div className={'file-wrapper'}>
            <div className={'file-logo'}>
                {file.name.split('.')[1]}
            </div>
            <div className={'file-info'}>
                <div className={'file-name'}>
                    {file.name}
                </div>
                <div className={'file-date'}>
                    <div>
                        Added {file.added.toLocaleString(DateTime.DATETIME_MED)}
                    </div>
                    <div>
                        <Button className={'delete-file'}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default File;