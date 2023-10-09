const express = require('express');
const queryDatabase = require('../DB/db.config.js');

const router = express.Router();
//middleware para verificar el cuerpo de la consulta
const postErrorHandler = require('../middlewares/postErrorHandler.js');
//Series
router.get('/', async (req, res) => {
  try {
    const getSeriesSQL = 'SELECT * FROM series';
    const results = await queryDatabase(getSeriesSQL);
    res.json(results.rows);
  } catch (error) {
    console.error('ERROR', error);
    res.status(500).json({ error: 'Internal Server Error' });
  };
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getSerieSQL = `SELECT * FROM series WHERE id = ${id}`;

    const results = await queryDatabase(getSerieSQL);
    res.json(results.rows);
  } catch (error) {
    console.error('ERROR', error);
    res.status(500).json({ error: 'Internal Server Error' });
  };
})

router.post('/', postErrorHandler, async (req, res) => {
  try {
    const { title, description, img, releaseYear, category } = req.body;
    const postSerieSQL = 'INSERT INTO series (title, description, img, release_year, category) VALUES ($1, $2, $3, $4, $5)';
    const values = [title, description, img, releaseYear, category];
    const results = await queryDatabase(postSerieSQL, values);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Bad Request' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, img, releaseYear } = req.body;
    const updateSerieSQL = "UPDATE series SET title = COALESCE($1, title), description = COALESCE($2, description), img = COALESCE($3, img), release_year = COALESCE($4, release_year) WHERE id = $5";
    const values = [title, description, img, releaseYear, id];
    const results = await queryDatabase(updateSerieSQL, values);
    res.status(200).json({ message: 'Sent Successfully', results });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Bad Request' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSerieSQL = `DELETE FROM series WHERE id = ${id}`
    const results = await queryDatabase(deleteSerieSQL);
    res.status(200).json({ message: 'Successfully removed', results })
  } catch (error) {
    res.status(404).json({ message: 'Not found' });
  }
})

module.exports = router;