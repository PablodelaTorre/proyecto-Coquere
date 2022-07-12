import AwesomeSlider from 'react-awesome-slider';
import AlumnosCard from '../../components/cards/AlumnosCard'


const reseñas = [
    {
        img: "/images/alumnos/alumno3.png",
        frase: "“Es una escuela súper profesional, con cursos prácticos y efectivos. El ambiente también es muy bonito y todo el personal es súper amable.”",
        nombre: "Adriana Lobato,",
        titulo: "Diplomado de Repostería",       
        img2: "/images/alumnos/alumno2.png",
        frase2: "“Me encanto el ambiente, la manera de trabajar y sobretodo, que yo hice todo desde cero.”",
        nombre2: "Leo Jimenez,",
        titulo2: "Taller Pastel de Cupcakes"
    },
    {
        img: "/images/alumnos/alumno1.png",
        frase: "“Excelentes cursos, ¡Súper recomendable! Ya he asistido a algunos cursos y me encanta. Nos queda delicioso y todo hecho por nosotros. Lista para el siguiente, vale la pena invertir en aprender.”",
        nombre: "Sara Canosa,",
        titulo: "Diplomado de Gelatinas"
    }
]

const ReseñasAlumnosTablet = () => {

    return (
        <section className='reseñasAlumnos'>
            <h4>Reseñas de Alumnos</h4>

            <AwesomeSlider
                bullets={false}
                className='reseñasAlumnos__slider'
            >
                {reseñas.map((reseñas) => {
                    if (reseñas.img2) {
                        return (
                            <div className='reseñasAlumnos__slider--contenedor'>
                                <div>
                                    <AlumnosCard img={reseñas.img} frase={reseñas.frase} nombre={reseñas.nombre} titulo={reseñas.titulo} />
                                </div>
                                <div>
                                    <AlumnosCard img={reseñas.img2} frase={reseñas.frase2} nombre={reseñas.nombre2} titulo={reseñas.titulo2} />
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <AlumnosCard img={reseñas.img} frase={reseñas.frase} nombre={reseñas.nombre} titulo={reseñas.titulo} />
                            </div>
                        )
                    }
                })}

            </AwesomeSlider>
        </section>
    )
}

export default ReseñasAlumnosTablet