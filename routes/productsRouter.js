const express=require('express');
const Chance = require('chance');
const router=express.Router();
var chance = new Chance();

router.get('/', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10
  //console.log(products);
  for (let index = 0; index < limit; index++) {
    products.push({
      city: chance.city(),
      country: chance.country(),
      phone: chance.phone(),
      //image:faker.image.imageUrl()
    })


  };
  console.log({ products });

  res.json(products)

});

router.get('/filter',(req,res)=>{

  res.send('soy un filter')
})


router.get('/:id',(req,res)=>{
    const {id}=req.params
    if(id==="999"){
      res.status(404).json({
        message:"not found"
      })
    }else{
    res.status(200).json({
      id,
      name:"product name",
      price:200
      })
    }
})

router.post("/",(req,res)=>{
  const body=req.body
  res.status(201).json({
    message:"created",
    data:body
  })
})


router.patch("/:id",(req,res)=>{
  const {id}=req.params
  const body=req.body
  res.json({
    message:"update",
    data:body,
    id
  })
})

router.delete("/:id",(req,res)=>{
  const {id}=req.params
  res.json({
    message:"delete",
    id
  })
})
module.exports=router;
