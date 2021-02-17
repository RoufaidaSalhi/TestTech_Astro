const { request, response } = require('express')
const express=require('express')
const router = express.Router()
const User= require('../models/user.models')
const bcrypt=require('bcrypt')
const { bcryptHash, jwtSign }= require('../utils/index')
const gravatar = require('gravatar');
const moment = require('moment');



router.post('/signup',async(req,res)=>{
      const password=req.body.password;
      const ConfPassword=req.body.ConfPassword;
      const email=req.body.email;
      const message=""
      if(!email||!password||!ConfPassword){
          res.status('401').send('you must fill in the fields')
      }
      console.log('false')
      User.findOne({ email: req.body.email })
      .then(user => {
        if(user) {
          return res.status('403').send('EMAIL ALREADY EXISTS')
        }
        if(password!=ConfPassword){
          return res.status('400').send('PASSWORD NOT CONFIRM'
          );
        }
        const profile = gravatar.url(req.body.email, {
          s: 200, // size
          r: 'pg', // ratings
          d: 'mm', // default
        })
        const newUser = User({
          email,
          password,
        });
        bcryptHash(newUser.password)
          .then(hash => {
            newUser.password = hash;
            newUser.ConfPassword = hash;
            return newUser.save();
          })
          .then(() => {
            res.json({
              status: true,
              message: 'Welcome to WishList APP!',
            });

          })
          .catch(err => {
            throw new Error(err);});
      }); 
  })

  module.exports=router

