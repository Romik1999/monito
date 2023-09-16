import React from 'react';
import {Typography} from "@mui/material";
import MyInput from "../MyInput";
import MyButton from "../MyButton";

const Feedback = () => {
    return (
        <div className="feedback">
            <Typography>Register now so you don't miss our programs</Typography>
            <form>
                <MyInput/>
                <MyButton type="submit">Subcribe Now</MyButton>
            </form>
        </div>
    );
};

export default Feedback;