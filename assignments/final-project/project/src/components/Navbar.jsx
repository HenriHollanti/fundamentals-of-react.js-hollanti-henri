import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/addcontact" className={styles.link}>Add contact</Link>
                    <Link to="/contactlist" className={styles.link}>Contact List</Link>
                    <Link to="/contactdetails" className={styles.link}>Contact Details</Link>
            </nav>
        </div>
    );
}

export default Navbar;