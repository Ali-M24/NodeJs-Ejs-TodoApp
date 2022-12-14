const express = require("express")
const router = express.Router()
const adminController = require("../controllers/admin")

router.post("/add-todo" , adminController.addTodo)
router.get('/delete-todo/:id' , adminController.deleteTodo)
router.get('/completed-todo/:id' , adminController.completeTodo)

module.exports = router;