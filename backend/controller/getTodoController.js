import getTodos from "../services/getTodo.js"

const getTodoController=async(req,res)=>{
    try{
        const getAllTodo = await getTodos()
        console.log(getAllTodo)
        res.status(200).send(getAllTodo)
    }
    catch(error){
        console.log(error)
        res.status(500).send({status:500 , message:"internal server error",error}) 
    }
}
export default getTodoController;