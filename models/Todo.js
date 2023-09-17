const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const TodoSchema = new Schema({
    title:{
        type:String,
        required:true
    
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['incomplete','completed'],
        default: 'incomplete',
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Todo = mongoose.model('Todo',TodoSchema);
module.exports = Todo;