import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const userdata = JSON.parse(localStorage.getItem('jwt'));
  const navigate = useNavigate();

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

  const logout = async() => {
    localStorage.removeItem('jwt');
    navigate('/login');
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
      <div className="container mt-4">
          <h1 className="text-center mb-4">Todo List</h1>
          <div className="input-group mb-3" style={{ maxWidth: '500px', margin: 'auto' }}>
              <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="Add new todo"
                  className="form-control"
              />
              <div className="input-group-append">
                  <button onClick={addTodo} className="btn btn-primary">Add</button>
              </div>
          </div>
          <ul className="list-group" style={{ maxWidth: '500px', margin: 'auto' }}>
              {todos.map(todo => (
                  <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="form-check">
                          <input
                              type="checkbox"
                              checked={todo.completed}
                              onChange={() => toggleTodo(todo.id, todo.completed)}
                              className="form-check-input"
                          />
                          <label className="form-check-label" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                              {todo.title}
                          </label>
                      </div>
                      <button onClick={() => deleteTodo(todo.id)} className="btn btn-outline-danger">Delete</button>
                  </li>
              ))}
          </ul>
          <div className="d-flex justify-content-center align-items-center">
              <button onClick={() => logout()} className="btn btn-outline-secondary mt-3">Log out</button>
          </div>
      </div>
  );
}

export default Todo;