import React from 'react';
import { Link } from "react-router-dom";
import "./componentes/contenedorpersonas.css"



const Nosotros = () => {
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
        <h3 className="title2" >Creamos para vos!</h3>
      </div>
      <main className="main">

        <div className="containerhis">

          <div className="contenedornos">
            <div className="columnanos">
              <img src="img/arte-dis.png" className='imgx3' alt="Arte y Diseño" />


              <h3>Apasionados por el diseño</h3>
              <hr></hr>
              <p>Descubre el arte y la decoración que te enamorarán. En nuestra web,
                nos consideramos apasionados por el diseño, y eso se refleja en cada
                obra que ofrecemos. Sumérgete en un mundo de colores, texturas y formas
                únicas que transformarán tus espacios en obras maestras. ¡Déjate inspirar
                y encuentra piezas excepcionales para expresar tu estilo y personalidad!</p>
            </div>

            <div className="columnanos">
              <img src="img/Calidad-de-vida.png" className='imgx3' alt="Calidad de vida" />
              <h3>Mejoramos la calidad de vida</h3>
              <hr></hr>
              <p>Descubre cómo mejoramos tu calidad de vida a través de nuestros productos de
                arte y decoración. Nos dedicamos a seleccionar cuidadosamente
                cada pieza para brindarte una experiencia única en tu hogar u oficina. Cada
                obra está diseñada para transmitir emociones, crear ambientes acogedores y
                despertar la creatividad en tu día a día. ¡Déjate cautivar por nuestro
                compromiso de elevar tu bienestar y transformar tus espacios en lugares extraordinarios!</p>
            </div>

            <div className="columnanos">
              <img src="img/ecologia.png" className='imgx3' alt="Ecologia" />
              <h3>Cuidamos el medioambiente</h3>
              <hr></hr>
              <p>Nos enorgullece decir que también nos preocupamos por
                cuidar el medioambiente. Nos comprometemos a ofrecerte productos de
                arte y decoración que están en armonía con la naturaleza. Trabajamos
                con artistas y proveedores que utilizan materiales sostenibles y
                técnicas eco-amigables en la creación de cada pieza. Al elegir
                nuestros productos, no solo embelleces tu espacio, sino que también
                contribuyes a la conservación del planeta. Únete a nosotros.</p>
            </div>

          </div>
        </div>

        <div className="containerhis">
          <div className="image1">
            <img src="img/historia1.jpg" className='hist1' alt="Nuestros comiensos"></img>
          </div>
          <div className="content1">
            <h1>Comenzamos con una idea. </h1>
            <div className="content2">
              <p>Como emprendedores, comenzamos con una idea. Nos consideramos apasionados por
                el arte y la decoración, y nos impulsó el deseo de compartir nuestra pasión con
                el mundo. Nuestro objetivo es ofrecer productos que no solo embellezcan los espacios,
                sino que también transmitan emociones y inspiren a las personas.

                Desde el inicio, nos hemos comprometido con la calidad, la creatividad y la innovación.
                Trabajamos arduamente para seleccionar cuidadosamente cada pieza, colaborando con artistas talentosos
                y proveedores comprometidos con prácticas sostenibles. Nos enorgullece ofrecer productos únicos y
                exclusivos que reflejan nuestro amor por el arte y la decoración.

                Nos esforzamos por brindar una experiencia excepcional a nuestros clientes,
                atendiendo sus necesidades y superando sus expectativas. Valoramos la satisfacción
                del cliente y nos esforzamos por establecer relaciones duraderas basadas en la confianza y el respeto.

                Como emprendedores, estamos emocionados de compartir nuestro viaje con ustedes. Cada
                día nos desafiamos a nosotros mismos para crecer, aprender y evolucionar. Estamos comprometidos con la
                excelencia y buscamos constantemente nuevas formas de mejorar y ofrecer lo mejor en el mundo del arte y la decoración.

                ¡Gracias por ser parte de nuestro viaje y por apoyar a emprendedores apasionados como nosotros!</p>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="image1">
            <img src="img/historia2.jpg" alt="Nuestros trabajo con esfuerso"></img>
          </div>
          <div className="content1">
            <h1>El trabajo arduo nos trajo fruto.</h1>
            <p> Hemos dedicado incontables horas, esfuerzo y
              sacrificio para convertir nuestra pasión por el arte y la decoración
              en una realidad exitosa. Cada paso del camino ha sido desafiante,
              pero nos hemos mantenido perseverantes y comprometidos.

              Nuestro enfoque en la calidad, la innovación y la creatividad nos ha permitido
              destacarnos en el mercado. Hemos buscado constantemente nuevas ideas, colaborado
              con talentosos artistas y proveedores, y hemos superado obstáculos para ofrecer productos excepcionales.

              Estamos orgullosos de ver cómo nuestros esfuerzos han dado sus frutos. Hemos
              creado una comunidad de clientes satisfechos que aprecian la calidad y el valor
              de nuestras obras de arte y productos decorativos. Su apoyo y reconocimiento nos
              impulsan a seguir mejorando y creciendo.

              El trabajo arduo ha sido la clave de nuestro éxito, pero también reconocemos
              que no estaríamos aquí sin el apoyo de nuestro equipo y de aquellos que han
              confiado en nosotros desde el principio. Valoramos cada persona que ha sido
              parte de nuestro viaje y nos comprometemos a seguir ofreciendo productos
              excepcionales y un servicio de primera categoría.</p>
          </div>
        </div>
        <div className="containerhis">
          <div className="contenedor-x3">
            <div className="columnanos">
              <img src="img/Mario.jpg" className='imgx3-3' alt="Arte y Diseño" />
              <h3>Mario T. Franco</h3>
              <h5>CEO / Ventas</h5>
            </div>

            <div className="columnanos">
              <img src="img/Karina.jpg" className='imgx3-3' alt="Calidad de vida" />
              <h3>Karina L. Martins</h3>
              <h5>Arte / Diseño</h5>


            </div>

            <div className="columnanos">
              <img src="img/abril.jpg" className='imgx3-3' alt="Ecologia" />
              <h3>Abril S. Martel</h3>
              <h5>Producción</h5>

            </div>
          </div>


        </div>
      </main>

      <footer className="footer">
        <p className="tex">Todos los derechos reservados, By Marcelo M. Colazo : Diplomatura UTN &copy;2023</p>
      </footer>

    </div >
  );
}

export default Nosotros;
