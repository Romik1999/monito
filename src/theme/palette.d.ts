import {type ThemeOptions} from "@mui/material";
import colors from "./colors";

declare module '@mui/material/styles' {
    interface Palette {
        red: colors['Red'];
        green: colors['Green'];
        orange: colors['Orange'];
        blue: colors['Blue'];
        neutral: colors['Neutral'];
    }

    interface PaletteOptions {
        red: colors['Red'];
        green: colors['Green'];
        orange: colors['Orange'];
        blue: colors['Blue'];
        neutral: colors['Neutral'];
    }
}

// console.log(colors);

export const palette: Pick<
    Exclude<ThemeOptions['palette'], undefined>,
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'text'
    | 'red'
    | 'green'
    | 'orange'
    | 'blue'
    | 'neutral'
> = {
    primary: {
        light: '#0078CD',
        main: colors.Blue.main,
        dark: '#002A48'
    },
    secondary: {
        light: '#FCEED5',
        main: '#F1D092',
        dark: '#EEC77E'
    },
    success: {
        main: '#A9FFA7'
    },
    error: {
        main: '#E8502F',
    },
    warning: {
        main: '#E8502F',
    },
    text: {
        main: '#000000',
    },
    red: {
        main: '#FF564F',
    },
    green: {
        main: '#A9FFA7',
    },
    neutral: {
        // light: colors.Neutral[0],
    }
}