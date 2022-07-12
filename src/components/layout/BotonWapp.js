
const BotonWapp = ({ texto, url }) => {
  return (
    <a href={url} className="boton" target="_blank" rel="noreferrer">
      <img src="/images/icons/whats-app-blanco.svg" alt="" srcSet="" className="boton--imagen" />
      <p className="boton--texto">{texto}</p>
    </a>
  )
}

export default BotonWapp