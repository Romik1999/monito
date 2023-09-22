import {styled} from "@mui/material";

export const Filters = styled('div')({
    width: '100%',
    maxWidth: '280px',
})
export const FilterGroups = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
})

export const FilterGroup = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    padding: '16px 0',
    borderBottom: '1px solid #EBEEEF',
})

export const FilterGroupTitle = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    color: '#00171F',
    fontSize: '16px',
    fontWeight: 700,
})

export const FilterGroupInputs = styled('div')({
    display: 'flex',
    columnGap: '8px',
})

export const FilterGroupCheckboxes = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
})