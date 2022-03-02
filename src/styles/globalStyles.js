import { makeStyles } from "@mui/styles";

export const useGlobalStyles = makeStyles(theme => ({
    px: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    pxSM: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '5%',
            paddingRight: '5%',
        }
    },
    brightRed: {
        color: '#F43030'
    },
    brightRedBg: {
        backgroundColor: '#F43030'
    },
    cyan: {
        color: '#5FB4A2'
    },
    cyanBg: {
        backgroundColor: '#5FB4A2'
    },
    darkBlue: {
        color: '#203A4C'
    },
    darkBlueBg: {
        backgroundColor: '#203A4C'
    },
    grayishDarkBlue: {
        color: '#33323D'
    },
    grayishDarkBlueBg: {
        backgroundColor: '#33323D'
    },
    lightGrey: {
        color: '#EAEAEB'
    },
    lightGreyBg: {
        backgroundColor: '#EAEAEB'
    },
    veryLightGrey: {
        color: '#FAFAFA'
    },
    veryLightGreyBg: {
        backgroundColor: '#FAFAFA'
    },
    svgCurrentColor: {
        '& path': {
            fill: 'currentcolor !important'
        }
    }
}));