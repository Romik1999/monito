import {createTheme} from '@mui/material'
import palette from "./palette";
import {typography} from "./typography";
import button from "./button";
import input from "./input";
import checkbox from "./checkbox";
import select from "./select";

const THEME = createTheme({
    palette,
    typography,
    components:{
        MuiButton:{
            ...button
        },
        MuiInput:{
            ...input
        },
        MuiFormControlLabel:{
            ...checkbox
        },
        MuiFormControl:{
            ...select
        }
    }
});
export default THEME