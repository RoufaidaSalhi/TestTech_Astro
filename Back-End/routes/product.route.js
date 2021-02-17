const { request, response } = require('express')
const express=require('express')
const router = express.Router()
const Product= require('../models/product.models')


/*************************ADD PRODUCT*************************/
router.post('/AddProduct',async(req,res)=>{
  const {title,name,name_wishlist,description,price,curency,status}= req.body;
  if (!title||!name||name_wishlist||!description||!price||!curency||!status) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  Product.findOne({ title: req.body.title })
    .then(product => {
      if(product) {
        res.status(400).send({ message: "Product exist already!" });
        return;
      }})
  // Create a Product
  const product = new Product({
    name_wishlist,
    title,
    name,
    description,
    price,
    curency,
    status
  });

  // Save Product in the database
  product
    .save(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    }); 
  })

/*************************EDIT PRODUCT*************************/
router.post('/EditProduct/:title',async(req,res)=>{
  const {name,description,price,curency,status}= req.body;
      title=req.params.title
      if (!name||!description||!price||!curency||!status){
        return res.status(400).send({
            message: "Product content can not be empty"
        });
      }
      // Find and update product with the request body
      Product.findOneAndUpdate({title}, {
          name,
          description,
          price,
          curency,
          status
      }, {new: true})
      .then(product => {
          if(!product) {
              return res.status(404).send({
                  message: "Product not found"
              });
          }
          res.send(product);
      })
      });


/*************************DELETE PRODUCT*************************/

router.delete('/DeleteProduct/:title',async(req,res)=>{
  //const {title,name,description,price,curency,status}= req.body;
  const title = req.params.title
  console.log(title)
  try {
    const result = await Product.findOneAndDelete({title});
    console.log(result)
    res.send(result)
    console.log('sucess')
  } catch (error) {
    console.log('nexiste pas')
  }
})

/*************************LIST OF PRODUCTS Toby*************************/
router.get('/ListProductsToby', function(req, res) {
  const status=req.params.status
  Product.find({status:'toby'}, function(err, products) {
    var productMap = {}

    ;products.forEach(function(product) {
      productMap[product.name] = product;
    });

    res.send(productMap);  
  });
});

/*************************LIST OF PRODUCTS Bought*************************/
router.get('/ListProductsBought', function(req, res) {
  const status=req.params.status
  Product.find({status:'bought'}, function(err, products) {
    var productMap = {}

    ;products.forEach(function(product) {
      productMap[product.name] = product;
    });

    res.send(productMap);  
  });
});
/**LIST OF PRODUCTS**/
router.get('/ListProducts', function(req, res) {
  Product.find({}, function(err, products) {
    var productMap = {}

    ;products.forEach(function(product) {
      productMap[product.name] = product;
    });

    res.send(productMap);
  });
});
/**LIST OF PRODUCTS for a wishlist selected by status is bought**/
router.get('/ListProductsBought/:wish', async(req, res)=> {
  const wish=req.params.wish;
  const status=req.body.status;

  Product.find({name_wishlist:wish,status:'bought'}, function(err, products) {
    var productMap = {}
    ;products.forEach(function(product) {
      productMap[product.name] = product;
    });

    res.send(productMap);
  });
});

/**LIST OF PRODUCTS for a wishlist selected by status is to buy**/
router.get('/ListProductsTobye/:wish', async(req, res)=> {
  const wish=req.params.wish;
  const status=req.body.status;

  Product.find({name_wishlist:wish,status:'tobye'}, function(err, products) {
    var productMap = {}
    ;products.forEach(function(product) {
      productMap[product.name] = product;
    });

    res.send(productMap);
  });
});
/**Détails Product by name**/
router.get('/DetailsProduct/:name', async(req, res)=> {
  const name=req.params.name;

  Product.find({title:name}, function(err, products) {
    var productMap = {}
    ;products.forEach(function(product) {
      productMap[product.name] = product;
    });

    res.send(productMap);
  });
});

module.exports=router