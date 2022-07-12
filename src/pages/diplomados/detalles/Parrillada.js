import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle from "../../../components/layout/DiplomadosDetalle"
import { useEffect } from "react";
import MasInfo from "./MasInfo";


const Parrillada = () => {

    const clases = ["Origen de los cortes, Técnicas de destazado, Herramientas para destazado", "Tips para detectar una carne de calidad, Tipos de fibras y grasas , Marmoleado , Descongelado correcto", "Tipos de asadores y parrillas, Estilos de parrilla, Pros y contras",
    "Tipos de combustibles, Características, Pros y contras, Formas de encendido y manejo , Técnicas de encendido", "Términos, Tipos de cocción , Temperaturas, Complementos parrilleros, Recetas, Maridajes"]

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
        , [])
    return (
        <main>
            <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.webp"} titulo={"Diplomados"} subtitulo={"Parrillada"} />
            <DiplomadosDetalle titulo={"Diplomado de Parrillada"} duracion={"5 clases"} clases={clases} duracionClase={" 4 horas"} portada={"/images/diplomados/parrillada.webp"} />
            <div className="marcoBotonWapp">
                <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/3cy"} />
            </div>
            <MasInfo />
        </main>
    )
}

export default Parrillada