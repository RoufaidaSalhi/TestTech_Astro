const mongoose=require('mongoose')


const product= new mongoose.Schema({
      title:{
        type:String,
        unique:true,
        required:true
      },
      name:{
        type:String,
        required:true
      },
      description:{
        type:String,
        required:true
      },
      price:{
        type:Number,
        required:true
      },
      curency:{
        type:String,
        required:true
      },
      status:{
        type:String,
        required:true
      },
      date:{
        type:Date,
        default:Date.now
      }

})
module.exports=mongoose.model('product',product)