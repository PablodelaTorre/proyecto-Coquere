import Boton from '../../components/layout/Boton';

const ActividadesEmpresarialesDesktop = () => {

    return (
        <section className="actividadesEmpresarialesDesktop">
            <h4>Actividades Empresariales</h4>

            <div className='actividadesEmpresarialesDesktop__contenedor'>
                <img src="./images/empresarial/Empresarial.webp" alt="Imagen practicas de cocina" srcset="" />
                <div className='actividadesEmpresarialesDesktop__info'>
                    <p>
                        Clases de 2 a 3 horas, prácticas y a la medida según la necesidad de cada empresa y equipo de trabajo.
                    </p>
                    <Boton texto="Ver más información" url="/empresarial" />
                </div>
            </div>

        </section>
    )
}

export default ActividadesEmpresarialesDesktop