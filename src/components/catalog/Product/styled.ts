import {styled} from "@mui/material";

export const ProductContainer = styled('div')({
    borderRadius: '12px',
    background: '#FDFDFD',
    boxShadow: '0px 4px 28px -2px rgba(0, 0, 0, 0.08)',
    padding: '8px 8px 0px 8px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
})

export const ProductWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '4px',
    padding: '8px 8px 20px 8px',
})

export const ProductImg = styled('div')({
    width: '100%',
    height: '264px',
    display: 'flex',

    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
})

export const ProductTitle = styled('div')({
    color: '#00171F',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: "150%",
})
export const ProductPropsRow = styled('div')({
    display: 'flex',
    columnGap: '26px',
})

export const ProductProp = styled('div')({
    color: '#667479',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: "150%",
})
export const ProductPrice = styled('div')({
    color: '#00171F',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: "150%",
})