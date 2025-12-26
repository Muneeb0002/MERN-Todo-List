import Todos from "../model/todosSchema.js";

const updateTodo=(id,data)=>{
    return Todos.findByIdAndUpdate(id, data, { new: true })
}

export default updateTodo;