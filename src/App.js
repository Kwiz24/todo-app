import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} data-testid={`task-${index}`}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
