import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    product: {
        borderRadius: '12px',
        background: '#FDFDFD',
        boxShadow: '0px 4px 28px -2px rgba(0, 0, 0, 0.08)',
        padding: '8px 8px 0px 8px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '8px',
    },
    productWrapper: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '4px',
        padding: '8px 8px 20px 8px',
    },
    productImg: {
        width: '264px',
        height: '264px',
        display: 'flex',

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    },
    productTitle: {
        color: '#00171F',
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: "150%",
    },
    productProps: {
        display: 'flex',
        columnGap: '26px',
    },
    productProp: {
        color: '#667479',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: "150%",
    },
    productPrice: {
        color: '#00171F',
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: "150%",
    },
})