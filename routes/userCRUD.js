const express = require("express");
const router = express.Router();

const uploadCloud = require('../config/cloudinaryConfig');
const User = require('../models/userModel');
const Movie = require('../models/userMovies');


router.post('/user/edit/:id', uploadCloud.single('photo'), (req, res, next)=>{

  let theUpdate = {
    nickName: req.body.nickName,
    username: req.body.username
  }
  if(req.file){
    theUpdate.image = req.file.url
  }
  User.findByIdAndUpdate(req.params.id, theUpdate)
  .then((response)=>{
      res.json(response)
  })
  .catch((err)=>{
      next(err);
  })
})

router.post('/user/delete/:id', (req, res, next)=>{
  User.findByIdAndRemove(req.params.id)
  .then((response)=>{
      res.json(response)
  })
  .catch((err)=>{
      res.json(err);
  })
})

router.post('/addToFavorites/:id/:movieId',(req,res,next)=>{
  //console.log('found th ve route')
  User.findById(req.params.id).populate('favorites')
  .then((user)=>{
    createUserMovie(req.params.movieId, user);
    res.json(user);
  }).catch((err)=>console.log(err))
})
function createUserMovie(id,user){
  Movie.create({
   movies : id,
   reviews : "",
  })
  .then((userMovie)=>{
    user.favorites.push(userMovie);
    user.save()
    .then(()=>console.log('saved in favorites'))
  }).catch((err)=>{console.log(err)})
}

router.post('/deleteFromFavorites/:userID/:movieID',(req,res,next)=>{
  User.findById(req.params.userID)
  .then((user)=>{
    user.favorites.pull(req.params.movieID)
    user.save()
    .then((res)=>console.log(res))
    Movie.findByIdAndDelete(req.params.movieID)
    .then(()=>{
      console.log("movie deleted")
    }).catch((err)=>console.log(err))

  }).catch((err)=>console.log(err))
})

router.get('/moviesInFavorites/:id',(req,res,next)=>{
  User.findById(req.params.id)
  .then((user)=>{
    console.log("userFavorites",user.favorites);
    res.json({favorites: user.favorites})
  })
})

router.get('/getMovie/:ObjectId',(req,res,next)=>{
  Movie.findById(req.params.ObjectId)
  .then((movie)=>{
    console.log(movie.movies)
    res.json({movie:movie.movies})
  }).catch(err=>console.log(err))
})





module.exports = router;