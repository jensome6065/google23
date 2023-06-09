const express = require("express");
const router = express.Router();

// Require controller modules.
const post_controller = require("../controllers/postController");
const user_controller = require("../controllers/userController");

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", post_controller.index);

// GET request for creating a Post. NOTE This must come before routes that display Post (uses id).
router.get("/post/create", post_controller.post_create_get);

// POST request for creating Post.
router.post("/post/create", post_controller.post_create_post);

// GET request to delete Post.
router.get("/post/:id/delete", post_controller.post_delete_get);

// POST request to delete Post.
router.post("/post/:id/delete", post_controller.post_delete_post);

// GET request to update Post.
router.get("/post/:id/update", post_controller.post_update_get);

// POST request to update Post.
router.post("/post/:id/update", post_controller.post_update_post);

// GET request for one Post.
router.get("/post/:id", post_controller.post_detail);

// GET request for list of all Post items.
router.get("/posts", post_controller.post_list);

/// AUTHOR ROUTES ///

// GET request for creating User. NOTE This must come before route for id (i.e. display user).
router.get("/user/create", user_controller.user_create_get);

// POST request for creating User.
router.post("/user/create", user_controller.user_create_post);

// GET request to delete User.
router.get("/user/:id/delete", user_controller.user_delete_get);

// POST request to delete User.
router.post("/user/:id/delete", user_controller.user_delete_post);

// GET request to update User.
router.get("/user/:id/update", user_controller.user_update_get);

// POST request to update User.
router.post("/user/:id/update", user_controller.user_update_post);

// GET request for one User.
router.get("/user/:id", user_controller.user_detail);

// GET request for list of all Users.
router.get("/users", user_controller.user_list);

module.exports = router;