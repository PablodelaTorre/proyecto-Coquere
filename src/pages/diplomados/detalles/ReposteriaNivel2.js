import { useEffect } from "react";
import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle from "../../../components/layout/DiplomadosDetalle"
import MasInfo from "./MasInfo";

const ReposteriaNivel2 = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
    , [])

  return (
    <main>
      <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.webp"} titulo={"Diplomados"} subtitulo={"Reposteria Nivel 2"} />
      <DiplomadosDetalle titulo={"Diplomado Nivel 2 de Repostería"} duracion={"6 clases"} clases={["Tartas", "Galletas", "Cupcakes", "Pasteles clásicos", "Pasteles Europeos", "Chocolatería"]} duracionClase={"4 horas"} portada={"/images/diplomados/reposteriaNivel2.webp"} />
      <div className="marcoBotonWapp">
        <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/3cB"} />
      </div>
      <MasInfo />
    </main>

  )
}

export default ReposteriaNivel2