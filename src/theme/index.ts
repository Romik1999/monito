import {createTheme} from '@mui/material'
import palette from "./palette";
import {typography} from "./typography";
import button from "./button";
console.log(button)
const THEME = createTheme({
    palette,
    typography,
    components:{
        MuiButton:{
            ...button
        }
    }
});
export default THEME