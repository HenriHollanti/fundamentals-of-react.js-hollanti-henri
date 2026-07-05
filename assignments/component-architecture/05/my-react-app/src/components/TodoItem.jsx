import { useState } from "react";
import styles from "../styles/TodoItem.module.css";

function TodoItem(props) {
    const [isComplete, setComplete] = useState(false);

    return (
        <div className={isComplete ? styles.complete : styles.incomplete}>
            <p className={styles.task}>{props.content}</p>
            <button onClick={() => {
                setComplete(!isComplete);
            }}>Completed</button>
        </div>
    );
}

export default TodoItem;