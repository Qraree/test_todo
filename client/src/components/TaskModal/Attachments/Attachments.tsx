import React, {FC} from 'react';
import './Attachments.scss'
import {IFile} from "../../../types/task";
import File from "./File/File";

interface AttachmentsProps {
    files: IFile[]
}

const Attachments: FC<AttachmentsProps> = ({files}) => {
    return (
        <div>
            <h4>Attachments</h4>
            <div>
                {files.map(file => <File file={file}/>)}
            </div>
        </div>
    );
};

export default Attachments;