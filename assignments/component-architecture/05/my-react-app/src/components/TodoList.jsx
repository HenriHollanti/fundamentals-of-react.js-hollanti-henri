import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [content, setContent] = useState("");
    function handleAdd() {
        const newTasks = [...tasks];
        const task = { id: tasks.length, content: content }
        newTasks.push(task);
        setTasks(newTasks);
        console.log("tasks: ", tasks);
        console.log("tasks length", tasks.length);
        console.log("task0: ", tasks[0]);
    }

    return (
        <div>
            <div>
                <input onChange={(event) => setContent(event.target.value)}></input>
                <button onClick={() => handleAdd(content)}>Add task</button>
            </div>
            <div>
                <ul>
                    {tasks.map((task) => (
                    <li key={task.id} style={{listStyleType: 'none'}}><TodoItem content={task.content}/></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;