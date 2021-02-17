const { request, response } = require('express')
const express=require('express')
const router = express.Router()
const User= require('../models/user.models')
const bcrypt=require('bcrypt')
const { bcryptHash, jwtSign }= require('../utils/index')




router.post('/signin',async(req,res)=>{
        const email = req.body.email;
        const password = req.body.password;
      
        User.findOne({email})
          .then(user => {
            /* Email not found */
            if(!user) {
              return   res.status(401).send('EMAIL NOT FOUND'
              );
            }
      
            /* Check if password is correct */
            bcrypt.compare(password, user.password).then(isMatch => {
              if(!isMatch) {
                console.log('password')
                return res.status(403).send('PASSWORD_INCORRECT'
);
              }
              /* Email and password are correct */
              const payload = {
                id: user.id,
                email: user.email,
              }
              return res.json({
                message: 'WELCOME TO WISHLIST APP'
              });
            });
          });
      })

module.exports=router