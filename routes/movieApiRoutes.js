const express = require("express");
const router = express.Router();
const axios = require("axios");
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

router.get("/movieInfo/:id", (req, res, next) => {
  axios
    .get(`http://tv-v2.api-fetch.website/movie/${req.params.id}`)
    .then(movieInfo => {
      res.json({ movieInfo: movieInfo.data });
    });
});

router.get("/search/:id",(req,res,next)=>{

axios.get(`https://tv-v2.api-fetch.website/movies/1?keywords=${req.params.id}`)
.then((movie)=>{
  res.json({movie: movie.data})
});

});

// router.get("/movieInfo/:id",(req,res,next)=>{
//   axios.get(`https://yts.lt/api/v2/movie_details.json?movie_id=${req.params.id}`)
//   .then(movieInfo =>{
//     res.jason({movieInfo: movieInfo.data})
//   }).catch(err=> console.log(err))
// })

module.exports = router;
