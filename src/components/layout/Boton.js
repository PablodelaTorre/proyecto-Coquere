import { Link } from "react-router-dom"

const Boton = ({ texto, url}) => {
  return (
    <Link to={url} className="boton">
        <img src="/images/icons/plus-circle-solid.svg" alt="" srcSet="" className="boton--imagen" />
        <p className="boton--texto">{texto}</p>
    </Link>
  )
}

export default Boton