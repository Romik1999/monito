import {Components, Theme} from "@mui/material";
import palette from "./palette";

const button: Components[`MuiButton`] = {
    styleOverrides: {
        root: ({theme}) => {
            const {palette} = theme as Theme
            return {
                padding: `14px 28px 10px`,
                borderRadius: '57px',
                boxSizing: "border-box"
            }
        }
    },
    variants: [
        {
            props: {color: 'primary'},
            style: {
                backgroundColor: palette.primary.main,
                color: palette.white.main,
                border: `1px solid ${palette.primary.main}`,
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: palette.primary.main
                }
            }
        },
        {
            props: {color: 'secondary'},
            style: {
                backgroundColor: 'transparent',
                color: palette.primary.main,
                border: `1px solid ${palette.primary.main}`,
                '&:hover': {
                    backgroundColor: palette.primary.main,
                    color: palette.white.main
                }
            }
        }
    ]
}

export default button