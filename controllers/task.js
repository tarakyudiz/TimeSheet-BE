const Task = require("../models/task")

async function addTask(req,res){
    try {
        const {tag,title,startTime,endTime,startDate,endDate} = req.body
        await Task.create({tag,title,startTime:new Date(startTime),endTime:new Date(endTime),startDate:new Date(startDate),endDate:new Date(endDate)})
        return res.status(200).send({message:'Task added successfully.',data:null})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:'Task add error.',data:null})
    }
}
async function listTask(req,res){
    try {
        const d = new Date()
        const today = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
        const list = await Task.find({startDate:new Date(today),endDate:new Date(today)})
        return res.status(200).send({message:'Task list fetched successfully.',data:list})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:'Task list fetch error.',data:null})
    }
}

module.exports = {
    addTask,
    listTask
}