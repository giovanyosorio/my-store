
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

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'iphone',
    price: 1000,
    quantity: 10,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId,productId}=req.params
  res.json({
    categoryId,
    productId,
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
