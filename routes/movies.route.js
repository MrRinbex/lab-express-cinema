const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', async (req, res, next) => {
    const movies = await Movie.find()
    res.render('movies', { movies })
  })
router.get('/:id', async (req, res, next) => {
    
    const movie = await Movie.findById(req.params.id)
    res.render('movie', { movie })
})


module.exports = router;
