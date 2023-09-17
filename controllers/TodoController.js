// here all todo controllers are written
// all the controllers are exported to routes.js
const Todo = require("../models/Todo");
// get all todos
const TodoHandler = {};
TodoHandler.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
TodoHandler.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
    });
    const todo = await newTodo.save();
    res.status(200).json({ message: "New todo added successfully", todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
TodoHandler.getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    res.status(200).json({
      message: "Todo found successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({ message: "Todo not found", error: error.message });
  }
};
TodoHandler.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const options = {new:true}
        const todo = await Todo.findByIdAndUpdate(id,update,options);
        res.status(200).json({message:'Todo updated successfully',todo})
    }
    catch(error){
        res.status(500).json({message:'Todo not found',error:error.message})
    }
}
TodoHandler.deleteTodo = async(req, res) =>{
    try{
        const id = req.params.id;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({message:'Todo deleted successfully'})
    }
    catch(error){
        res.status(500).json({message:'Todo not found',error:error.message})
    }
}
module.exports = TodoHandler;
