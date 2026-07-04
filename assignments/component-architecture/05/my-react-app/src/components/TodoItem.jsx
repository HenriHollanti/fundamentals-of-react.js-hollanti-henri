import { useState } from "react";
import styles from "../styles/TodoItem.module.css";

function TodoItem(props) {
    const [isComplete, setComplete] = useState(false);

    return (
        <div className={isComplete ? styles.incomplete : styles.complete}>
            <p>{props.content}</p>
            <button onClick={() => {
                setComplete(!isComplete);
            }}>Remove</button>
        </div>
        
    );
}

export default TodoItem;