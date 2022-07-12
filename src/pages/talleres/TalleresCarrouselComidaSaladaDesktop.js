import TalleresCard from "../../components/cards/TalleresCard"

const TalleresCarrouselComidaSaladaDesktop = () => {

    const taller = [
        {
            img: "/images/talleres/cocinaSalada-pizzaFocaccia.webp",
            titulo: "Pizza y Focaccia",
            duracion: "4 horas",
            img2: "/images/talleres/cocinaSalada-sushi.webp",
            titulo2: "Sushi y Yakimeshi",
            duracion2: "4 horas",
            img3: "/images/talleres/cocinaSalada-pastas.webp",
            titulo3: "Pastas",
            duracion3: "4 horas",
        }
    ]

    return (
        <section className="talleresCarrousel" >
            <h4 id="cocinaSalada">Cocina Salada</h4>
            {taller.map((taller) => {
                return (
                    <div className="talleres__galeria">
                        <TalleresCard img={taller.img} titulo={taller.titulo} duracion={taller.duracion} />
                        <TalleresCard img={taller.img2} titulo={taller.titulo2} duracion={taller.duracion2} />
                        <TalleresCard img={taller.img3} titulo={taller.titulo3} duracion={taller.duracion3} />
                    </div>
                )
            })}

        </section>

    )
}

export default TalleresCarrouselComidaSaladaDesktop