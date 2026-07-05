import { useState } from 'react';
import TodoItem from './TodoItem';
import AddTask from './AddTask';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    
    function handleAdd(content) {
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
                <AddTask handleAdd={handleAdd} />
            </div>
            <div style={{backgroundColor: '#f7f7f7'}}>
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