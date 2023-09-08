import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectProps} from "@mui/material";

interface IMySelectProps extends SelectProps {

}

const MySelect = (props: IMySelectProps) => {
    const {label, ...rest} = props
    return (
        <>
            {label}
            <FormControl fullWidth>
                {label && label!=='' ? <InputLabel id="demo-simple-select-label">{label}</InputLabel> : ''}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default MySelect;