import React from 'react'

const Redes = () => {
    return (
        <section id='redes' className="redes">
            <h4>Siguenos en Nuestras Redes</h4>
            <div className="redes__contenedor">
                <div className='redesContenedores'>
                    <a href="https://www.facebook.com/escueladecocinacoquere" target="_blank" rel="noreferrer"><img src="/images/redes/redesContactoFacebook.webp" alt="Logo facebook" /></a>
                    <div>
                        <strong>Coquere</strong>
                        <p>@escueladecocinacoquere</p>
                    </div>
                </div>
                <div className='redesContenedores'>
                    <a href="https://www.instagram.com/co.quere/" target="_blank" rel="noreferrer"><img src="/images/redes/redesContactoInstagram.webp" alt="Logo instagram" /></a>
                    <div>
                        <strong>Coquere</strong>
                        <p>@escueladecocinacoquere</p>
                    </div>
                </div>
                <div className='redesContenedores'>
                    <a href="hola@cocinacoquere.com" target="_blank" rel="noreferrer"><img src="/images/redes/redesContactoMail.webp" alt="Logo mail" /></a>
                    <div>
                        <strong>Email</strong>
                        <p>hola@cocinacoquere.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Redes