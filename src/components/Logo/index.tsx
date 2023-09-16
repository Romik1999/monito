import React from 'react';
import logo from "../../assets/images/common/logo.svg";
import {useNavigate} from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate()
    return (
        <>
            <img onClick={() => {
                navigate('/')
            }} src={logo} alt="logo"/>
        </>
    );
};

export default Logo;