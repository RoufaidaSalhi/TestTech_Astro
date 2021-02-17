const { request, response } = require('express')
const express=require('express')
const router = express.Router()
const Wishlist= require('../models/wishlist.models')

 
/*************************ADD WISHLIST*************************/

router.post('/AddWish',async(req,res)=>{

  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  Wishlist.findOne({ name: req.body.name })
    .then(data => {
      if(data) {
        res.status(400).send({ message: "Wishlist exist already!" });
        return;
      }})
  // Create a WishList
  const wishlist = new Wishlist({
    name: req.body.name
  });

  // Save WishList in the database
  wishlist
    .save(wishlist)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Wishlist"
      });
    }); 
})

/*************************DELETE WISHLIST*************************/
router.delete('/DeleteWishlist/:name',async(req,res)=>{
  const name = req.params.name;

  Wishlist.findOneAndRemove({name})
    .then(wish => {
      if (!wish) {
        res.status(404).send({
          message: "Wishlist not found!"
        });
      } 
      else {
        res.send({
          message: "Wishlist was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete this wishlist"
      });
    });
})

/*************************LIST OF WISHLISTS*************************/

router.get('/ListWishlist', function(req, res) {
  Wishlist.find({}, function(err, wishlist) {
    var wishlistMap = {}

    ;wishlist.forEach(function(wishlist) {
      wishlistMap[wishlist.name] = wishlist;
    });

    res.send(wishlistMap);  
  });
});



module.exports=router