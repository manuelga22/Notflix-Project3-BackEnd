const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
nickName: {type:String},
username:{type: String, unique: true},
password:{type:String},
favorites:[{type:Schema.Types.ObjectId, ref:'userMovies',}],
})

module.exports = mongoose.model('Users', userSchema);