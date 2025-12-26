import mongoose from "mongoose";

const todosSchema= new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required:true
    }
},{timestamps:true})


const Todos = mongoose.model("Todo",todosSchema);
export default Todos;