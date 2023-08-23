import Container from './Container';
import styles from './NavBar.module.css';
import {Link} from 'react-router-dom';
import logo from '../../img/building.png'

const NavBar = () => {
    return(
        <nav className={`${styles.navbar}`}>
            <Container>
                <Link to='/'><img className={`${styles.logo}`} src={logo} alt={logo}/></Link>
                <ul className={`${styles.list}`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/company'>Company</Link></li>
                    <li><Link to='/newproject'>New Project</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar;