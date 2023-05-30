
const express = require('express');
const app = express();
const routerApi=require("./routes/index");
const PORT = process.env.PORT || 3000;


app.use(express.json());//middleware para parsear el body a json
app.get('/', (req, res) => {
  res.send('Hello woorld!');
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
routerApi(app);

