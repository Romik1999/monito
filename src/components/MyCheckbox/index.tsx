import React from 'react';
import {Checkbox, CheckboxProps, FormControlLabel, SxProps} from "@mui/material";

interface IMyCheckbox extends CheckboxProps{
    formSX?: SxProps,
}
const MyCheckbox = (props: IMyCheckbox) => {
    const {formSX, ...rest } = props
    return (
        <>
            <FormControlLabel sx={{...formSX}} control={<Checkbox {...rest}/>} label="Label" />
        </>
    );
};

export default MyCheckbox;