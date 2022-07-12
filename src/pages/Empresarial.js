import { useEffect } from "react"
import PortadaPaginas from "../components/layout/PortadaPaginas"
import EmpresarialContenido from "./empresarial/EmpresarialContenido"
const Empresarial = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
        , [])

    return (
        <main className="empresarial">
                <PortadaPaginas img={"/images/portadas/empresarialPortada.webp"} titulo={"Empresarial"} />
                <EmpresarialContenido />
        </main>
    )
}

export default Empresarial