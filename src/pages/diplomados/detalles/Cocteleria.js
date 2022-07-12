import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle from "../../../components/layout/DiplomadosDetalle"
import { useEffect } from "react";
import MasInfo from "./MasInfo";


const Cocteleria = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
        , [])
    return (
        <main>
            <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.webp"} titulo={"Diplomados"} subtitulo={"Cocteleria"} />
            <DiplomadosDetalle titulo={"Diplomado de Coctelería"} duracion={"3 clases"} clases={["La Coctelería y su Origen, Bases de Coctelería Clásica, Fundamentos de la Coctelería Moderna", "Herramientas Esenciales, Cristalería para Coctelería, Presentación del Coctel: Decoración y Garnish, Terminología de Coctelería, Práctica: Uso Correcto del Shaker", "Practica"]} duracionClase={" 3 horas"} portada={"/images/diplomados/Cocteleria.webp"} />
            <div className="marcoBotonWapp">
                <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/3cy"} />
            </div>
            <MasInfo />
        </main>
    )
}

export default Cocteleria