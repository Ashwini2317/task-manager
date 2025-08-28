const expressAsyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")
const User = require("../models/User")
exports.createTodo = expressAsyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "admin create todo success" })
})
exports.readTodo = expressAsyncHandler(async (req, res) => {
    const result = await Todo.find().populate("auther", "name")
    res.json({ message: "admin todo fetch success", result })
})
exports.updateTodo = expressAsyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.tid, req.body)
    res.json({ message: "admin todo update success" })
})
exports.deleteTodo = expressAsyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.tid)
    res.json({ message: "admin todo delete success" })
})

exports.viewUsers = expressAsyncHandler(async (req, res) => {
    const result = await User.find()
    res.json({ message: "admin user fetch success", result })
})
exports.activateUser = expressAsyncHandler(async (req, res) => {
    const { uid } = req.params
    await User.findByIdAndUpdate(uid, { active: true })
    res.json({ message: "admin user activate success" })
})
exports.deactivateUser = expressAsyncHandler(async (req, res) => {
    const { uid } = req.params
    await User.findByIdAndUpdate(uid, { active: false })
    res.json({ message: "admin user deactivate success" })
})


