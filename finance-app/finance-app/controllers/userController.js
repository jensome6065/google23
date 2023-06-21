const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Display list of all Users.
exports.user_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User list");
});

// Display detail page for a specific User.
exports.user_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: User detail: ${req.params.id}`);
});

// Display User create form on GET.
exports.user_create_get = asyncHandler(async (req, res, next) => {
  res.render("user_name", { title: "Create User" });
});

// Handle User create on POST.
exports.user_create_post = [
  body("username")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Username must be specified."),
  body("name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Name must be specified."),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 chracters long."),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    // Create Author object with escaped and trimmed data
    const user = new User({
      username: req.body.username,
      name: req.body.name,
      password: req.body.password,
    });

    if (!errors.isEmpty()) {
      res.render("user_form", {
        title: "Create User",
        user: user,
        errors: errors.array(),
      });
      return;
    } else {
      await user.save();
      res.redirect(user.url);
    }
  }),
];

// Display User delete form on GET.
exports.user_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User delete GET");
});

// Handle User delete on POST.
exports.user_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User delete POST");
});

// Display User update form on GET.
exports.user_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User update GET");
});

// Handle User update on POST.
exports.user_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User update POST");
});

exports.user_login_get = asyncHandler(async (req, res, next) => {
  res.render("login", { title: "Login User" });
});

exports.user_login_post = asyncHandler(async (req, res, next) => {
  const login = await User.findOne({'username' : req.body.username}, 'username');
  if (login) {
    req.session.user = login;
    res.redirect('/social');
    // console.log('%s', login.username);
  }
  else {
    res.redirect('/social/user/create');
  }
})