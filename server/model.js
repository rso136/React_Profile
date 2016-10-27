var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  email: {
    type: String,
  },
  date: {
    type: Date
  },
  comment: {
    type: String,
  }
});

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;