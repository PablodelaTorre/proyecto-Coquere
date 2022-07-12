import AwesomeSlider from 'react-awesome-slider';
import AlumnosCard from '../../components/cards/AlumnosCard'

const reseñas = [
    {
        alt:"Grupo de alumnos",
        img: "/images/alumnos/alumno3.png",
        frase: "“Es una escuela súper profesional, con cursos prácticos y efectivos. El ambiente también es muy bonito y todo el personal es súper amable.”",
        nombre: "Adriana Lobato,",
        titulo: "Diplomado de Repostería"
        
    },
    {
        alt:"Alumna cocinando",
        img: "/images/alumnos/alumno2.png",
        frase: "“Me encanto el ambiente, la manera de trabajar y sobretodo, que yo hice todo desde cero.”",
        nombre: "Leo Jimenez,",
        titulo: "Taller Pastel de Cupcakes"
    },
    {
        alt:"Alumno",
        img: "/images/alumnos/alumno1.png",
        frase: "“Excelentes cursos, ¡Súper recomendable! Ya he asistido a algunos cursos y me encanta. Nos queda delicioso y todo hecho por nosotros. Lista para el siguiente, vale la pena invertir en aprender.”",
        nombre: "Sara Canosa,",
        titulo: "Diplomado de Gelatinas"
    }
]
const ReseñasAlumnos = () => {

    return (
        <section className='reseñasAlumnos'>
            <h4>Reseñas de Alumnos</h4>

            <AwesomeSlider
                bullets={false}
                className='reseñasAlumnos__slider'
            >
                {reseñas.map((reseñas) => {
                    return (
                        <div>
                            <AlumnosCard img={reseñas.img} frase={reseñas.frase} nombre={reseñas.nombre} titulo={reseñas.titulo} alt={reseñas.alt}/>
                        </div>
                    )
                })}

            </AwesomeSlider>
        </section>
    )
}

export default ReseñasAlumnos