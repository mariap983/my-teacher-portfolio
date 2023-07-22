import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoM from '../../assets/images/logo-mp.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#37393c" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#37393c" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#37393c" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#37393c" />
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/maria-petrova-56b5a9240/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#37393c" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/mariap983'>
                    <FontAwesomeIcon icon={faGithub} color="#37393c" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.behance.net/b4c111c2'>
                    <FontAwesomeIcon icon={faBehance} color="#37393c" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar