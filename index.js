
const express =require('express');

const app = express();
const PORT= process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello woorld!');
} );

app.get('/products', (req, res) => {
  res.json({name: 'iphone', price: 1000, quantity: 10});
} );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
