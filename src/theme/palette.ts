import {type ThemeOptions} from "@mui/material";
import {colors} from "./colors";

declare module '@mui/material/styles' {
    interface Palette {
        red: typeof colors['Red'];
        green: typeof colors['Green'];
        orange: typeof colors['Orange'];
        blue: typeof colors['Blue'];
    }

    interface PaletteOptions {
        red: typeof colors['Red'];
        green: typeof colors['Green'];
        orange: typeof colors['Orange'];
        blue: typeof colors['Blue'];
    }
}

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
> = {
    primary: {
        light: colors.Blue[40],
        main: colors.Blue[40],
        dark: colors.Blue[40]
    },
    secondary: {
        light: colors.Yellow[40],
        main: colors.Yellow[40],
        dark: colors.Yellow[40]
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
    text: {},
    red: {
        main: colors.Red,
    },
    green: {
        main: colors.Green[40],
    }
}