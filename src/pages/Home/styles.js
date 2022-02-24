import { makeStyles } from '@mui/styles'
import heroIcon from '../../assets/images/icons/down-arrows.svg'
import heroIllustrationImage from '../../assets/images/homepage/mobile/image-homepage-hero.jpg'
import heroIllustrationTabletImage from '../../assets/images/homepage/tablet/image-homepage-hero.jpg'
import heroIllustrationDesktopImage from '../../assets/images/homepage/desktop/image-homepage-hero.jpg'

export const useStyles = makeStyles(theme => ({
    heroIllustration: {
        backgroundImage: `url(${heroIllustrationImage})`,
        height: 260,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${heroIllustrationTabletImage})`,
            height: 460
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${heroIllustrationDesktopImage})`,
            height: 460
        },
        [theme.breakpoints.up(1100)]: {
            height: 560
        }
    },
    heroContent: {
        [theme.breakpoints.up('sm')]: {
            width: 430
        }
    },
    heroLink: {
        width: 183
    },
    heroLinkIcon: {
        backgroundImage: `url(${heroIcon})`,
        backgroundSize: 25,
        height: 45,
        width: 45
    },
    aboutMeImageContainer: {
        //height: 270
        [theme.breakpoints.up('sm')]: {
            width: 250
        },
        [theme.breakpoints.up(724)]: {
            width: 289
        },
        [theme.breakpoints.up('md')]: {
            width: 381
        },
        [theme.breakpoints.up(1100)]: {
            width: 418
        }
    },
    aboutMeContent: {
        [theme.breakpoints.up('sm')]: {
            borderColor: 'rgb(51 50 61 / .4)',
            width: 250
        },
        [theme.breakpoints.up(679)]: {
            flexGrow: 1,
            marginLeft: '4rem'
        },
        [theme.breakpoints.up(1000)]: {
            flexGrow: 0,
            width: '43%'
        },
        [theme.breakpoints.up(1100)]: {
            marginLeft: '7rem',
            width: 300
        }
    },
    aboutMeDivider: {
        height: 1
    }
}))