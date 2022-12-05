import React, {FC, useEffect, useState} from 'react';
import Button from "../../Button/Button";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {UiActionTypes} from "../../../types/ui";

interface DescriptionProps {
    description: string
}

const Description: FC<DescriptionProps> = ({description}) => {
    const [input, setInput] = useState<string>('')
    const [descriptionState, setDescriptionState] = useState<string>('')
    // @ts-ignore
    const showDescription = useTypedSelector(state => state.ui.showDescription)
    const dispatch = useDispatch()

    useEffect(() => {
        setDescriptionState(description)
    }, [])

    function descriptionEditHandler() {
        dispatch({type: UiActionTypes.DESCRIPTION_EDIT_MODE})
    }

    function descriptionShowHandler() {
        dispatch({type: UiActionTypes.DESCRIPTION_SHOW_MODE})
    }

    return (
        <>
            <h4>Description</h4>
            {showDescription
                ?
                    <>
                        <p className={'description'}>{descriptionState}</p>
                        <Button className={'change'} onCLick={descriptionEditHandler}>Change</Button>
                    </>

                : <>
                        <textarea
                            className={'input'}
                            placeholder={'Add description'}
                            rows={7}
                            cols={80}
                            value={descriptionState}
                            onChange={e => setDescriptionState(e.target.value)}/>
                        <Button className={'add'} onCLick={descriptionShowHandler}>Add</Button>
                  </>
            }
        </>
    );
};

export default Description;