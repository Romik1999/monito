import React from 'react';
import {Checkbox, CheckboxProps, FormControlLabel} from "@mui/material";

const MyCheckbox = (props: CheckboxProps) => {
    return (
        <>
            <FormControlLabel control={<Checkbox/>} label="Label" />
        </>
    );
};

export default MyCheckbox;