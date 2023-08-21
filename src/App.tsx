import React from 'react';
import axios from 'axios'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CheckIcon from '@mui/icons-material/Check';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import {ThemeProvider} from "@mui/styles";
import THEME from "./theme";
import {Typography} from "@mui/material";

function App() {

    console.log(THEME.palette.custom);
    return (
        <ThemeProvider theme={THEME}>
            <div className="App">
                <header className="App-header">
                    <Typography
                        variant={'h1'}
                        // color={THEME.palette.custom}
                        sx={{color: `${THEME.palette.custom.main}`}}
                    >
                        Hello word!
                    </Typography>
                    <PlayCircleOutlinedIcon/>
                    <KeyboardArrowRightOutlinedIcon/>
                    <KeyboardArrowDownRoundedIcon/>
                    <FacebookOutlinedIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                    <CheckIcon/>
                    <TextsmsOutlinedIcon/>
                    <EastRoundedIcon/>
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
