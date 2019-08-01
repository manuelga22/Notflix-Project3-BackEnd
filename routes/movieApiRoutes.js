const express = require('express');
const router  = express.Router();
const axios = require('axios');

router.get('/getMovies',(req,res,next)=>{
  axios.get('https://tv-v2.api-fetch.website/movies/1')
  .then((response)=>{
    res.json({movies: response.data});
  }).catch((err)=>console.log(err))
  console.log("error")
})

router.get('/movieInfo/:id',(req,res,next)=>{
  axios.get(`http://tv-v2.api-fetch.website/movie/${req.params.id}`)
  .then((movieInfo)=>{
    res.json({movieInfo:movieInfo.data});
  })
})

module.exports = router;