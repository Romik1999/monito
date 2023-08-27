import {type ThemeOptions} from "@mui/material";
import {TypographyStyleOptions} from "@mui/material/styles/createTypography";


declare module '@mui/material/styles' {
    interface TypographyVariants {
        t1r: TypographyStyleOptions;
        t1s: TypographyStyleOptions;
    }

    interface TypographyVariantsOptions {
        t1r: TypographyStyleOptions;
        t1s: TypographyStyleOptions;
    }
}

declare module '@mui/material/Typography'{
    interface TypographyPropsVariantOverrides{
        t1r: true;
        t1s: true;
    }
}

const fontFamily = 'Open Sans, Arial, Gilroy, sans-serif';

const common = {fontFamily, letterSpacing: 0};

export const typography: Exclude<ThemeOptions['typography'], undefined> ={
    fontFamily,
    fontWeightBold: 600,
    fontWeightRegular: 400,
    t1r: {
        fontSize: '16px',
        lineHeight: '120%',
        fontWeigh: 400,
        ...common
    },
    t1s:{
        fontSize: '16px',
        lineHeight: '120%',
        fontWeigh: 400,
        ...common
    }
}