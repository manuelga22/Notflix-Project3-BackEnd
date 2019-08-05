const express = require("express");
const router = express.Router();
const User = require('../models/userModel');


router.post('/user/edit/:id', (req, res, next)=>{
   User.findByIdAndUpdate(req.params.id,{
     nickName: req.body.nickName,
     username: req.body.username
   })
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

router.post('/addToFavorites',(req,res,next)=>{
  console.log('found the route')

  res.json({m: 'success'})
  // User.findById(req.params.id).populate('favorites')
  // .then((user)=>{
  //   console.log("req>>>>>>",req)
  //   console.log("user>>>>>",user)
  //   // req.user.favorites.push()
  // }).catch((err)=>console.log(err))
})


module.exports = router;