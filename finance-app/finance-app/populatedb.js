#! /usr/bin/env node

console.log(
  'This script populates some test posts, users, genres and postinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Post = require("./models/post");
const User = require("./models/user");

const users = [];
const posts = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = "mongodb+srv://stuy_password:google@cluster0.aohhsht.mongodb.net/";

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createUsers();
  await createPosts();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}


async function userCreate(username, name) {
  const userdetail = {
    username: username,
    name: name
  };

  const user = new User(userdetail);

  await user.save();
  users.push(user);
  console.log(`Added user: ${username} ${name}`);
}

async function postCreate(text, user, date) {
  const postdetail = {
    text: text,
    date: date,
    user: user,
  };

  const post = new Post(postdetail);
  await post.save();
  posts.push(post);
  console.log(`Added post: ${text}`);
}


async function createUsers() {
  console.log("Adding users");
  await Promise.all([
    userCreate("dye", "Daniel Ye"),
    userCreate("dde", "Daniel De"),
    userCreate("dbe", "Daniel Be"),
    userCreate("dce", "Daniel Ce"),
  ]);
}

async function createPosts() {
  console.log("Adding Posts");
  await Promise.all([
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
    postCreate(
      "Just bought 2 shares of $TSLA",
      users[0],
      "1932-11-8",
    ),
    postCreate(
      "Just sold 3 shared of $GOOG",
      users[1],
      "1932-11-8",
    ),
  ]);
}