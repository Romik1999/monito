import {Components, Theme} from "@mui/material";
import palette from "./palette";

const button:Components[`MuiButton`] = {
    styleOverrides:{
        root: ({theme}) =>{
            const {palette} = theme as Theme
            return {
                padding: `14px 28px 10px`,
                color: "red",
                borderRadius: '57px'
        }
        }
    },
    variants:[
        {
            props:{color: 'primary'},
            style:{
                backgroundColor: palette.primary.main,
                color: palette.white.main
            }
        }
    ]
}

export default button