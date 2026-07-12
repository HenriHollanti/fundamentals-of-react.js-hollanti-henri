import styles from '../styles/Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Welcome</h1>
            <div className={styles.textcontainer}>
                <p>My name is Henri Hollanti.
                I am a second-year student in the Degree Programme in Business Information Systems
                at Tampere University of Applied Sciences.
                </p>
            </div>
        </div>
    );
}

export default Home;