import { useEffect } from "react";
import PortadaPaginasDetalle from "../../../components/layout/PortadaPaginasDetalle"
import BotonWapp from "../../../components/layout/BotonWapp"
import DiplomadosDetalle from "../../../components/layout/DiplomadosDetalle"
import MasInfo from "./MasInfo";

const ReposteriaBasica = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
        , [])

    return (
        <main>
            <PortadaPaginasDetalle img={"/images/portadas/diplomadoPortada.webp"} titulo={"Diplomados"} subtitulo={"Reposteria Basica"} />
            <DiplomadosDetalle titulo={"Diplomado Básico de Repostería"} duracion={"10 clases"} clases={["Bases de la Repostería y Teoría", "Roscas y Bizcochos", "Panqueques", "Tartas y Pays", "Mermeladas", "Muffins y Cupcakes", "Gelatinas Básicas", "Galletas", "Cheescake", "Pasteles (Cubiertas y rellenos)"]} duracionClase={"3 horas"} portada={"/images/diplomados/reposteriaBasica.webp"}/>
            <div className="marcoBotonWapp">
                <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/3cx"} />
            </div>
            <MasInfo />
        </main>
    )
}

export default ReposteriaBasica