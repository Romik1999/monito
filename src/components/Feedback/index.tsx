import React from 'react';
import {Typography} from "@mui/material";
import MyInput from "../MyInput";
import MyButton from "../MyButton";
import {useStyles} from "./styles";

const Feedback = () => {
    const classes = useStyles()

    return (
        <div className={classes.feedback}>
            <Typography>Register now so you don't miss our programs</Typography>
            <form className={classes.form}>
                <MyInput placeholder="Enter your Email"/>
                <MyButton type="submit">Subcribe Now</MyButton>
            </form>
        </div>
    );
};

export default Feedback;