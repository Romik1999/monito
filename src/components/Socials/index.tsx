import React from 'react';
import {Box} from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom";

const Socials = () => {
    return (
        <Box>
            <Link to="https://ru-ru.facebook.com/" target="_blank"><FacebookOutlinedIcon/></Link>
            <Link to="https://twitter.com/" target="_blank"><TwitterIcon/></Link>
            <Link to="https://www.instagram.com/" target="_blank"><InstagramIcon/></Link>
            <Link to="https://www.youtube.com/" target="_blank"><YouTubeIcon/></Link>
        </Box>
    );
};

export default Socials;