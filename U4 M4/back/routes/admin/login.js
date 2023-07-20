var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{  //login.hbs    ojo sin barra es salidas del render
    layout:"admin/layout"  //layout.hbs   ojo sin barra es salidas del render
});

});

module.exports = router;
