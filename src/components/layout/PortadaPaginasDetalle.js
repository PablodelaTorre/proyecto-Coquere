const PortadaPaginasDetalle = ({ img, titulo, subtitulo }) => {
    return (
        <section className="portadaPaginasDetalle">
            <img src={img} alt="" />
            <div className="portadaPaginasDetalle__titulo">
                <h1>{titulo}</h1>
            </div>
            <div className="portadaPaginasDetalle__subtitulo">
                <h2>{subtitulo}</h2>
            </div>
        </section>

    )
}

export default PortadaPaginasDetalle