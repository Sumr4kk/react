import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null); // Индекс редактируемой задачи


  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditing = (index) => {
    setEditingTask(index);
  };

  const saveEdit = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Чеклист</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Добавить задачу..."
      />
      <button onClick={addTask}>Добавить</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {editingTask === index ? (
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => saveEdit(index, e.target.value)}
                  onBlur={cancelEdit}
                />
              ) : (
                <span onClick={() => startEditing(index)}>{task.text}</span>
              )}
            </span>
            <button onClick={() => deleteTask(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
