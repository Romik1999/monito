import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    products: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridRowGap: '18px',
        gridColumnGap: '20px',
    }
})