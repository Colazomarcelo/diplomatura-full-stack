var session = require("express-session"); // 1 deve estar aqui la dependencia arriba

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//--------------------------------------------------------------M4 U4 1ER ejercicio-----
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//---------------------------------------------------------------------------


var loginRouter = require("./routes/admin/login.js") //  armamos la ruta de login/admin


//__________
const productos = [
  { id: 1, nombre: 'Cuadro 1', descripcion: 'Descripción del Cuadro 01' },
  { id: 2, nombre: 'Cuadro 2', descripcion: 'Descripción del Cuadro 02' },
  { id: 3, nombre: 'Cuadro 3', descripcion: 'Descripción del Cuadro 03' },
];
//__________

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "Marcelo1971hola2023",  //  pass secreto serca de public
  resave: false,
  saveUninitialized: true
}));

app.use("/admin/login", loginRouter);  //  cuando llegue a esta ruta , este sera el controlador siempre cerca de ¨public¨
//--------------------------------------------------------------------M4 U4 1ER ejercicio-----
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//--------------------------------------------------------------------------------------------

app.get("/", function (req, res) {
  var conocido = Boolean(req.session.nombre);

  res.render("index", {
    nombrex: "sesiones ID Productos en Express TAREA M4 U4",    //  sesiones 
    title: "sesiones nombre",    //  sesiones 
    conocido: conocido,
    nombre: req.session.nombre
  });
});

app.post("/ingresar", function (req, res) {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre
  }
  res.redirect("/");
});


//--------------------------------------------------------------M4 U4 TAREA -----
// Ruta para obtener detalles del producto según el id
app.get("/producto/:id", function (req, res) {
  const idProducto = parseInt(req.params.id);

  // Buscar el producto  en la lista de productos
  const producto = productos.find((p) => p.id === idProducto);

  if (!producto) {
    // Si el producto no existe, devolver un mensaje de error
    res.send("Producto no encontrado");
  } else {
    // Si el producto existe, mostrar los detalles del producto.
    res.render("detalleProducto", {
      title: producto.nombre,
      descripcion: producto.descripcion,
    });
  }
});

// Ruta para buscar un producto por su id
app.get("/buscar", (req, res) => {
  const idProducto = parseInt(req.query.idProducto);

  // Buscar el producto correspondiente en la lista de productos
  const producto = productos.find((p) => p.id === idProducto);

  if (!producto) {
    // Si el producto no existe, mostrar un mensaje
    res.send("Producto no encontrado");
  } else {
    // Si el producto existe, redirigir a la ruta de detalles del producto
    res.redirect(`/producto/${idProducto}`);
  }
});

//--------------------------------------------------------------M4 U4 TAREA -----



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
