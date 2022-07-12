import { useEffect } from "react"
import PorqueElegirnos from "./inicio/PorqueElegirnos"
import SliderInicio from "./inicio/SliderInicio"
import ActividadesEmpresariales from "./inicio/ActividadesEmpresariales"
import ComoLlegar from "./contacto/ComoLlegar"
import DiplomadosDestacados from "./inicio/DiplomadosDestacados"
import TalleresDestacados from "./inicio/TalleresDestacados"
import ReseñasAlumnos from "./inicio/ReseñasAlumno"
import ReseñasAlumnosTablet from "./inicio/ReseñasAlumnosTablet"
import DiplomadosDestacadosTablet from "./inicio/DiplomadosDestacadosTablet"
import TalleresDestacadosTablet from "./inicio/TalleresDestacadosTablet"
import DiplomadosDestacadosDesktop from "./inicio/DiplomadosDestacadosDesktop"
import TalleresDestacadosDesktop from "./inicio/TalleresDestacadosDesktop"
import ReseñasAlumnosDesktop from "./inicio/ReseñasAlumnosDesktop"
import ActividadesEmpresarialesDesktop from "./inicio/ActividadesEmpresarialesDesktop"

const Inicio = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
        , [])

    if (window.innerWidth < 768 ) {
        return (
            <main className="inicio">
                <SliderInicio />
                <PorqueElegirnos />
                <DiplomadosDestacados />
                <TalleresDestacados />
                <ReseñasAlumnos />
                <ActividadesEmpresariales />
                <ComoLlegar />
            </main>
        )
    } else if (window.innerWidth > 767 && window.innerWidth < 1200) {
        return (
            <main className="inicio">
                <SliderInicio />
                <PorqueElegirnos />
                <DiplomadosDestacadosTablet />
                <TalleresDestacadosTablet />
                <ReseñasAlumnosTablet />
                <ActividadesEmpresariales />
                <ComoLlegar />
            </main>
        )
    } else {
        return (
            <main className="inicio">
                <SliderInicio />
                <PorqueElegirnos />
                <DiplomadosDestacadosDesktop />
                <TalleresDestacadosDesktop />
                <ReseñasAlumnosDesktop />
                <ActividadesEmpresarialesDesktop />
                <ComoLlegar />
            </main>
        )
    }
}

export default Inicio

