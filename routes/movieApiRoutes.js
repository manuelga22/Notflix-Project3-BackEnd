const express = require("express");
const router = express.Router();
const axios = require("axios");
const User = require("../models/userModel");
const Movie = require("../models/userMovies");
// const downloat = require("downloat");

router.get("/getMovies", (req, res, next) => {
  axios
    .get("https://tv-v2.api-fetch.website/movies/1")
    .then(response => {
      res.json({ movies: response.data });
    })
    .catch(err => console.log(err));
  console.log("error");
});

router.get("/newMovies", (req,res,next)=>{
  axios.get("https://tv-v2.api-fetch.website/movies/1/?sort=year")
  .then(response =>{
    res.json({movies:response.data})
  })
  .catch(err=>console.log(err))
})

router.get("/movieInfo/:id", (req, res, next) => {
  axios
    .get(`http://tv-v2.api-fetch.website/movie/${req.params.id}`)
    .then(movieInfo => {
      res.json({ movieInfo: movieInfo.data });
    });
});

router.get("/search/:name", (req, res, next) => {
  axios
    .get(`https://tv-v2.api-fetch.website/movies/1?keywords=${req.params.name}`)
    .then(movie => {
      res.json({ movie: movie.data });
    });
});

router.get("/getInfoOfmovie/:movieId", (req, res, next) => {
  axios
    .get(`https://tv-v2.api-fetch.website/movie/${req.params.movieId}`)
    .then(movie => {
      console.log(movie.data);
      res.json({ movie: movie.data });
    });
});

router.get("/getIdOfmovie/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movie => {
    console.log(movie.movies);
    res.json(movie.movies);
  });
});




module.exports = router;
