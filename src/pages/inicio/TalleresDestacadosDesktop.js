import TalleresCard from "../../components/cards/TalleresCard"
import Boton from '../../components/layout/Boton';

const talleres =
    [
        {
            alt:"Macarons",
            img: "/images/talleres/reposteria-macarons.webp",
            titulo: "Macarons",
            duracion: "4 horas",
            alt2:"Pastel de cupcakes",
            img2: "/images/talleres/reposteria-pastelDeCupcakes.webp",
            titulo2: "Pastel de cupcakes",
            duracion2: "4 horas",
            alt3:"Pizza",
            img3: "/images/talleres/cocinaSalada-pizzaFocaccia.webp",
            titulo3: "Pizza y Focaccia",
            duracion3: "4 horas"
        }
    ]


const TalleresDestacadosDesktop = () => {

    return (
        <section className="talleresDestacados">
            <h4>Talleres Destacados</h4>
            <div className="talleresDestacados__galeria">
                {talleres.map((talleres) => {
                    return (
                        <>
                            <TalleresCard img={talleres.img} titulo={talleres.titulo} duracion={talleres.duracion} url={talleres.url} alt={talleres.alt}/>
                            <TalleresCard img={talleres.img2} titulo={talleres.titulo2} duracion={talleres.duracion2} url={talleres.url2} alt={talleres.alt2}/>
                            <TalleresCard img={talleres.img3} titulo={talleres.titulo3} duracion={talleres.duracion3} url={talleres.url2} alt={talleres.alt3}/>
                        </>
                    )}
                )}

            </div>
            <Boton texto="Ver más Talleres" url="/talleres" />

        </section>
    )
}

export default TalleresDestacadosDesktop