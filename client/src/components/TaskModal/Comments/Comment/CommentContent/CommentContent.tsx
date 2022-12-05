import React, {FC, useState} from 'react';
import Button from "../../../../Button/Button";
import {IComment} from "../../../../../types/task";

interface CommentContentProps {
    comment: IComment,
    replies: IComment[],
    setActiveInput: (value: boolean) => void,
    hideRepliesHandler: () => void,
    deleteHandler: () => void,
    commentDeleted: boolean,


}

const CommentContent: FC<CommentContentProps> = ({comment,
                                                     replies,
                                                     setActiveInput,
                                                     hideRepliesHandler,
                                                     deleteHandler,
                                                     commentDeleted }) => {
    const [hideReplies, setHideReplies] = useState<boolean>(false)

    function replyHandler() {
        setActiveInput(true)
    }

    return (
        <div className={'comment-content'}>
            <div className={'comment-text'}>
                {commentDeleted
                ?   <>Comment was deleted...</>
                :   <>{comment.content}</>
                }
            </div>
            {commentDeleted
            ? <div className={'comment-buttons'}>
                    {replies && replies.length > 0 ? ( hideReplies ? (
                            <Button className={'comments-action'} onCLick={hideRepliesHandler}>Show replies</Button>
                        ) : (<Button className={'comments-action'} onCLick={hideRepliesHandler}>Hide replies</Button>)
                    ) : null}
                </div>
            : <div className={'comment-buttons'}>
                    {replies && replies.length > 0 ? ( hideReplies ? (
                            <Button className={'comments-action'} onCLick={hideRepliesHandler}>Show replies</Button>
                        ) : (<Button className={'comments-action'} onCLick={hideRepliesHandler}>Hide replies</Button>)
                    ) : null}
                    <Button className={'delete-file'} onCLick={replyHandler}>Reply</Button>
                    <Button className={'delete-file'} onCLick={deleteHandler}>Delete</Button>
                </div>
            }

        </div>
    );
};

export default CommentContent;

// todo show comments