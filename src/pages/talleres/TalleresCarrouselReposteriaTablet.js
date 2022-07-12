import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from '../../components/cards/TalleresCard';


const TalleresCarrouselTablet = () => {

    const taller = [
        {
            img: "/images/talleres/reposteria-mesaDePostres.webp",
            titulo: "Mesa de Postres",
            duracion: "4 horas",
            img2: "/images/talleres/reposteria-chocolateria.webp",
            titulo2: "Chocolateria",
            duracion2: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-browniesYCheescake.webp",
            titulo: "Brownies y Cheescake",
            duracion: "4 horas",
            img2: "/images/talleres/reposteria-macarons.webp",
            titulo2: "Macarons",
            duracion2: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-postresIndividuales.webp",
            titulo: "Postres individuales",
            duracion: "4 horas",
            img2: "/images/talleres/reposteria-pastelDeCupcakes.webp",
            titulo2: "Pastel de Cupcakes",
            duracion2: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-pastelDecorado.webp",
            titulo: "Pastel decorado",
            duracion: "4 a 5 horas",
            img2: "/images/talleres/reposteria-roscaDeReyes.webp",
            titulo2: "Rosca de Reyes",
            duracion2: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-manejoDeDuyas.webp",
            titulo: "Manejo de Duyas",
            duracion: "3 horas",
            img2: "/images/talleres/reposteria-galletasGourmet.webp",
            titulo2: "Galletas gourmet",
            duracion2: "4 horas"
        }]

        return (
            <section className="talleresCarrousel" >
                <h4 id="reposteria">Repostería</h4>
                <AwesomeSlider
                    bullets={false}
                    className='talleresCarrousel__slider'
                >
                    {taller.map((taller) => {
                        if (taller.img2) {
                            return (
                                <div className='talleresCarrousel__slider--contenedor'>
                                    <div>
                                        <TalleresCard img={taller.img} titulo={taller.titulo} duracion={taller.duracion} />
                                    </div>
                                    <div>
                                        <TalleresCard img={taller.img2} titulo={taller.titulo2} duracion={taller.duracion2} />
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div>
                                    <TalleresCard img={taller.img} titulo={taller.titulo} duracion={taller.duracion} />
                                </div>
                            )
                        }
                    })}
                </AwesomeSlider>
    
            </section>
        )
}

export default TalleresCarrouselTablet


