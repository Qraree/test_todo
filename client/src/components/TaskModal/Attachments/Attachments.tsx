import React, {FC, useEffect, useState} from 'react';
import './Attachments.scss'
import {IFile} from "../../../types/task";
import File from "./File/File";
import Button from "../../Button/Button";
import {DateTime} from "luxon";

interface AttachmentsProps {
    files: IFile[]
}

const Attachments: FC<AttachmentsProps> = ({files}) => {
    const [filesState, setFilesState] = useState<IFile[]>(files)
    const [chosenFile, setChosenFile] = useState<string>('')
    //
    // useEffect(() => {
    //     setFilesState(files)
    // }, [])
    //

    function setFileName(e: React.ChangeEvent<HTMLInputElement>) {
        setChosenFile(e.target.value)
    }

    function sendFile(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        let newFile = {
            _id: "id" + Math.random().toString(16).slice(2),
            name: chosenFile.split('\\')[chosenFile.split('\\').length - 1],
            added: DateTime.now()
        }
        setFilesState([...filesState, newFile])
        setChosenFile('')
    }

    function deleteFile(id: string) {
        setFilesState(filesState.filter(file => file._id !== id))
    }
    return (
        <div>
            <h4>Attachments</h4>
            <div>
                {filesState.map(file => <File file={file} deleteFile={deleteFile} key={file._id}/>)}
            </div>
            <form onSubmit={e => sendFile(e)}>
                <input type="file" id="actual-btn" hidden value={chosenFile} onChange={e => setFileName(e)}/>
                <label htmlFor="actual-btn">Choose File</label>
                <span id="file-chosen">{chosenFile.split('\\')[chosenFile.split('\\').length - 1]}</span>
                <br/>
                <Button className={'upload-file'}>Upload</Button>
            </form>
        </div>
    );
};

export default Attachments;