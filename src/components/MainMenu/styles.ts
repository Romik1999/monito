import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    menu: {
        display: 'flex',
        alignItems: "center",
        columnGap: '60px',
        justifyContent: 'start',

        '& li': {
            padding: 0,
            color: '#00171F',
            cursor: 'pointer',

            '&:hover':{
                fontWeight: 'bold',
            }
        }
    }
})