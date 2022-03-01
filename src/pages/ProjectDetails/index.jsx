import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles'
import { Hidden } from '@mui/material';
import bookmarkImage from '../../assets/images/portfolio/mobile/image-portfolio-bookmark.jpg'
import bookmarkTabletImage from '../../assets/images/portfolio/tablet/image-portfolio-bookmark.jpg'
import bookmarkDesktopImage from '../../assets/images/portfolio/desktop/image-portfolio-bookmark.jpg'

const ProjectDetails = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const Image = ({ src }) => (
        <div className={classNames(classes.heroImage)}>
            <img 
                alt="Alex Spencer"
                className={classNames(`block h-full w-full`)}
                src={src}
            />
        </div>
    );

    return (
        <main>
            <Hidden smUp>
                <Image src={bookmarkImage} />
            </Hidden>
            <Hidden smDown mdUp>
                <Image src={bookmarkTabletImage} />
            </Hidden>
            <Hidden mdDown>
                <Image src={bookmarkDesktopImage} />
            </Hidden>
        </main>
    );
};

export default ProjectDetails;