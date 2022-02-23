import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    headerList: {
        listStyleType: 'none',
        padding: '1.8rem 0',
        '& li:hover': {
            backgroundColor: '#ebebeb45',
            cursor: 'pointer'
        },
        '& a': {
            color: '#FFF'
        }
    },
    headerListItem: {
        padding: '.7rem 24px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '.83rem',
            marginRight: '1.8rem',
            padding: '.3rem 0',
            '&:last-child': {
                marginRight: 0
            }
        }
    },
    drawerRoot: {
        top: '64px !important',
        '& .MuiBackdrop-root': {
            top: '64px !important'
        }
    },
    drawerPaper: {
        height: 'auto !important',
        top: '64px !important',
        width: '85%'
    },
}));