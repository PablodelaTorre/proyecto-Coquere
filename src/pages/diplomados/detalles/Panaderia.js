import { useEffect } from "react";
import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle from "../../../components/layout/DiplomadosDetalle"
import MasInfo from "./MasInfo";

const Panaderia = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
    , [])

  return (
    <main>
      <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.webp"} titulo={"Diplomados"} subtitulo={"Panadería"} />
      <DiplomadosDetalle titulo={"Diplomado de Panadería"} duracion={"5 clases"} clases={["Pan dulce y laminado", "Pan para restaurantes", "Pan dulce mexicano", "Pan blando y de corteza", "Panes europeos"]} duracionClase={"4 horas"} portada={"/images/diplomados/Panaderia.webp"} />
      <div className="marcoBotonWapp">
        <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/3cz"} />
      </div>
      <MasInfo />
    </main>
  )
}

export default Panaderia