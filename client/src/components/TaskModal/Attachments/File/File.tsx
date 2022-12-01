import React, {FC} from 'react';
import './File.scss'
import {IFile} from "../../../../types/task";
import {DateTime} from "luxon";

interface FileProps {
    file: IFile
}

const File: FC<FileProps> = ({file}) => {
    return (
        <div className={'file-wrapper'}>
            <div className={'file-logo'}>
                {file.name.split('.')[1]}
            </div>
            <div>
                <div className={'file-name'}>
                    {file.name}
                </div>
                <div className={'file-date'}>
                    <div>
                        {file.added.toLocaleString(DateTime.DATETIME_MED)}
                    </div>
                    <div>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default File;