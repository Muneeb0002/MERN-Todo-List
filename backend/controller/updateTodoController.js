import updateTodo from "../services/updateTodo.js"

const updateTodoController=async (req,res)=>{
    try{
        const {id} = req.params;
        console.log("UPDATE API HIT", req.params.id, req.body);
        const updated=await updateTodo(id,req.body)
        console.log(updated);
        res.status(200).send({status:200,message:"todo updated sucessfully", updated})  
    }
    catch(error){
        console.log(error)
        res.status(500).send({status:500,error})         
    }    
}

export default updateTodoController;