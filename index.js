
const express = require('express');
const Chance = require('chance');
const app = express();
const PORT = process.env.PORT || 3000;
var chance = new Chance();



app.get('/', (req, res) => {
  res.send('Hello woorld!');
});

 app.get('/products', (req, res) => {
  const products = []

  //console.log(products);
  for (let index = 0; index < 100; index++) {
    products.push({
      city:chance.city(),
       country:chance.country(),
      phone:chance.phone(),
      //image:faker.image.imageUrl()
     })


  };
  console.log(products);

  res.json(products)

});
app.get('/categories/:categoryId',(req,res)=>{
  const {categoryId}= req.params
  res.json([
    {
      categoryId,
      category: 'Food',
      products: []
    }
  ])
})

app.get('/categories',(req,res)=>{
  const {categoryId}= req.params
  res.json([
    {
      categoryId,
      category: 'Food',
      products: []
    },
    {
      categoryId,
      category: 'Games',
      products: []
    },
    {
      categoryId,
      category: 'clothes',
      products: []
    },
  ])
})

app.get('/users',(req,res)=>{
  const {limit,offset} = req.query
  if (limit && offset) {
    res.json({limit: limit, offset: offset})
  }else{
    res.send("no hay parametros")
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
