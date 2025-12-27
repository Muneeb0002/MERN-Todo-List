import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../api/todoApi";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async (todo) => {
    await createTodo(todo);
    fetchTodos();
  };

 
  const handleUpdate = async (id, updatedTodo) => {
  try {
    await updateTodo(id, updatedTodo);
    fetchTodos();
  } catch (error) {
    console.log("Update error:", error.message);
  }
};
  



  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="container">
      <h1 style={{textAlign:"center",fontFamily:"sans-serif",color:"green",fontWeight:"800" }}>Todo List</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
