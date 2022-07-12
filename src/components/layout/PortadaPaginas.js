const PortadaPaginas = ({ img, titulo }) => {
    return (
        <section className="portadaPaginas">
            <img src={img} alt="" />
            <div className="portadaPaginas__titulo">
                <h1>{titulo}</h1>
            </div>
        </section>

    )
}

export default PortadaPaginas