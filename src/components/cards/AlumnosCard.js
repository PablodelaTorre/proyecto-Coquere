const AlumnosCard = ({img, frase, nombre, titulo, alt}) => {
    return (
        <article className="alumnosCard">
            <img src={img} alt={alt} />
            <p className="alumnosCard__frase">{frase}</p>
            <div className="alumnosCard__descripcion">
                <p>{nombre}</p>
                <p>{titulo}</p>
            </div>
        </article>
    )
}

export default AlumnosCard