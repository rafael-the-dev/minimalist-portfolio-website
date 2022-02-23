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
        <footer className={classNames(globalStyles.px, `bg-blue-500 py-12 flex flex-col items-center`)}>
            <div>
                <Link to="/" className={classNames('flex justify-center')}>
                    <Logo className={classNames(globalStyles.svgCurrentColor, `text-white`)} />
                </Link>
                <nav className={classNames('mt-6')}>
                    <ul className={classNames(`text-white flex flex-col items-center`)}>
                        <li className={classNames(`mb-3`)}>
                            <Link to="/" className={classNames('uppercase text-center')}>Home</Link>
                        </li>
                        <li className={classNames(`mb-3`)}>
                            <Link to="/" className={classNames('uppercase text-center')}>Portfolio</Link>
                        </li>
                        <li className={classNames(``)}>
                            <Link to="/" className={classNames('uppercase text-center')}>Contact me</Link>
                        </li>
                    </ul>
                </nav>
                <ul className={classNames(`mt-6 flex items-center`)}>
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
            </div>
        </footer>
    );
};

export default Footer;