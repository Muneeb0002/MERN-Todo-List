import Todos from "../model/todosSchema.js";

const deleteTodo= async (id)=>{
     return await Todos.findByIdAndDelete(id)  
}
export default deleteTodo;