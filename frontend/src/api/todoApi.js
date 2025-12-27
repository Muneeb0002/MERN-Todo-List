import axios from "axios";

const API_BASE = "http://localhost:3001/api";

// GET all todos
export const getTodos = () => {
    return axios.get(`${API_BASE}/get`);
}

// CREATE a new todo
export const createTodo = (todo) => {
    return axios.post(`${API_BASE}/todos`, todo);
}

// UPDATE a todo by ID
export const updateTodo = (id, data) => {
  return axios.put(
    `http://localhost:3001/api/update/${id}`,
    data
  );
};

// DELETE a todo by ID
export const deleteTodo = (id) => {
    return axios.delete(`${API_BASE}/deleted/${id}`);
}
