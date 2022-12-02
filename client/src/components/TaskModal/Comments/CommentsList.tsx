import React, {FC} from 'react';
import {IComment} from "../../../types/task";
import Comment from "./Comment/Comment";
import './CommentsList.scss'
import Button from "../../Button/Button";

interface CommentsProps {
    list: IComment[]
}

const CommentsList: FC<CommentsProps> = ({list}) => {
    return (
        <div>
            <h4>Comments</h4>
            <textarea rows={5} cols={75} className={'add-comment'}/>
            <br/>
            <Button className={'add'}>Add</Button>
            <div className={'comments-list'}>
                {list.map(comment => <Comment comment={comment}/>)}
            </div>
        </div>
    );
};

export default CommentsList;