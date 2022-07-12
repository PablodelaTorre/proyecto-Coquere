import BotonWapp from "../../components/layout/BotonWapp"

const RentaNuestrasInstalaciones = () => {
    return (
        <section className="rentaNuestrasInstalaciones">
            <h4 id="rentaNuestrasInstalaciones">Renta Nuestras Instalaciones</h4>
            <p className="rentaNuestrasInstalaciones--texto">¿Tienes algún evento o pedido grande y no sabes dónde hacerlo?</p>
            <p className="rentaNuestrasInstalaciones--texto">Tenemos nuestro espacio disponibles para tus necesidades:</p>
            <p className="rentaNuestrasInstalaciones--texto">Una cocina completamente equipada para dar clases, experiencias, demostraciones de productos, producción, grabar videos, etc. Se puede configurar de múltiples formas para lo que necesites.</p>
            <BotonWapp texto="¡Quiero más Información!" url="https://alvo.chat/37h" />
        </section>
    )
}

export default RentaNuestrasInstalaciones