const express = require('express');
const queryDatabase = require('../DB/db.config.js');

const router = express.Router();
//middleware para verificar el cuerpo de la consulta
const postErrorHandler = require('../middlewares/postErrorHandler.js');
//movies
router.get('/', async (req, res) => {
  const getMoviesSQL = 'SELECT * FROM movies';

  try {
    const results = await queryDatabase(getMoviesSQL);
    res.json(results.rows);
  } catch (error) {
    console.error('ERROR', error);
    res.status(500).json({ error: 'Internal Server Error' });
  };
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getMovieSQL = `SELECT * FROM movies WHERE id = ${id}`;

    const results = await queryDatabase(getMovieSQL);
    res.json(results.rows);
  } catch (error) {
    console.error('ERROR', error);
    res.status(500).json({ error: 'Internal Server Error' });
  };
});

router.post('/', postErrorHandler, async (req, res) => {
  try {
    const { title, description, img, releaseYear } = req.body;
    const postMovieSQL = 'INSERT INTO movies (title, description, img, release_year) VALUES ($1, $2, $3, $4)';
    const values = [title, description, img, releaseYear];
    const results = await queryDatabase(postMovieSQL, values);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Consulta inválida' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, img, releaseYear } = req.body;
    const updateMovieSQL = "UPDATE movies SET title = COALESCE($1, title), description = COALESCE($2, description), img = COALESCE($3, img), release_year = COALESCE($4, release_year) WHERE id = $5";
    const values = [title, description, img, releaseYear, id];
    const results = await queryDatabase(updateMovieSQL, values);
    res.status(200).json({ message: 'Sent Successfully', results });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Consulta inválida' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieSQL = `DELETE FROM movies WHERE id = ${id}`
    const results = await queryDatabase(deleteMovieSQL);
    res.status(200).json({ message: 'Successfully removed', results })
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;