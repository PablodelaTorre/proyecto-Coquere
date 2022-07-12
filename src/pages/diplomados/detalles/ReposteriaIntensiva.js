import { useEffect } from "react";
import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle from "../../../components/layout/DiplomadosDetalle"
import MasInfo from "./MasInfo";

const ReposteriaIntensiva = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
    , [])

  return (
    <main>
      <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.webp"} titulo={"Diplomados"} subtitulo={"Reposteria Intensivo"} />
      <DiplomadosDetalle titulo={"Diplomado de Reposteria Intensivo"} duracion={"8 clases"} clases={["Galletería fina", "Macarons", "Pan dulce mexicano", "Pan salado", "Mousses y bavaresas", "Pastelería moderna", "Fondant", "Chocolatería 2do nivel"]} duracionClase={"4 horas"} portada={"/images/diplomados/reposteriaIntensivo.webp"} />
      <div className="marcoBotonWapp">
        <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/3cA"} />
      </div>
      <MasInfo />
    </main>
  )
}

export default ReposteriaIntensiva