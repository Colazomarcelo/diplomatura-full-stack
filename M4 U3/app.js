var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Aqui comensamos a codificar nuestra menu------------------------------------------
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos'); // llamara a productos.js
var nosotrosRouter = require('./routes/nosotros');// llamara a nosotros.js
var testimonioRouter = require('./routes/testimonio');// llamara a testimonio.js

var app = express();

// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//--- esto significa que cuando yo reciva ("./" , me vas a llamar este consepto);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/testimonio', testimonioRouter);



// Aqui comensamos a codificar nuestra funcion------------------------------------------

app.get('/prueba', function (req, res) {
  res.send('Hola soy la pagina de prueba')
});
app.get('/destacados', function (req, res) {
  res.send('Hola soy la pagina de destacados')
});
app.get('/ingreso', function (req, res) {
  res.send('Hola soy la pagina de ingreso')
});





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
