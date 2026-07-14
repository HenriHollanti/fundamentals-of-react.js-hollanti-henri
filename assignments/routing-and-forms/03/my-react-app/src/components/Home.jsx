import styles from '../styles/Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <header>
                <h1>Henri Hollanti</h1>
            </header>
            <div className={styles.text_container}>
                <p>
                    This is a website showcasing some of my projects as well as hosting some information about me along with my contact information.
                </p>
            </div>
            <div className={styles.projects}>
                <h2>Projects</h2>
                <h3>Finchess</h3>
                <h3>Don't Fork It Up</h3>
            </div>
        </div>
    );
}

export default Home;