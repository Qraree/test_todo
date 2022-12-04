import React, {FC, useState} from 'react';
import {IComment} from "../../../../types/task";
import './Comment.scss'
import Button from "../../../Button/Button";
import {getRandomId} from "../../../../utils/random_id";
import Replies from "./Replies/Replies";
import CommentContent from "./CommentContent/CommentContent";
import {DateTime} from "luxon";

interface CommentProps {
    comment: IComment,
    deleteItem: (id: string, hasReplies: boolean) => void,
}

const Comment:FC<CommentProps> = ({comment, deleteItem}) => {
    const [activeInput, setActiveInput] = useState<boolean>(false)
    const [replies, setReplies] = useState<IComment[]>(comment.replies)
    const [input, setInput] = useState<string>('')
    const [hideReplies, setHideReplies] = useState<boolean>(false)

    function deleteComment(id: string, hasReplies: boolean) {
        if (hasReplies) {
            setReplies(replies.map(reply => {
                if (reply._id === id) {
                    return {...reply, deleted: true}
                }
                return reply
            }))
        } else {
            setReplies(replies.filter(reply => reply._id !== id))
        }
    }

    function sendReplyHandler() {
        setActiveInput(false)
        let newReply: IComment = {
            _id: getRandomId(),
            content: input,
            replies: [],
            deleted: false,
            createdAt: DateTime.now()
        }
        setReplies([...replies, newReply])
        setInput('')
    }

    function hideRepliesHandler() {
            setHideReplies(prevState => !prevState)
    }


    function deleteHandler() {
        deleteItem(comment._id, replies.length !== 0)
    }

    return (
        <div className={'comment'}>
            <div style={{margin: 0}} className={'comment-header'}>
                <div>
                    User
                </div>
                <div  className={'sending-time'}>{comment.createdAt.toLocaleString(DateTime.DATETIME_MED)}</div>
            </div>
            <CommentContent
                comment={comment}
                replies={replies}
                setActiveInput={setActiveInput}
                hideRepliesHandler={hideRepliesHandler}
                deleteHandler={deleteHandler}
                commentDeleted={comment.deleted}/>
            {activeInput ? (
                <>
                    <textarea
                        rows={5}
                        cols={75}
                        className={'reply-input'}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}/>
                    <br/>
                    <Button className={'add'} onCLick={sendReplyHandler}>Add</Button>
                </>
            ) : null}
            <Replies
                replies={replies}
                hideReplies={hideReplies}
                comment={comment}
                deleteComment={deleteComment}/>
        </div>
    );
};



export default Comment;