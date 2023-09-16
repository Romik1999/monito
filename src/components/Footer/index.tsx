import React from 'react';
import Feedback from "../Feedback";
import {Box, Typography} from "@mui/material";
import MainMenu from "../MainMenu";
import Socials from "../Socials";
import Logo from "../Logo";
import {Link} from "react-router-dom";
import {useStyles} from "./styles";
import Container from "@mui/material/Container";

const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Feedback/>
                <Box className={classes.footerMiddle}>
                    <MainMenu/>
                    <Socials/>
                </Box>
                <Box className={classes.footerBottom}>
                    <Typography>© 2022 Monito. All rights reserved.</Typography>
                    <Logo/>
                    <Box>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/policy">Privacy Policy</Link>
                    </Box>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;