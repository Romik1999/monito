import colors from "./colors";


declare module '@mui/material/styles' {
    interface Palette {
        red: Palette['primary'];
        green: Palette['primary'];
        orange: Palette['primary'];
        blueSea: Palette['primary'];
        white: Palette['primary'];
    }

    interface PaletteOptions {
        red?: PaletteOptions['primary'];
        green?: PaletteOptions['primary'];
        orange?: PaletteOptions['primary'];
        blueSea?: PaletteOptions['primary'];
        white?: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
    }
}

const palette = {
    primary: {
        light: colors.Blue[40],
        main: colors.Blue[100],
        dark: colors.Blue[80],
        darker: colors.Blue[60]
    },
    secondary: {
        light: colors.Yellow[40],
        main: colors.Yellow[60],
        dark: colors.Yellow[80]
    },
    red: {
        main: colors.Red.main,
    },
    green: {
        main: colors.Green.main,
    },
    orange: {
        main: colors.Orange.main
    },
    blueSea: {
        main: colors.BlueSea.main
    },
    white: {
        main: colors.White.main
    }
}

export default palette