const Post = require("../models/post");
const User = require("../models/user")
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const [
    numPosts,
    numUsers,
  ] = await Promise.all([
    Post.countDocuments({}).exec(),
    User.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Finance Social Media Home",
    post_count: numPosts,
    user_count: numUsers,
  });
});


// Display list of all Posts.
exports.post_list = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find({}, "text user")
    .sort({
      text: 1
    })
    .populate("user")
    .exec();

  res.render("post_list", {
    title: "Post List",
    post_list: allPosts
  });
});

// Display detail page for a specific Post.
exports.post_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Post detail: ${req.params.id}`);
});

// Display Post create form on GET.
exports.post_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post create GET");
});

// Handle Post create on POST.
exports.post_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post create POST");
});

// Display Post delete form on GET.
exports.post_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post delete GET");
});

// Handle Post delete on POST.
exports.post_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post delete POST");
});

// Display Post update form on GET.
exports.post_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post update GET");
});

// Handle Post update on POST.
exports.post_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post update POST");
});