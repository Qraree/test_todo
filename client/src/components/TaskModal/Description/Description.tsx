import React, {FC, useState} from 'react';
import Button from "../../Button/Button";

interface DescriptionProps {
    description: string | undefined
}

const Description: FC<DescriptionProps> = ({description}) => {
    const [input, setInput] = useState<string>('')

    return (
        <>
            <h4>Description</h4>
            {description
                ? <>
                    <textarea
                        className={'input'}
                        placeholder={'Add description'}
                        rows={8}
                        cols={55}
                        value={input}
                        onChange={e => setInput(e.target.value)}/>
                    <Button className={'add'}>Add</Button>
                </>
                : <>
                    <p className={'description'}>{description}</p>
                    <Button className={'change'}>Change</Button>
                </>}
        </>
    );
};

export default Description;