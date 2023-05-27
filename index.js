
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello woorld!');
});

app.get('/products', (req, res) => {
  res.json([
    { name: 'iphone',
     price: 1000,
      quantity: 10
     },{
      name: 'samsung',
      price: 900,
      quantity: 10
     }]);
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
