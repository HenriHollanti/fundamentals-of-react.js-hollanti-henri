import styles from '../styles/About.module.css';

function About() {
    return (
        <div className={styles.container}>
            <header>
                <h1>About me</h1>
            </header>
            <div className={styles.text_container}>
                <p>
                    My name is Henri Hollanti.
                    I am a second-year student in the Degree Programme in Business Information Systems
                    at Tampere University of Applied Sciences. <br /><br />
                    In my free time I like playing Chess and Counter-Strike 2 as well as reading
                    programming related literature.
                </p>
            </div>
            <div className={styles.technology}>
                <h2>Technologies and programming languages I have experience with:</h2>
                <ul>
                    <li>Java</li>
                    <li>C</li>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React.js</li>
                    <li>Express.js</li>
                    <li>Docker</li>
                </ul>
                <h2>Books I am currently reading:</h2>
                <ul>
                    <li>Structure and Interpretation of Computer Programs</li>
                    <li>Head First Design Patterns</li>
                    <li>Software Engineering, 9th Edition</li>
                    <li>Fundamentals of Software Architecture, 2nd Edition</li>
                </ul>
            </div>
        </div>
    );
}

export default About;