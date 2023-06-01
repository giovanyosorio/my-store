const express=require('express');
const ProductService = require('./../services/product.service');
const router=express.Router();
const service=new ProductService(); //instancia de la clase

router.get('/', (req, res) => {
  const products=service.find()
  console.log({ products });
  res.json(products)

});

router.get('/filter',(req,res)=>{

  res.send('soy un filter')
})


router.get('/:id',(req,res)=>{
  const {id}=req.params

    const product_id=service.findOne(id)

    res.json(product_id)
})

router.post("/",(req,res)=>{
  const body=req.body
  const newProduct=service.create(body)
  res.status(201).json({
    message:"created",
    data:newProduct
  })
})


router.patch("/:id",(req,res)=>{
  const {id}=req.params
  const body=req.body
  const product =service.update(id,body)
  res.json({
    message:"update",
    data:product
  })
})

router.delete("/:id",(req,res)=>{
  const {id}=req.params
  const rta =service.delete(id)
  res.json({
    message:"delete",
    data:rta
  })
})
module.exports=router;
