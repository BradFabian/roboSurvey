var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

var server = app.listen(PORT, function() {
  console.log(
    new Date().toISOString() + ": API Server listening on port " + PORT
  );
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Add routes, both API and view
app.use(routes);
//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/roboSurvey",
  { useNewUrlParser: true }
);

// mongoose connection
var mongooseConnection = mongoose.connection;

// Get the default connection
mongooseConnection.on(
  "error",
  console.error.bind(console, "connection error:")
);

mongooseConnection.once("open", function() {
  console.log("Successfully Connected to MongoDB !");
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// module exports
module.exports = app;
