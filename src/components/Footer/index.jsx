import classNames from 'classnames'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'
import { useGlobalStyles } from '../../styles'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    const globalStyles = useGlobalStyles();

    return (
        <footer className={classNames(globalStyles.px, `bg-blue-500 py-12 flex flex-col items-center
            sm:flex-row sm:justify-between sm:py-8`)}>
            <div className={classNames('sm:flex sm:items-center')}>
                <Link to="/" className={classNames('flex justify-center')}>
                    <Logo className={classNames(globalStyles.svgCurrentColor, `text-white`)} />
                </Link>
                <nav className={classNames('mt-6 sm:mt-0 sm:ml-4 md:ml-8')}>
                    <ul className={classNames(`text-white flex flex-col items-center sm:flex-row`)}>
                        <li className={classNames(`mb-3 sm:mb-0 sm:mr-3`)}>
                            <Link to="/" className={classNames('uppercase text-center')}>Home</Link>
                        </li>
                        <li className={classNames(`mb-3 sm:mb-0 sm:mr-3`)}>
                            <Link to="/" className={classNames('uppercase text-center')}>Portfolio</Link>
                        </li>
                        <li className={classNames(``)}>
                            <Link to="/" className={classNames('uppercase text-center')}>Contact me</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className={classNames(`mt-6 flex items-center sm:mt-0`)}>
                <li className={classNames(`mr-3 flex`)}>
                    <GitHubIcon className={classNames(`text-white`)} />
                </li>
                <li className={classNames(`mr-3`)}>
                    <TwitterIcon className={classNames(`text-white`)} />
                </li>
                <li className={classNames(``)}>
                    <LinkedInIcon className={classNames(`text-white`)} />
                </li>
            </ul>
        </footer>
    );
};

export default Footer;