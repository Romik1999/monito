import React from 'react';
import logo from "../../assets/images/common/logo.svg";
import {useNavigate} from "react-router-dom";
import {useStyles} from "./styles";


const Logo = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <>
            <img
                className={classes.logo}
                onClick={() => {
                    navigate('/')
                }}
                src={logo}
                alt="logo"/>
        </>
    );
};

export default Logo;