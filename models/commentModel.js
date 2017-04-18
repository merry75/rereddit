var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
 comment:[
   {
     author: String,
     body: String,
     upvotes: Number
   }
 ]

});

module.exports = commentSchema ;
