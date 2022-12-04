import React, {FC, useState} from 'react';
import {IComment} from "../../../types/task";
import Comment from "./Comment/Comment";
import './CommentsList.scss'
import Button from "../../Button/Button";
import {getRandomId} from "../../../utils/random_id";
import {DateTime} from "luxon";

interface CommentsProps {
    list: IComment[]
}

const CommentsList: FC<CommentsProps> = ({list}) => {
    const [input, setInput] = useState<string>('')
    const [commentsListState, setCommentsListState] = useState<IComment[]>(list)

    function addComment() {
        let newComment:IComment = {
            _id: getRandomId(),
            content: input,
            replies: [],
            deleted: false,
            createdAt: DateTime.now()
        }
        setCommentsListState([...commentsListState, newComment])
        setInput('')
    }


    function deleteComment(id: string, hasReplies: boolean) {
        if (hasReplies) {
            setCommentsListState(commentsListState.map(reply => {
                if (reply._id === id) {
                    return {...reply, deleted: true}
                }
                return reply
            }))
        } else {
            setCommentsListState(commentsListState.filter(reply => reply._id !== id))
        }
    }


    return (
        <div>
            <h4>Comments</h4>
            <textarea
                rows={5}
                cols={80}
                className={'add-comment'}
                value={input}
                onChange={(e) => setInput(e.target.value)}/>
            <br/>
            <Button className={'add'} onCLick={addComment}>Add</Button>
            <div className={'comments-list'}>
                {commentsListState.map(comment => <Comment comment={comment} key={comment._id} deleteItem={deleteComment}/>)}
            </div>
        </div>
    );
};

export default CommentsList;