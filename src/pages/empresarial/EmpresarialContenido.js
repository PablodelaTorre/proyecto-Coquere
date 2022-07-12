import React from 'react'
import BotonWapp from '../../components/layout/BotonWapp'

const EmpresarialContenido = () => {
    return (
        <section className="empresarialContenido">
            <p>Las clases duran aproximadamente entre dos y tres horas y son totalmente prácticas y a la medida, dependiendo de las necesidades de cada empresa y equipo de trabajo.
            </p>
            <p>Esta actividad permitirá desarrollar actitudes y destrezas en ocasiones desconocidas para los participantes, que se obtienen a través del apoyo que su empresa les brinda y se convierte en vivencias aptas para compartir con otros y así desarrollar capacidades que pueden aplicarse en el día a día.</p>
            <p>Después las preparaciones elaboradas durante la clase pueden ser, acompañadas también de bebidas a su gusto y serán degustadas alrededor de una o varias mesas de convivencia.
            </p>
            <p>Contamos con el equipo necesario para el servicio de comida y con una terraza el cual ofrece un lugar muy agradable ideal para la proyección de presentaciones o vídeos y conferencias proporcionando así una experiencia integral en dicho espacio.</p>
            <BotonWapp icono="/images/icons/whatsapp-brands-white.svg" texto="Contáctanos ya" url="https://alvo.chat/37q" />
            <img className='imgEmpresarial' src="/images/empresarial/Empresarial.webp" alt="Alumno cocinando" srcset="" />
        </section>
    )
}

export default EmpresarialContenido