const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        trim:true,
    },
    startTime:{
        type:Date,
        required:true,
        trim:true
    },
    endTime:{
        type:Date,
        required:true,
        trim:true
    },
    startDate:{
        type:Date,
        required:true,
        trim:true
    },
    endDate:{
        type:Date,
        required:true,
        trim:true
    },
    tag:{
        type:Number,
        required:true,
        trim:true
    }
},{
    timestamps: true
})

const Task = mongoose.model('task', taskSchema)

module.exports = Task