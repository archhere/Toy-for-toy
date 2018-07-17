const express = require("express"),
  app = express(),
  logger = require("morgan"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  config = require("./config/main"),
  router = require('./router');
  const path = require('path');

//connect db to server
const db = require("./config/main").mongouri;
mongoose.connect(db).then(()=>console.log('Connected to mongo'));
const server = app.listen(config.port);
console.log("your server is running on " + config.port + "." );

app.use(express.static('static_pages'));
app.use("/styles", express.static(__dirname + "/frontend/styles"));



app.use(logger('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

router(app);
