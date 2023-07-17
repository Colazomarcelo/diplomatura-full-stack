import React from "react";
import { Link } from "react-router-dom";

const Productos = () => {
  return (
    <div>
      <nav className="nav container">
        <Link to={"/"}><img src="img/logo-apreciarte-2.png" className="nav__img" alt="Logo Apreciarte" /></Link>
        <div className="nav__hamburger"></div>
        <div className="nav__overlay">
          <ul className="nav__menu">

            <li className="nav__item">
              <Link to="/" className="nav__link">Inicio</Link>
            </li>

            <li className="nav__item">
              <Link to="/Productos" className="nav__link">Productos</Link>
            </li>

            <li className="nav__item">
              <Link to="/Nosotros" className="nav__link">Nosotros</Link>
            </li>

            <li className="nav__item">
              <Link to="/Testimonio" className="nav__link">Testimonio</Link>
            </li>

            <li className="nav__item">
              <Link to="/Contacto" className="nav__link">Contacto</Link>
            </li>

            <li className="nav__login">
              <a href="#" className="nav__sign">Ingresar</a>
            </li>

            <li className="nav__login nav__login--border">
              <a href="#" className="nav__sign">Regístrese</a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="content11">
        <h3 className="title2">Encuentra lo que buscas!</h3>
      </div>

      <main className="main">


        <div className="container1">
          <div className="image1">
            <img src="img/cuadro1.jpg" className="image1" alt="Imagen1" />
          </div>
          <div className="content1">
            <h1>Triptico Abstrac 2</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Soluta nulla repudiandae reiciendis voluptas tempora vel
              placeat asperiores quaerat fuga in, quod nam vero eligendi
              delectus totam illo, sequi quibusdam debitis.</p>
            <hr />
            <div className="medidas1">
              <h2 style={{ display: 'inline' }}>Medidas totales:</h2>
              <p style={{ display: 'inline' }}>160cm x 50cm</p>
            </div>
            <hr />
            <a href="contacto" className="main__cta1">Consulta ahora!</a>
          </div>
        </div>

        <div className="container1">
          <div className="image1">
            <img src="img/cuadro2.jpg" className="image1" alt="Imagen1" />
          </div>
          <hr />
          <div className="content1">
            <h1>Triptico Abstrac 2</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Soluta nulla repudiandae reiciendis voluptas tempora vel
              placeat asperiores quaerat fuga in, quod nam vero eligendi
              delectus totam illo, sequi quibusdam debitis.</p>
            <hr />
            <div className="medidas1">
              <h2 style={{ display: 'inline' }}>Medidas totales:</h2>
              <p style={{ display: 'inline' }}>160cm x 50cm</p>
            </div>
            <hr />
            <a href="contacto" className="main__cta1">Consulta ahora!</a>
          </div>
        </div>

        <div className="container1">
          <div className="image1">
            <img src="img/cuadro3.jpg" className="image1" alt="Imagen1" />
          </div>
          <div className="content1">
            <h1>Diptico Abstrac 3</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Soluta nulla repudiandae reiciendis voluptas tempora vel
              placeat asperiores quaerat fuga in, quod nam vero eligendi
              delectus totam illo, sequi quibusdam debitis.</p>
            <hr />
            <div className="medidas1">
              <h2 style={{ display: 'inline' }}>Medidas totales:</h2>
              <p style={{ display: 'inline' }}>110cm x 80cm</p>
            </div>
            <hr />
            <a href="contacto" className="main__cta1">Consulta ahora!</a>
          </div>
        </div>

      </main>
      <footer className="footer">
        <p className="tex">Todos los derechos reservados, By Marcelo M. Colazo : Diplomatura UTN &copy;2023</p>
      </footer>
    </div>
  );
}

export default Productos;
