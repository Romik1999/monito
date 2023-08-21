import colors from "./colors";
import {lime, purple} from "@mui/material/colors";


declare module '@mui/material/styles' {
    interface Palette {
        custom: Palette['primary'];
    }

    interface PaletteOptions {
        custom?: PaletteOptions['primary'];
    }
}

const palette = {
    primary: lime,
    secondary: purple,
    custom: {
        main: colors.Orange.main
    }
}

export default palette