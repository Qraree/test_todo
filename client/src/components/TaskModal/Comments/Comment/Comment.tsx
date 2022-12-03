import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../../../../types/task";
import './Comment.scss'
import Button from "../../../Button/Button";
import {getRandomId} from "../../../../utils/random_id";

interface CommentProps {
    comment: IComment,
}

const Comment:FC<CommentProps> = ({comment}) => {
    const [activeInput, setActiveInput] = useState<boolean>(false)
    const [replies, setReplies] = useState<IComment[]>(comment.replies)
    const [input, setInput] = useState<string>('')
    const [hideReplies, setHideReplies] = useState<boolean>(false)


    function replyHandler() {
        setActiveInput(true)
    }

    function sendReplyHandler() {
        setActiveInput(false)
        let newReply: IComment = {
            _id: getRandomId(),
            content: input,
            replies: []
        }
        setReplies([...replies, newReply])
        setInput('')
    }

    function hideRepliesHandler() {
            setHideReplies(prevState => !prevState)
    }


    return (
        <div className={'comment'}>
            <p style={{margin: 0}}>User</p>
            <div className={'comment-content'}>
                <div className={'comment-text'}>
                    {comment.content}
                </div>
                <div className={'comment-buttons'}>
                    {replies && replies.length > 0 ? ( hideReplies ? (
                        <Button className={'delete-file'} onCLick={hideRepliesHandler}>Show replies</Button>
                    ) : (<Button className={'delete-file'} onCLick={hideRepliesHandler}>Hide replies</Button>)
                    ) : null}
                    <Button className={'delete-file'} onCLick={replyHandler}>Reply</Button>
                </div>
            </div>
            {activeInput ? (
                <>
                    <textarea rows={5} cols={75} className={'reply-input'} value={input} onChange={(e) => setInput(e.target.value)}/>
                    <br/>
                    <Button className={'add'} onCLick={sendReplyHandler}>Add</Button>
                </>
            ) : null}
            <div className={'replies'}>
                <div className={'replies-list'}>
                    {hideReplies ? null : (<>
                        {replies &&
                            replies.map(reply => <Comment comment={reply} key={comment._id}/>)
                        }
                    </>)}

                </div>
            </div>
        </div>
    );
};


//todo length of comments
export default Comment;