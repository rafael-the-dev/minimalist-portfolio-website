import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles'
import { Link } from 'react-router-dom'
import { useCallback } from 'react';
import { Hidden, Typography } from '@mui/material';
import heroIllustrationImage from '../../assets/images/homepage/mobile/image-homepage-profile.jpg'

const Home = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const Image = ({ src }) => (
        <div className={classNames(classes.aboutMeImageContainer)}>
            <img 
                alt="Alex Spencer"
                className={classNames(`block h-full w-full`)}
                src={src}
            />
        </div>
    );
    
    return (
        <main className={classNames(globalStyles.px)}>
            <section className={classNames(`sm:relative`)}>
                <div 
                    aria-label='illustration image'
                    className={classNames(classes.heroIllustration, `bg-cover bg-no-repeat bg-center`)}>
                </div>
                <div className={classNames(classes.heroContent, `flex flex-col py-6 sm:absolute sm:bottom-0 
                    sm:left-0 sm:bg-white sm:pr-8 md:py-8`)}>
                    <Typography 
                        className={classNames(`font-bold text-blue-500 text-3xl`)}
                        component="h1">
                        Hey, I’m Alex Spencer and I love building beautiful websites
                    </Typography>
                    <Link 
                        className={classNames(classes.heroLink, `uppercase text-slate-50 bg-blue-700 flex 
                        items-center mt-6`)}
                        to="/" >
                        <span 
                            aria-label='arrow icon'
                            className={classNames(classes.heroLinkIcon, `bg-no-repeat bg-center`)}>
                        </span>
                        <span className={classNames(`grow text-center`)}>About me</span>
                    </Link>
                </div>
            </section>
            <section className={classNames(`py-16`)}>
                <Hidden smUp>
                    <Image src={heroIllustrationImage} />
                </Hidden>
            </section>
        </main>
    )
};

export default Home;