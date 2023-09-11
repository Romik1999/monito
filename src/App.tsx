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
import {MenuItem, Typography} from "@mui/material";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput";
import MyCheckbox from "./components/MyCheckbox";
import MySelect from "./components/MySelect";

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

                <MyInput
                    placeholder={'123123123'}
                    border={"round"}
                />

                <MyCheckbox/>

                <MySelect name="cost">
                    <MenuItem value="11111">11111</MenuItem>
                    <MenuItem value="22222">22222</MenuItem>
                    <MenuItem value="33333">33333</MenuItem>
                </MySelect>
            </div>
        </ThemeProvider>
    );
}

export default App;
