import React from "react";
import { Link } from "react-router-dom";
import "./Estilo.css";


const Inicio = () => {
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
        <h1 className="title1">Arte &amp; algo más!</h1>
      </div>
      <main className="main">
        <section className="main__grid">
          <picture className="main__picture">
            <source srcSet="img/Pared__ploteada.jpg" media="(min-width:768px)" />
            <img src="img/Pared__ploteada.jpg" className="main__img" alt="Pared Ploteada" />
          </picture>
          <article className="main__article">
            <div className="main__texts">
              <h1 className="main__title">¡Mucho más que decoración!</h1>
              <p className="main__paragraph">
                ¡Descubre el mundo del arte y la decoración en nuestro negocio! En Apreciarte,
                nos apasiona embellecer tus espacios y crear ambientes únicos. Nuestro equipo de expertos en
                decoración y artistas talentosos están listos para ayudarte a transformar tus ideas en realidad.
                Ofrecemos una amplia gama de productos y servicios para satisfacer tus necesidades.
                Desde cuadros y decoración para el hogar hasta almohadones y cortinas, tenemos todo lo
                que necesitas para darle vida a tus espacios. Nuestros productos son cuidadosamente
                seleccionados para garantizar calidad y estilo.
              </p>
              <Link to="/Contacto" className="main__cta">¡Comunícate ahora!</Link>
            </div>
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
}

export default Inicio;
