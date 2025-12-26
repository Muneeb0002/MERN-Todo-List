import deleteTodo from "../services/deleteTodo.js";

const deleteTodoController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await deleteTodo(id);

    if (!deletedTodo) {
      return res.status(404).send({
        status: 404,
        message: "Todo not found"
      });
    }

    res.status(200).json({
      status: 200,
      message: "Todo deleted successfully"
    });

  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error.message
    });
  }
};

export default deleteTodoController;
