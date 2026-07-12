import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Navbar;