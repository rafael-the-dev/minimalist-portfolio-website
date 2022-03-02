import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
    contactMeTitle: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: '50%'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 300
        }
    }
}));