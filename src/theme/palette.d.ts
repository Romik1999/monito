import {type ThemeOptions} from "@mui/material";
import {colors} from "./colors";

declare module '@mui/material/styles' {
    interface Palette {
        red: typeof colors['Red'] ;
        green: typeof colors['Green'] ;
        orange: typeof colors['Orange'] ;
        blue: typeof colors['Blue'] ;
    }

    interface PaletteOptions {
        red: typeof colors['Red'] ;
        green: typeof colors['Green'] ;
        orange: typeof colors['Orange'] ;
        blue: typeof colors['Blue'] ;
    }
}

export const palette: Pick<
    Exclude<ThemeOptions['palette'], undefined>,
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'red'
    | 'green'
    | 'orange'
    | 'blue'
> = {
    primary: {
        light: '#0078CD',
        main: '#00528C',
        dark: '#002A48'
    },
    secondary: {
        light: '#FCEED5',
        main: '#F1D092',
        dark: '#EEC77E'
    },
    red: {
        main: '#FF564F',
    },
    green: {
        main '#34C759',
    },
    orange: {
        main '#FF912C'
    },
    blue: {
        blue '#00A7E7'
    }
}