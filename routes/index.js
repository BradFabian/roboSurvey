var express = require('express');
var router = express.Router();
var apiRoutes = require("./api");

//API Routes
router.use("/api", apiRoutes);

//HTML Routes

//We need to change this below after for showing the react app. The above this line part will be the same

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;