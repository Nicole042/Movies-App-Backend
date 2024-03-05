const express = require('express');
const router = express.Router();
const genreRouter = require('./genre.router');
const actorsRouter = require('./actors.router');
const directorsRouter = require('./directors.router');
const moviesRouter = require('./movies.router');

// colocar las rutas aquí
router.use(genreRouter);
router.use(actorsRouter);
router.use(directorsRouter);
router.use(moviesRouter);

module.exports = router;