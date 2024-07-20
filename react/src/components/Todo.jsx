import React, { useState, useEffect } from 'react'
import axios from 'axios';
const MainPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const userdata = JSON.parse(localStorage.getItem('jwt'));
  const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/app/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userdata.access}`
    },
});
  const fetchTodos = async () => {
      const response = await api.get('todo/');
      setTodos(response.data);
  };

  const addTodo = async () => {
      if (newTodo.trim() === '') return;
      const response = await api.post('todo/', { title: newTodo, completed: false });
      setTodos([...todos, response.data]);
      setNewTodo('');
  };

  const deleteTodo = async (id) => {
      await api.delete(`todo/${id}/`);
      setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = async (id, completed) => {
      await api.patch(`todo/${id}/`, { completed: !completed });
      setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !completed } : todo));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
      <div>
          <h1>Todo List</h1>
          <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new todo"
          />
          <button onClick={addTodo}>Add</button>
          <ul>
              {todos.map(todo => (
                  <li key={todo.id}>
                      <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => toggleTodo(todo.id, todo.completed)}
                      />
                      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                          {todo.title}
                      </span>
                      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default MainPage
