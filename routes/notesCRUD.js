const express = require("express");
const router = express.Router();
const User = require('../models/userModel');
const Movie = require('../models/userMovies');

router.post('/createNote/:ObjectId',(req,res,next)=>{
  console.log(req.body)
  Movie.findByIdAndUpdate(req.params.ObjectId,{$push: {review: req.body.review}})
  .then((response)=>{
    res.json(response);
  }).catch((err)=>res.json(err))
})

router.get('/getReviews/:ObjectId', async (req,res,next)=>{
  try {
    const reviews = await Movie.findById(req.params.ObjectId)
    return res.json({
      reviews
    })
  } catch(err) {
    console.log(err)
    return res.json({
      err
    })
  }
})
router.post('/update/:ObjectId/:review/:newReview',(req,res,next)=>{
  console.log(req.body)
   Movie.findById(req.params.ObjectId)
    .then((movie)=>{
      movie.review.pull(req.params.review);
      movie.save()
      .then(response=>console.log(response))
      movie.review.push(req.params.newReview)
      movie.save()
      .then(response=>console.log(response))
      res.json({movie:movie})
    }).catch((err)=>res.json(err))
})

router.post('/delete/:ObjectId/:review',(req,res,next)=>{
  Movie.findById(req.params.ObjectId)
  .then((movie)=>{
     movie.review.pull(req.params.review);
     movie.save()
     .then((response)=>{
      res.json(response)
     }).catch(response=>{
       console.log(response)
       res.json(response)})
  }).catch((err)=>res.json(err))
})

module.exports = router;

