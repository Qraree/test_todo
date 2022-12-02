import React, {FC} from 'react';
import './Attachments.scss'
import {IFile} from "../../../types/task";
import File from "./File/File";
import Button from "../../Button/Button";

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
            <Button className={'add'}>Add</Button>
        </div>
    );
};

export default Attachments;