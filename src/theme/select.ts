import {Components} from "@mui/material";
import THEME from "./index";

const select: Components[`MuiFormControl`] = {
    styleOverrides: {
        root: {

            '& legend': {
                display: 'none'
            }
        }
    }
}

export default select