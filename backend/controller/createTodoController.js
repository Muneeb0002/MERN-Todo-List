import createTodo from "../services/createTodo.js";

const createTodoController=(req,res)=>{
    try{
        const todo = createTodo(req.body)
        res.status(200).send({status:200,message:"Todo create Successfully", todo})
    }
    catch(error){
        res.status(500).send({status:500,message:"Internal server Error",error})
    }  
}

export default createTodoController;