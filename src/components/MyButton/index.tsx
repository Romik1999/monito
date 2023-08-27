import React from 'react';
import {Button, ButtonProps, TextField} from "@mui/material";
import {IPropsInput} from "../../common/types/components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from '@mui/icons-material/Twitter';

interface IMyButtonProps extends Omit<ButtonProps, `variant`> {
    variant: `startIcon` | `endIcon`
}

const MyButton = (props: IMyButtonProps) => {
    const {name, variant, ...rest} = props
    return (
        <>
            <Button
                startIcon={variant === `startIcon` && <FacebookOutlinedIcon/>}
                endIcon={variant === `endIcon` && <TwitterIcon/>}
                name={name}
                {...rest}/>
        </>
    );
};

export default MyButton;