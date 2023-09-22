import {styled} from "@mui/material";

export const CatalogComponentWrapper = styled('div')({
    display: 'flex',
    columnGap: '20px',
})

export const CatalogComponentContent = styled('div')({
    display: 'flex',
    rowGap: '20px',
    flexDirection: 'column',
})

export const CatalogComponentTop = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: '20px',
})