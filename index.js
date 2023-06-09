
const express = require('express');
const app = express();
const routerApi=require("./routes/index");
const cors=require("cors")
const {logErrors, errorHandler,boomErrorHandler}=require("./middlewares/error.handler");
const PORT = process.env.PORT || 3000;


app.use(express.json());//middleware para parsear el body a json
app.get('/', (req, res) => {
  res.send('Hello world!');
});

routerApi(app);

const whitelist=['http://localhost:8080','https:/halyfax.com']

const options={
  origin:(origin,callback)=>{
    if(whitelist.includes(origin)){
      callback(null,true)
    }else{
      callback(new Error("no permitido"))
    }
  }
}
app.use(cors(options))
app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

