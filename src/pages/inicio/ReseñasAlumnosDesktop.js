import AlumnosCard from '../../components/cards/AlumnosCard'


const reseñas = [
    {
        alt:"Grupo de alumnos",
        img: "/images/alumnos/alumno3.png",
        frase: "“Es una escuela súper profesional, con cursos prácticos y efectivos. El ambiente también es muy bonito y todo el personal es súper amable.”",
        nombre: "Adriana Lobato,",
        titulo: "Diplomado de Repostería",
        alt2:"Alumna cocinando",
        img2: "/images/alumnos/alumno2.png",
        frase2: "“Me encanto el ambiente, la manera de trabajar y sobretodo, que yo hice todo desde cero.”",
        nombre2: "Leo Jimenez,",
        titulo2: "Taller Pastel de Cupcakes",
        alt3:"Alumno",
        img3: "/images/alumnos/alumno1.png",
        frase3: "“Excelentes cursos, ¡Súper recomendable! Ya he asistido a algunos cursos y me encanta. Nos queda delicioso y todo hecho por nosotros. Lista para el siguiente, vale la pena invertir en aprender.”",
        nombre3: "Sara Canosa,",
        titulo3: "Diplomado de Gelatinas"
    }
]

const ReseñasAlumnosDesktop = () => {

    return (
        <section className='reseñasAlumnos'>
            <h4>Reseñas de Alumnos</h4>

            <div className='reseñasAlumnos__galeria'>
                {reseñas.map((reseñas) => {
                    return (
                        <>
                            <AlumnosCard img={reseñas.img} frase={reseñas.frase} nombre={reseñas.nombre} titulo={reseñas.titulo} alt={reseñas.alt}/>
                            <AlumnosCard img={reseñas.img2} frase={reseñas.frase2} nombre={reseñas.nombre2} titulo={reseñas.titulo2} alt={reseñas.alt2}/>
                            <AlumnosCard img={reseñas.img3} frase={reseñas.frase3} nombre={reseñas.nombre3} titulo={reseñas.titulo3} alt={reseñas.alt3}/>
                        </>
                    )}
                )}
            </div>
        </section>
    )
}

export default ReseñasAlumnosDesktop