const express = require('express')
const {taskController} = require('../controllers')
const json = require("../tags.json")
const router = express.Router()

router.get('/task/tags',(req,res)=>{
    res.status(200).send(json.tags)
})
router.post('/task/add',taskController.addTask)
router.get('/task/list',taskController.listTask)
module.exports = router