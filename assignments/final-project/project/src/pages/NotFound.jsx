import styles from '../styles/ContactDetails.module.css';

function NotFound() {
    return (
        <div className={styles.not_found}>
            <h1>404</h1>
            <h2>The resource you were looking for was not found.</h2>
        </div>
    )
}

export default NotFound;