import React from 'react';
import Feedback from "../Feedback";
import {Box, Typography} from "@mui/material";
import MainMenu from "../MainMenu";
import Socials from "../Socials";
import Logo from "../Logo";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Feedback/>
            <Box>
                <MainMenu/>
                <Socials/>
            </Box>
            <Box>
                <Typography>© 2022 Monito. All rights reserved.</Typography>
                <Logo/>
                <Box>
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/policy">Privacy Policy</Link>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;