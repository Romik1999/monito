import {makeStyles} from "@mui/styles";
import theme from "../../theme";

export const useStyles = makeStyles({
    socials: {
        display: 'flex',
        alignItems: 'center',
        columnGap: '40px',

        '& a': {
            display: 'flex',
            transition: '0.2s',
            color: `${theme.palette.primary.main}`,

            '&:hover': {
                color: `${theme.palette.secondary.main}`,
            }
        }
    }
})