import express from "express";
import createTodoController from "../controller/createTodoController.js";
import getTodoController from "../controller/getTodoController.js";
import updateTodoController from "../controller/updateTodoController.js";
import deleteTodoController from "../controller/deleteTodoController.js";

const router = express.Router();

router.post('/todos',createTodoController);
router.get('/get',getTodoController);
router.put('/update/:id',updateTodoController);
router.delete('/deleted/:id',deleteTodoController);

export default router;
