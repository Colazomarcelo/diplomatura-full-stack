var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('productos');  //<----productos.hbs
});

module.exports = router;
