import { useEffect } from "react"
import ComoLlegar from "./contacto/ComoLlegar"
import PortadaPaginas from "../components/layout/PortadaPaginas"
import Redes from "./contacto/Redes"

const Contacto = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    }
        , [])

    return (
        <main className="contacto">
            <PortadaPaginas img={"/images/portadas/contactoPortada.webp"} titulo={"Contacto"} />
            <ComoLlegar />
            <Redes />
        </main>
    )
}

export default Contacto