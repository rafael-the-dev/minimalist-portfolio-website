import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    heroImage: {
        height: 280,
        [theme.breakpoints.up('sm')]: {
            height: 380
        }
    },
    rightSide: {
        [theme.breakpoints.up('md')]: {
            maxWidth: '55%'
        }
    }
}));