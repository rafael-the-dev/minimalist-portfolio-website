import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles'
import { Button, Grid, Hidden, Typography } from '@mui/material';
import bookmarkImage from '../../assets/images/portfolio/mobile/image-portfolio-bookmark.jpg'
import bookmarkTabletImage from '../../assets/images/portfolio/tablet/image-portfolio-bookmark.jpg'
import bookmarkDesktopImage from '../../assets/images/portfolio/desktop/image-portfolio-bookmark.jpg'
import ContactSection from '../../components/ContactSection'
import { Link } from 'react-router-dom'

const ProjectDetails = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const Image = ({ className, src }) => (
        <div className={classNames(classes.heroImage, `mb-12`)}>
            <img 
                alt="Alex Spencer"
                className={classNames(className, `block h-full w-full`)}
                src={src}
            />
        </div>
    );

    return (
        <main  className={classNames(globalStyles.px)}>
            <Hidden smUp>
                <Image src={bookmarkImage} />
            </Hidden>
            <Hidden smDown mdUp>
                <Image src={bookmarkTabletImage} />
            </Hidden>
            <Hidden mdDown>
                <Image src={bookmarkDesktopImage} />
            </Hidden>
            <Grid container className={classNames(`mb-12 md:justify-between`)}>
                <Grid item xs={12} md={4} component="section">
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
                        <Typography 
                            className={classNames(`text-sm leading-7 text-cyan-700 font-semibold mt-4`)}
                            component="p">
                            Interaction Design / Front End Development
                        </Typography>
                        <Typography 
                            className={classNames(`text-sm leading-7 text-cyan-700 font-semibold mt-2`)}
                            component="p">
                            HTML / CSS
                        </Typography>
                        <Link 
                            className={classNames(`mt-6 inline-block`)}
                            to="/">
                            <Button 
                                className={classNames(`text-blue-500 border-blue-500 py-2.5 px-4`)}
                                variant="outlined">
                                Visit website
                            </Button>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} md={8} component="section" className={classNames(classes.rightSide)}>
                    <div className={classNames(`pt-12`)}>
                        <Typography 
                            className={classNames(`font-bold`)}
                            component="h2" 
                            variant="h6">
                            Project Background
                        </Typography>
                        <Typography 
                        className={classNames(`text-sm leading-7 text-blue-500 mt-4 mb-8`)}
                        component="p">
                        This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.
                        </Typography>
                        <Image src={bookmarkImage} className={classes.staticImages} />
                        <Image src={bookmarkImage} className={classes.staticImages} />
                    </div>
                </Grid>
            </Grid>
            <ContactSection />
        </main>
    );
};

export default ProjectDetails;