const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
  res.send('Hello world');
});

routerApi(app);

app.listen(3000, ()=>{
  console.log('Se está corriendo en el puerto 3000');
});


