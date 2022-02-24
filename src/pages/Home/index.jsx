import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles'
import { Link } from 'react-router-dom'
import { useCallback } from 'react';
import { Typography } from '@mui/material';

const Home = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();
    
    return (
        <main className={classNames(globalStyles.px)}>
            <section>
                <div 
                    aria-label='illustration image'
                    className={classNames(classes.heroIllustration, `bg-cover bg-no-repeat bg-center`)}>
                </div>
                <div className={classNames(`flex flex-col py-6`)}>
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
        </main>
    )
};

export default Home;