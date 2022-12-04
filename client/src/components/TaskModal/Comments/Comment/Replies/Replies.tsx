import React, {FC} from 'react';
import {IComment} from "../../../../../types/task";
import Comment from '../Comment'

interface RepliesProps {
    replies: IComment[],
    hideReplies: boolean,
    comment: IComment,
    deleteComment: (id: string, hasReplies: boolean) => void,
}


const Replies: FC<RepliesProps> = ({replies, hideReplies, comment, deleteComment}) => {
    return (
        <div className={'replies'}>
            <div className={'replies-list'}>
                {hideReplies ? null : (<>
                    {replies &&
                        replies.map(reply => <Comment comment={reply} key={comment._id} deleteItem={deleteComment}/>)
                    }
                </>)}

            </div>
        </div>
    );
};

export default Replies;