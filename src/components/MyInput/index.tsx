import React from 'react';
import {Input, InputProps} from "@mui/material";

interface IMyInputProps extends Omit<InputProps, `variant`> {
    border: 'square' | 'round'
}

const MyInput = (props: IMyInputProps) => {
    const {name, placeholder, border , ...rest} = props
    return (
        <>
            <Input
                type="text"
                name={name}
                placeholder={placeholder}
                {...rest}
            />
        </>
    );
};

export default MyInput;