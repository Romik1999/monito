import {makeStyles} from "@mui/styles";
import theme from "../../theme";

export const useStyles = makeStyles({
    feedback: {
        padding: '32px',
        borderRadius: '16px',
        background: `${theme.palette.primary.main}`,
        display: 'flex',
        alignItems: 'center',
        columnGap: '10px',
        justifyContent: 'space-between',

        '& p': {
            color: `${theme.palette.white.main}`,
            fontSize: '24px',
            fontWeight: 700,
            maxWidth: '390px',
            width: '100%'
        }
    },
    form: {
        maxWidth: '60%',
        width: '100%',
        padding: '12px',
        borderRadius: '14px',
        background: `${theme.palette.white.main}`,
        display: 'flex',
        alignItems: 'center',
        columnGap: '12px',

        '& .MuiInputBase-root': {
            width: '100%'
        },
        '& button': {
            borderRadius: '8px',
        },
    }
})