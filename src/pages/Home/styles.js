import { makeStyles } from '@mui/styles'
import heroIcon from '../../assets/images/icons/down-arrows.svg'
import heroIllustrationImage from '../../assets/images/homepage/mobile/image-homepage-hero.jpg'

export const useStyles = makeStyles(theme => ({
    heroIllustration: {
        backgroundImage: `url(${heroIllustrationImage})`,
        height: 260
    },
    heroLink: {
        width: 183
    },
    heroLinkIcon: {
        backgroundImage: `url(${heroIcon})`,
        backgroundSize: 25,
        height: 45,
        width: 45
    }
}))