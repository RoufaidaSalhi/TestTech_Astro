const mongoose=require('mongoose')

const wishlist= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('wishlist',wishlist)