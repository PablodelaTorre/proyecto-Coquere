
import Boton from '../../components/layout/Boton';
import PorqueElegirnosGaleria from './PorqueElegirnosGaleria';
import PorqueElegirnosSlider from './porqueElegirnosSlider';

export const PorqueElegirnos = () => {

    return (
        <section className="porqueElegirnos">
            <h4>¿Por qué elegirnos?</h4>
            <p>A través de clases de cocina, talleres, cooking parties, eventos privados, catas de vinos, coctelería y experiencias gastronómicas de todo tipo será tu lugar perfecto para dejar volar tu creatividad, aprender, tocar y disfrutar cocinando.</p>
            {window.innerWidth > 1200 ? <PorqueElegirnosGaleria /> : <PorqueElegirnosSlider />}
            <Boton texto="Ver más sobre Coquere" url="/nosotros" />
        </section>
    )
}

export default PorqueElegirnos;