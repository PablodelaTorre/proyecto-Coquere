import { useEffect } from "react"
import BotonWapp from "../components/layout/BotonWapp"
import PortadaPaginas from "../components/layout/PortadaPaginas"
import MasInfoTalleres from "./talleres/MasInfoTalleres"
import TalleresCarrouselComidaSalada from "./talleres/TalleresCarrouselComidaSalada"
import TalleresCarrouselComidaSaladaTablet from "./talleres/TalleresCarrouselComidaSaladaTablet"
import TalleresCarrouselComidaSaladaDesktop from "./talleres/TalleresCarrouselComidaSaladaDesktop"
import TalleresCarrouselReposteriaDesktop from "./talleres/TalleresCorrouselReposteriaDesktop"
import TalleresCarrouselReposteriaTablet from "./talleres/TalleresCarrouselReposteriaTablet"
import TalleresCarrouselReposteria from "./talleres/TalleresCarrouselReposteria"


const Talleres = () => {




    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
        , [])

    return (
        <main className="talleres">
            <PortadaPaginas img={"/images/portadas/talleresCortosPortada.webp"} titulo={"Talleres cortos"} />
            {window.innerWidth < 767 ? <TalleresCarrouselReposteria /> : null}
            {window.innerWidth > 767 && window.innerWidth < 1200 ? <TalleresCarrouselReposteriaTablet /> : null}
            {window.innerWidth > 1200 ? <TalleresCarrouselReposteriaDesktop /> : null}

            {window.innerWidth < 767 ? <TalleresCarrouselComidaSalada /> : null}
            {window.innerWidth > 767 && window.innerWidth < 1200 ? <TalleresCarrouselComidaSaladaTablet /> : null}
            {window.innerWidth > 1200 ? <TalleresCarrouselComidaSaladaDesktop /> : null}
            <BotonWapp texto={"¡Quiero inscribirme!"} url={"https://alvo.chat/4oD"} />
            <MasInfoTalleres />
        </main>
    )
}

export default Talleres