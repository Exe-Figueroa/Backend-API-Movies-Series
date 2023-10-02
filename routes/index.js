const express = require('express');
const moviesRouter = require('./movies-routes.js');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/movies', moviesRouter)
  // router.use('/series',)
}

module.exports = routerApi;