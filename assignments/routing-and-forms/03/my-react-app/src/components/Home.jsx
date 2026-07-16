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
            <h2>Projects</h2>
            <div className={styles.projects}>
                <div className={styles.finchess}>
                    <h3>Finchess</h3>
                    <p>
                        A Full-Stack application to save and retrieve chess games from a database via a RESTful API and display them in a chessboard view.
                        <br/>
                        Created using React.js, Node.js, Express.js, PostgreSQL and Docker.
                    </p>
                    <a href='https://github.com/HenriHollanti/finchess' target='blank'><h3>github.com/HenriHollanti/finchess</h3></a>
                </div>
                <div className={styles.game}>
                    <h3>Don't Fork It Up</h3>
                    <p>
                        A mobile 2D side-scroller racing game for Android.
                        <br/>
                        Created using Godot and C#.
                    </p>
                    <a href='https://github.com/HiisiGames/GameProject' target='blank'><h3>github.com/HiisiGames/GameProject</h3></a>
                </div>
            </div>
        </div>
    );
}

export default Home;