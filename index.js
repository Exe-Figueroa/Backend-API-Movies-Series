const express = require('express');
const connection = require('./DB/db.config.js');

const app = express();


app.use(express.json());

app.get('/', (req, res)=>{
  res.send('Hello world');
});

app.get('/movies', async (req, res)=>{
  try {
    const results = await queryDatabase('SELECT * FROM movies');
    res.json(results);
  } catch (error) {
    console.error('ERROR', error);
    res.status(500).json({error: 'Internal Server Error'});
  };
});

app.get('/series', async (request, res)=>{
  try {
    const results = await queryDatabase('SELECT * FROM series');
    res.json(results);//Se le envía al cliente una respuesta
  } catch (error) {
    console.error('ERROR', error);
    res.status(500).json({error: 'Internal Server Error'});
  };
});

function queryDatabase(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result)=>{
      if (err) {
        reject(err);
      }else{
        resolve(result);
      };
    });
  });
};


app.listen(3000, ()=>{
  console.log('Se está corriendo en el puerto 3000');
});


