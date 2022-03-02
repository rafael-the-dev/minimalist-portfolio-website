import classNames from 'classnames'
import { useStyles } from './styles'
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const Contact = () => {
    const classes = useStyles();

    return (
        <section className={classNames(`flex flex-col items-center pb-16 sm:flex-row sm:justify-between`)}>
            <Typography 
                className={classNames(classes.contactMeTitle, `font-bold text-center sm:text-left text-blue-500 text-3xl sm:mt-0`)}
                component="h2">
                Interested in doing a project together?
            </Typography>
            <Link 
                className={classNames(`mt-6 sm:mt-0 inline-block`)}
                to="/">
                <Button 
                    className={classNames(`text-blue-500 border-blue-500 py-2.5 px-4`)}
                    variant="outlined">
                    Contact me
                </Button>
            </Link>
        </section>
    )
};

export default Contact;