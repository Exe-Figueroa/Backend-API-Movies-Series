const express = require('express');

const app = express();

app.use(express.json());

const pelis = [
  {
    id: 1,
    name: "Need For Speed",
  },
  {
    id: 2,
    name: "Lo que el agua se llevó",
  },
  {
    id: 3,
    name: "Corazón de león",
  },
];
const series = [
  {
    id: 1,
    name: "La casa de papel",
  },
  {
    id: 2,
    name: "Power Rangers",
  },
  {
    id: 3,
    name: "Los Simpsons",
  },
  {
    id: 4,
    name: "Peaky Blinders",
  },
];

app.get('/', (req, res)=>{
  const all = pelis.concat(series);
  res.json(all);
});

app.get('/movies', (req, res)=>{
  res.json(pelis);
});

app.get('/series', (request, response)=>{
  response.json(series);
});

app.listen(3000, ()=>{
  console.log('Se está corriendo en el puerto 3000')
})


