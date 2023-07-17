import React from 'react';
import { Link } from "react-router-dom";
import "./componentes/contenedorpersonas.css"

const Testimonio = () => {
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
        <h3 className="title2"> Clientes felices!</h3>
      </div>
      <main className="main">

      <div className="containerhis">

        <div className="contenedortes">
          <div className="columna">
            <img src="img/Maria.jpg" className='imgx4' alt="Persona 1" />

            <h3>Maria L. Cascallar</h3>
            <hr></hr>
            <p>"Quiero resaltar el excelente servicio que he recibido de Apreciarte.
              Desde el asesoramiento personalizado hasta la entrega puntual, su
              equipo ha demostrado profesionalismo en cada paso del proceso. Además,
              su atención al cliente ha sido excepcional, brindándome respuestas
              rápidas y soluciones eficientes. Gracias a su compromiso y dedicación,
              mi experiencia como cliente ha sido inigualable. Apreciarte es mucho
              más que una tienda de arte y decoración, es una compañía que se
              preocupa por la satisfacción de sus clientes. ¡Seguiré confiando en
              ellos para todas mis necesidades de diseño de interiores!"</p>
          </div>

          <div className="columna">
            <img src="img/Nora.jpg" className='imgx4' alt="Persona 2" />
            <h3>Nora M. Solmer</h3>
            <hr></hr>
            <p>Como profesional del diseño de interiores,
              encontrar proveedores de arte y decoración de
              calidad excepcional es fundamental para mi trabajo.
              Apreciarte ha superado todas mis expectativas con
              su amplia selección de piezas únicas y vanguardistas.
              La atención al detalle, la innovación en los diseños
              y la habilidad artesanal que se refleja en cada
              producto son impresionantes. La colaboración con
              Apreciarte ha elevado mis proyectos a un nivel
              superior, permitiéndome ofrecer a mis clientes
              propuestas visualmente impactantes y sofisticadas.
              Sin duda, Apreciarte es mi aliado de confianza
              en el ámbito del arte y la decoración, brindándome
              soluciones técnicas y estéticas que cumplen con
              los más altos estándares de excelencia.</p>
          </div>

          <div className="columna">
            <img src="img/Natalia.jpg" className='imgx4' alt="Persona 3" />
            <h3>Natalia E. Gonzalez</h3>
            <hr></hr>
            <p>"No puedo evitar sonreír cada vez que entro a mi hogar y
              me encuentro rodeado de las maravillosas piezas de arte y
              decoración de Apreciarte. Cada elemento cuidadosamente
              seleccionado agrega una dosis de elegancia y calidez a mi
              espacio vital. Además de embellecer mis paredes, estas
              obras de arte han despertado mi imaginación y han abierto
              nuevas ventanas de inspiración en mi vida cotidiana.
              Apreciarte ha logrado capturar la esencia del arte y la
              decoración, y estoy agradecido por haber descubierto una
              fuente inagotable de creatividad que transforma mi hogar
              en un oasis de belleza."</p>
          </div>

          <div className="columna">
            <img src="img/Martin.jpg" className='imgx4' alt="Persona 4" />
            <h3>Martin R. Rosalez</h3>
            <hr></hr>
            <p>"Encontrar el equilibrio perfecto entre estilo y funcionalidad
              en la decoración de mi hogar siempre ha sido un desafío, hasta
              que descubrí Apreciarte. Sus increíbles piezas de arte y
              decoración han transformado por completo mis espacios, agregando un
              toque de elegancia y personalidad única. Cada detalle meticulosamente
              diseñado resalta la estética de mi hogar y crea un ambiente
              acogedor y armonioso. La variedad de estilos y opciones que ofrece
              Apreciarte me ha permitido encontrar la pieza perfecta para cada
              rincón de mi casa, creando un ambiente que refleja mi estilo y mi
              pasión por el diseño. Gracias a Apreciarte, ahora puedo disfrutar
              de un hogar hermosamente decorado que realmente me inspira y me
              hace sentir en casa."</p>
          </div>

          <div className="columna">
            <img src="img/Maria.jpg" className='imgx4' alt="Persona 1" />
            <h3>Maria L. Cascallar</h3>
            <hr></hr>
            <p>"Quiero resaltar el excelente servicio que he recibido de Apreciarte.
              Desde el asesoramiento personalizado hasta la entrega puntual, su
              equipo ha demostrado profesionalismo en cada paso del proceso. Además,
              su atención al cliente ha sido excepcional, brindándome respuestas
              rápidas y soluciones eficientes. Gracias a su compromiso y dedicación,
              mi experiencia como cliente ha sido inigualable. Apreciarte es mucho
              más que una tienda de arte y decoración, es una compañía que se
              preocupa por la satisfacción de sus clientes. ¡Seguiré confiando en
              ellos para todas mis necesidades de diseño de interiores!"</p>
          </div>

          <div className="columna">
            <img src="img/Nora.jpg" className='imgx4' alt="Persona 2" />
            <h3>Nora M. Solmer</h3>
            <hr></hr>
            <p>Como profesional del diseño de interiores,
              encontrar proveedores de arte y decoración de
              calidad excepcional es fundamental para mi trabajo.
              Apreciarte ha superado todas mis expectativas con
              su amplia selección de piezas únicas y vanguardistas.
              La atención al detalle, la innovación en los diseños
              y la habilidad artesanal que se refleja en cada
              producto son impresionantes. La colaboración con
              Apreciarte ha elevado mis proyectos a un nivel
              superior, permitiéndome ofrecer a mis clientes
              propuestas visualmente impactantes y sofisticadas.
              Sin duda, Apreciarte es mi aliado de confianza
              en el ámbito del arte y la decoración, brindándome
              soluciones técnicas y estéticas que cumplen con
              los más altos estándares de excelencia.</p>
          </div>

          <div className="columna">
            <img src="img/Natalia.jpg" className='imgx4' alt="Persona 3" />
            <h3>Natalia E. Gonzalez</h3>
            <hr></hr>
            <p>"No puedo evitar sonreír cada vez que entro a mi hogar y
              me encuentro rodeado de las maravillosas piezas de arte y
              decoración de Apreciarte. Cada elemento cuidadosamente
              seleccionado agrega una dosis de elegancia y calidez a mi
              espacio vital. Además de embellecer mis paredes, estas
              obras de arte han despertado mi imaginación y han abierto
              nuevas ventanas de inspiración en mi vida cotidiana.
              Apreciarte ha logrado capturar la esencia del arte y la
              decoración, y estoy agradecido por haber descubierto una
              fuente inagotable de creatividad que transforma mi hogar
              en un oasis de belleza."</p>
          </div>

          <div className="columna">
            <img src="img/Martin.jpg" className='imgx4' alt="Persona 4" />
            <h3>Martin R. Rosalez</h3>
            <hr></hr>
            <p>"Encontrar el equilibrio perfecto entre estilo y funcionalidad
              en la decoración de mi hogar siempre ha sido un desafío, hasta
              que descubrí Apreciarte. Sus increíbles piezas de arte y
              decoración han transformado por completo mis espacios, agregando un
              toque de elegancia y personalidad única. Cada detalle meticulosamente
              diseñado resalta la estética de mi hogar y crea un ambiente
              acogedor y armonioso. La variedad de estilos y opciones que ofrece
              Apreciarte me ha permitido encontrar la pieza perfecta para cada
              rincón de mi casa, creando un ambiente que refleja mi estilo y mi
              pasión por el diseño. Gracias a Apreciarte, ahora puedo disfrutar
              de un hogar hermosamente decorado que realmente me inspira y me
              hace sentir en casa."</p>
          </div>
          </div >
        </div>
      </main>
      <footer className="footer">
        <p className="tex">Todos los derechos reservados, By Marcelo M. Colazo : Diplomatura UTN &copy;2023</p>
      </footer>
    </div>
  );
}

export default Testimonio;
