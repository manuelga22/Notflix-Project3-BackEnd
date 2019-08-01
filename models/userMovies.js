const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const userMoviesSchema = new Schema({
 movies:{type:Array},
 review:{type:String}
})

module.exports = mongoose.model('UserMovies', userMoviesSchema);