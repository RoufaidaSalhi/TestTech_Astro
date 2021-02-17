const mongoose=require('mongoose')

const user= new mongoose.Schema({
    email:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:false
    },
    ConfPassword:{
        type:String,
        required:false
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('User',user)