const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: {
    type: String,
    required: true,
    maxLength: 100
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  subject: {
    type: String,
    maxLength: 100
  },
  date: {
    type: Date
  },

});

// Virtual for post's URL
PostSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/social/post/${this._id}`;
});

// Export model
module.exports = mongoose.model("Post", PostSchema);