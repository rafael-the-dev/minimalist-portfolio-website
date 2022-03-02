import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles'
import { Grid, Hidden, Typography } from '@mui/material';
import bookmarkImage from '../../assets/images/portfolio/mobile/image-portfolio-bookmark.jpg'
import bookmarkTabletImage from '../../assets/images/portfolio/tablet/image-portfolio-bookmark.jpg'
import bookmarkDesktopImage from '../../assets/images/portfolio/desktop/image-portfolio-bookmark.jpg'
import ContactSection from '../../components/ContactSection'

const ProjectDetails = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const Image = ({ src }) => (
        <div className={classNames(classes.heroImage, `mb-12`)}>
            <img 
                alt="Alex Spencer"
                className={classNames(`block h-full w-full`)}
                src={src}
            />
        </div>
    );

    return (
        <main  className={classNames(globalStyles.pxSM)}>
            <Hidden smUp>
                <Image src={bookmarkImage} />
            </Hidden>
            <Hidden smDown mdUp>
                <Image src={bookmarkTabletImage} />
            </Hidden>
            <Hidden mdDown>
                <Image src={bookmarkDesktopImage} />
            </Hidden>
            <Grid container>
                <Grid item xs={12} md={6} component="section">
                    <div></div>
                </Grid>
                <Grid item xs={12} md={6} component="section">
                    <div>
                        <Typography 
                            className={classNames(`font-bold`)}
                            component="h1" 
                            variant="h6">
                            Manage
                        </Typography>
                        <Typography 
                        className={classNames(`text-sm leading-7 text-blue-500 mt-4`)}
                        component="p">
                        This project required me to build a fully responsive landing page to the 
                        designs provided. I used HTML5, along with CSS Grid and JavaScript for 
                        the areas that required interactivity, such as the testimonial slider.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <ContactSection />
        </main>
    );
};

export default ProjectDetails;