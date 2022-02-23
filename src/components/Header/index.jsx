import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles'
import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react';
import { Drawer, Hidden, IconButton } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const [ openMenu, setOpenMenu ] = useState(false);

    const listItemClickHandler = useCallback(() => setOpenMenu(false), []);

    const getList = useCallback(() => (
        <>
            <li onClick={listItemClickHandler} className={classNames(classes.headerListItem)}>
                <Link to="/portfolio" className={classNames(`uppercase`)}>
                    Portfolio
                </Link>
            </li>
            <li onClick={listItemClickHandler} className={classNames(classes.headerListItem)}>
                <Link to="/about-us" className={classNames(`uppercase`)}>
                    About us
                </Link>
            </li>
            <li onClick={listItemClickHandler} className={classNames(classes.headerListItem)}>
                <Link to="/contact" className={classNames(`uppercase`)}>
                    Contact
                </Link>
            </li>
        </>
    ), [ classes, listItemClickHandler ]);
    
    return (
        <header className={classNames(globalStyles.px, `flex items-center justify-between py-3`)}>
            <Link to="/">
                <Logo />
            </Link>
            <div>
                <Hidden smUp>
                    <IconButton onClick={() => setOpenMenu(b => !b)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={openMenu}
                        classes={{ paper: classes.drawerPaper, root: classes.drawerRoot }}
                        onClose={() => setOpenMenu(false)}
                        >
                        <ul 
                            className={classNames(classes.headerList, `flex flex-col`)}>
                            { getList() }
                        </ul>
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                <nav className={classNames(``)}>
                    <ul 
                        className={classNames(classes.headerNavList, `flex items-center`)}>
                        { getList() }
                    </ul>
                </nav>
            </Hidden>
            </div>
        </header>
    )
};

export default Header;