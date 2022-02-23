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
        <main>
            <h1 className={classNames('text-2xl')}>Hello</h1>
        </main>
    )
};

export default Home;