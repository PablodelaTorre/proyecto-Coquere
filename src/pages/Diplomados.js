import { useEffect } from "react";
import PortadaPaginas from "../components/layout/PortadaPaginas"
import DiplomadosGaleria from "./diplomados/DiplomadosGaleria"


const Diplomados = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
        , [])

    return (
        <main className="diplomados">
            <PortadaPaginas img={"/images/portadas/diplomadoPortada.webp"} titulo={"Diplomados"} />
            <DiplomadosGaleria />
        </main>
    )
}

export default Diplomados