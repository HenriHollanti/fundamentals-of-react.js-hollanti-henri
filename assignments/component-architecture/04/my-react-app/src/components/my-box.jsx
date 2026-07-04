import styles from '../MyBox.module.css';
const altStyle = { color: 'tomato'}

function MyBox() {
    return <div className={styles.box} style={altStyle}>Combined style</div>
}

export default MyBox;