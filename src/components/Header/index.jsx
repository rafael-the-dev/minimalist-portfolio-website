import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles'
import { Link } from 'react-router-dom'
//import { useCallback } from 'react';
import { IconButton } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();
    
    return (
        <header className={classNames(globalStyles.px, `flex items-center justify-between py-3`)}>
            <Link to="/">
                <Logo />
            </Link>
            <div>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </div>
        </header>
    )
};

export default Header;