import React from 'react';
import {FormControl, InputLabel, Select, SelectProps} from "@mui/material";

interface IMySelectProps extends SelectProps {
    label?: '' | string,
    name?: '' | string,
    defaultValue?: '' | string
}

const MySelect = (props: IMySelectProps) => {
    const {label, name, defaultValue, children, ...rest} = props
    return (
        <>
            <FormControl>
                {label && label !== '' ? <InputLabel id={name}>{label}</InputLabel> : ''}
                <Select
                    defaultValue={defaultValue}
                    name={name}
                    id={name}
                    {...rest}
                >
                    {children}
                </Select>
            </FormControl>
        </>
    );
};

export default MySelect;