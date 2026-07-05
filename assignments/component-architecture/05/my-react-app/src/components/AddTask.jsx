import { useState } from "react";

function AddTask(props) {
    const [content, setContent] = useState("");
 return (
    <div>
        <input onChange={(event) => setContent(event.target.value)}></input>
        <button onClick={() => props.handleAdd(content)}>Add task</button>
    </div>
 )
}

export default AddTask;