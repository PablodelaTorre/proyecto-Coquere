import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/AwesomeSliderStyles.css';
import DiplomadosDestacadosCard from "../../components/cards/DiplomadosDestacadosCard"
import Boton from '../../components/layout/Boton';

const diplomados =
    [
        {
            img: "/images/diplomados/reposteriaBasica.webp",
            titulo: "Repostería Básica",
            duracion: "10 clases",
            img2: "/images/diplomados/gelatinas.webp",
            titulo2: "Gelatinas",
            duracion2: "4 clases",
          },
          {
            img: "/images/diplomados/cocteleria.webp",
            titulo: "Coctelería",
            duracion: "3 clases",
          }

    ]

const DiplomadosDestacadosTablet = () => {

    return (
        <section className="diplomadosDestacados">
            <h4>Diplomados Destacados</h4>
            <AwesomeSlider
                bullets={false}
                cssModule={AwesomeSliderStyles}
                className='diplomadosDestacados__slider'
            >
                {diplomados.map((diplomados) => {
                    if (diplomados.img2) {
                    return (
                        <div className='diplomadosDestacados__slider--contenedor'>
                            <div>
                                <DiplomadosDestacadosCard img={diplomados.img} titulo={diplomados.titulo} duracion={diplomados.duracion} url={diplomados.url} />
                            </div>
                            <div>
                                <DiplomadosDestacadosCard img={diplomados.img2} titulo={diplomados.titulo2} duracion={diplomados.duracion2} url={diplomados.url2} />
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                            <div>
                                <DiplomadosDestacadosCard img={diplomados.img} titulo={diplomados.titulo} duracion={diplomados.duracion} url={diplomados.url} />
                            </div>
                    )
                }
                })}
                
            </AwesomeSlider>
            <Boton texto="Ver más Diplomados" url="/diplomados" />
        </section>
    )
}

export default DiplomadosDestacadosTablet