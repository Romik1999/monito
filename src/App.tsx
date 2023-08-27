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
import {ThemeProvider} from "@mui/material/styles";
import THEME from "./theme";
import {Button, Typography} from "@mui/material";
import Input from "./components/input";
import MyButton from "./components/MyButton";

function App() {
    return (
        <ThemeProvider theme={THEME}>
            <div className="App">
                <header className="App-header">
                    <Typography
                        variant={'h1'}
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
                <Input name={'nameIcon'}/>
                <MyButton
                    variant={"startIcon"}
                    color={"primary"}
                >
                    text 1
                </MyButton>
                <MyButton
                    variant={"endIcon"}
                    color={"secondary"}
                >
                    text 2
                </MyButton>
            </div>
        </ThemeProvider>
    );
}

export default App;
