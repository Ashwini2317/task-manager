const expressAsyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.viewTodo = expressAsyncHandler(async (req, res) => {
    const result = await Todo.find({ auther: req.user })

    res.json({ message: "user fetch todo success", result })
})
exports.completeTodo = expressAsyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.tid, { complete: true })
    res.json({ message: "user todo complete success" })
})