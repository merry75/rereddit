//todo
//userSchema and model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  socialId: String,
  provider: String,
  email: String,
  loginCount: Number
});

var User = mongoose.model("User", UserSchema);



module.exports = User;
