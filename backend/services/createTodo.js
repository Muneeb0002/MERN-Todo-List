import Todos from "../model/todosSchema.js";

const createTodo=async (data)=>{
    return await Todos.create(data)  
}
export default createTodo;