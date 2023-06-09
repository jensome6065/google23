const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxLength: 100
  },
  name: {
    type: String,
    required: true,
    maxLength: 100
  },
});

// Virtual for user's URL
UserSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/social/user/${this._id}`;
});

// Export model
module.exports = mongoose.model("User", UserSchema);