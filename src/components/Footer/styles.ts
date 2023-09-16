import {makeStyles} from "@mui/styles";
import theme from "../../theme";

export const useStyles = makeStyles({
    footer: {
        display: 'flex',
        padding: '80px 130px 40px 130px',
        flexDirection: 'column',
        background: `linear-gradient(103deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)`,
        borderRadius: '40px 40px 0px 0px',
    },
    footerMiddle:{
        display: 'flex',
        alignItems: 'center',
        columnGap: '40px',
        justifyContent: 'space-between',
        padding: '40px 0',
    },
    footerBottom: {
        display: 'flex',
        alignItems: 'center',
        columnGap: '40px',
        justifyContent: 'space-between'
    }
})