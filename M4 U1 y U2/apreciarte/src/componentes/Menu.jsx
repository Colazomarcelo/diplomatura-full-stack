import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <Link to="/">Inicio</Link>

      <Link to="/Productos">Productos</Link>

      <Link to="/Nosotros">Nosotros</Link>

      <Link to="/Testimonio">Testimonio</Link>

      <Link to="/Contacto">Contacto</Link>
    </div>
  )
}
export default Menu