import Boton from '../../components/layout/Boton';

const ActividadesEmpresariales = () => {

    return (
        <section className="actividadesEmpresariales">
            <h4>Actividades Empresariales</h4>
            <p>
                Clases de 2 a 3 horas, prácticas y a la medida según la necesidad de cada empresa y equipo de trabajo.
            </p>
            <div className='actividadesEmpresariales__galeria'>
                <img src="./images/empresarial/Empresarial.webp" alt="Imagen practicas de cocina" srcset="" />
            </div>

            <Boton texto="Ver más información" url="/empresarial" />
        </section>
    )
}

export default ActividadesEmpresariales