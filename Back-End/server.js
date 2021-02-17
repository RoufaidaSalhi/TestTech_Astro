const express = require("express");
const app= express();
const mongoose=require('mongoose')

const dotenv= require('dotenv')
const routes_register=require('./routes/register.route')
const routes_login=require('./routes/login.route')
const routes_wishlist=require('./routes/wishlist.route')
const routes_product=require('./routes/product.route')
const cors=require('cors');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);



dotenv.config()
//Connect to Database
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Database Connected"))
//Routes
app.use(express.json())
app.use(cors())
app.use('/app',routes_register)
app.use('/app',routes_login)
app.use('/app',routes_wishlist)
app.use('/app',routes_product)

app.listen(4000, ()=> console.log("server is up and running"))