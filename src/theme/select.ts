import {Components} from "@mui/material";
import THEME from "./index";

const select: Components[`MuiFormControl`] = {
    styleOverrides: {
        root: (theme) => {
            const {palette} = THEME
            return {
                width: 'auto',
                color: `${palette.primary.main}`,

                '& legend': {
                    display: 'none'
                },
                '& .MuiInputBase-root': {
                    minWidth: '100px',
                    maxWidth: 'auto',
                },
                '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '4px',
                    paddingRight: '36px!important',
                    padding: `8px 10px`,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '& .MuiSvgIcon-root': {
                    color: 'inherit'
                }
            }
        }
    }
}

export default select