import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/AwesomeSliderStyles.css';
import DiplomadosDestacadosCard from "../../components/cards/DiplomadosDestacadosCard"
import Boton from '../../components/layout/Boton';

const diplomados =
  [
    {
      alt: "Postres",
      img: "/images/diplomados/reposteriaBasica.webp",
      titulo: "Repostería Básica",
      duracion: "10 clases",
      url: "/diplomados/reposteria-basica"
    },
    {
      alt: "Gelatinas",
      img: "/images/diplomados/gelatinas.webp",
      titulo: "Gelatinas",
      duracion: "4 clases",
      url: "/diplomados/gelatinas"
    },
    {
      alt: "Cocteleria",
      img: "/images/diplomados/cocteleria.webp",
      titulo: "Coctelería",
      duracion: "3 clases",
      url: "/diplomados/cocteleria"
    }
  ]

const DiplomadosDestacados = () => {

  return (
    <section className="diplomadosDestacados">
      <h4>Diplomados Destacados</h4>
      <AwesomeSlider
        bullets={false}
        cssModule={AwesomeSliderStyles}
        className='diplomadosDestacados__slider'
      >
        {diplomados.map((diplomados) => {
          return (
            <div>
              <DiplomadosDestacadosCard img={diplomados.img} titulo={diplomados.titulo} duracion={diplomados.duracion} url={diplomados.url} alt={diplomados.alt} />
            </div>
          )
        }
        )}
      </AwesomeSlider>
      <Boton texto="Ver más Diplomados" url="/diplomados" />
    </section>
  )
}

export default DiplomadosDestacados