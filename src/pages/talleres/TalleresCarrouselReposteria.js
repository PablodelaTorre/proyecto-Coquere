import AwesomeSlider from 'react-awesome-slider';
import TalleresCard from '../../components/cards/TalleresCard';


const TalleresCarrousel = () => {

    const taller = [
        {
            img: "/images/talleres/reposteria-mesaDePostres.webp",
            titulo: "Mesa de Postres",
            duracion: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-chocolateria.webp",
            titulo: "Chocolateria",
            duracion: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-browniesYCheescake.webp",
            titulo: "Brownies y Cheescake",
            duracion: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-macarons.webp",
            titulo: "Macarons",
            duracion: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-postresIndividuales.webp",
            titulo: "Postres individuales",
            duracion: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-pastelDeCupcakes.webp",
            titulo: "Pastel de Cupcakes",
            duracion: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-pastelDecorado.webp",
            titulo: "Pastel decorado",
            duracion: "4 a 5 horas"
        },
        {
            img: "/images/talleres/reposteria-roscaDeReyes.webp",
            titulo: "Rosca de Reyes",
            duracion: "4 horas"
        },
        {
            img: "/images/talleres/reposteria-manejoDeDuyas.webp",
            titulo: "Manejo de Duyas",
            duracion: "3 horas"
        },
        {
            img: "/images/talleres/reposteria-galletasGourmet.webp",
            titulo: "Galletas gourmet",
            duracion: "4 horas"
        }]

    return (
        <section className="talleresCarrousel" >
            <h4 id="reposteria">Repostería</h4>
            <AwesomeSlider
                bullets={false}
                className='talleresCarrousel__slider'
            >
                {taller.map((taller) => {
                    return (<div><TalleresCard img={taller.img} titulo={taller.titulo} duracion={taller.duracion} /></div>)
                })}
            </AwesomeSlider>

        </section>
    )
}

export default TalleresCarrousel


