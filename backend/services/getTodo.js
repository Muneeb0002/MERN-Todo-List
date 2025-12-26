import Todos from "../model/todosSchema.js";

const getTodos = async () => {
  return await Todos.find();
};

export default getTodos;