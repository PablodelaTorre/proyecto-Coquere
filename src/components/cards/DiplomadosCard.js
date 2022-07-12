import { Link } from "react-router-dom"

const DiplomadosCard = ({ img, titulo, duracion,url, alt }) => {

    return (
        <article className="diplomados__card">
            <img src={img} alt={alt} srcset="" />
            <div className="diplomados__card--titulo">
                <h5>{titulo}</h5>
            </div>
            <div className="diplomados__card--descripcion">
                <p className="diplomados__card--duracion">Duración: {duracion}</p>
                <hr />
                <Link to={url} className="diplomados__card--verMas">Ver más información</Link>
            </div>
        </article>
    )
}

export default DiplomadosCard