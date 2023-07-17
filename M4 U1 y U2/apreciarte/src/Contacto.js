import React from 'react';
import { Link } from "react-router-dom";

const Contacto = () => {
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
        <h3 className="title2">Estamos para ayudarte!</h3>
      </div>

      <main className="main">
        <section className="main__grid">
        <picture className="main__picture">
            <source srcSet="img/Contacto.jpg" media="(min-width:768px)" />
            <img src="img/Contacto.jpg" className="main__img" alt="Contacto" />
          </picture>

        <article className="main__article">

        <h2>Llama ahora al 0800-2020-4356</h2>
          <h4>ó completa este breve formulario y a la brevedad nos comunicaremos.</h4>
          <form id="contact-form" action="info@colestudio.com.ar" method="POST">
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" id="apellido" name="apellido" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input type="tel" id="telefono" name="telefono" required />
            </div>
            <div className="form-group">
              <label htmlFor="asunto">Asunto:</label>
              <input type="text" id="asunto" name="asunto" required />
            </div>
            <div className="form-group">
              <label htmlFor="notas">Notas:</label>
              <textarea id="notas" name="notas" rows="4" required></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>






          <div className="main__networks">
            <img src="img/redes-f.png" className="main__net" alt="Red social Facebook" />
            <img src="img/redes-i.png" className="main__net" alt="Red social Instagram" />
            <img src="img/redes-y.png" className="main__net" alt="Red social YouTube" />
            <img src="img/redes-w.png" className="main__net" alt="Red social WhatsApp" />
          </div>

          </article>

        </section>

      </main>
      <footer className="footer">
        <p className="tex">Todos los derechos reservados, By Marcelo M. Colazo : Diplomatura UTN &copy;2023</p>
      </footer>
    </div>
  );
};

export default Contacto;
