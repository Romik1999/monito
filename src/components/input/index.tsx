import React from 'react';
import {TextField} from "@mui/material";
import {IPropsInput} from "../../common/types/components";

const Input = (props: IPropsInput) => {
    const {name} = props
    return (
        <>
            <TextField name={name} />
        </>
    );
};

export default Input;