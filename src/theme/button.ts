import theme from "./index";
import {Components, Theme} from "@mui/material";

const button:Components[`MuiButton`] = {
    styleOverrides:{
        root: ({theme}) =>{
            const {palette} = theme as Theme
            return {
                padding: `14px 28px 10px`,
                color: "red"
            }
        }
    },
    variants:[
        {
            props:{color: 'secondary'},
            style:{
                backgroundColor: '#003459'
            }
        }
    ]
}

export default button