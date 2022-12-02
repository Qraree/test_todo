import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../../../../types/task";
import './Comment.scss'
import Button from "../../../Button/Button";

interface CommentProps {
    comment: IComment
}

const Comment:FC<CommentProps> = ({comment}) => {
    const [activeInput, setActiveInput] = useState<boolean>(false)
    const [replies, setReplies] = useState<IComment[]>([])
    const [input, setInput] = useState<string>('')

    useEffect(() => {
        // @ts-ignore
        return setReplies(comment.replies);
    }, [])

    function replyHandler() {
        setActiveInput(true)
    }

    function sendReplyHandler() {
        setActiveInput(false)
    }


    return (
        <div className={'comment'}>
            <div className={'comment-content'}>
                <div className={'comment-text'}>
                    {comment.content}
                </div>
                <Button className={'delete-file'} onCLick={replyHandler}>Reply</Button>
            </div>
            {activeInput ? (
                <>
                    <textarea rows={5} cols={75}/>
                    <br/>
                    <Button className={'add'} onCLick={sendReplyHandler}>Add</Button>
                </>
            ) : null}
            <div className={'replies'}>
                <div className={'replies-list'}>
                    {comment.replies &&
                    replies.map(reply => <Comment comment={reply}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Comment;