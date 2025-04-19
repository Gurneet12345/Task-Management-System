import { useState } from 'react';
import './App.css';
import { addTaskToDynamoDB, sendSNSTaskNotification } from './services/taskService';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = async () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask('');

    try {
      await addTaskToDynamoDB(task);
      await sendSNSTaskNotification(task);
      console.log("✅ Task added successfully");
    } catch (error) {
      console.error("🔥 AWS Error:", error);
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>📋 Task Manager</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: 8, width: 300 }}
      />
      <button onClick={handleAddTask} style={{ marginLeft: 10, padding: 8 }}>
        Add Task
      </button>
      <ul style={{ marginTop: 20 }}>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
