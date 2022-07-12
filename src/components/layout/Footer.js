import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo">
                <img src="/images/branding/CoquereLogoCircularFooter.svg" alt="Coquere logo footer" />
            </div>
            <div className="coquere">
                <h2>Coquere escuela de cocina</h2>
                <div>
                    <Link to="/diplomados"><p>Diplomados</p></Link>
                    <Link to="/talleres"><p>Talleres cortos</p></Link>
                    <Link to="/empresarial"><p>Actividades empresariales</p></Link>
                </div>
            </div>

            <div className="nuestrasInstalaciones">
                <h2>Nuestras instalaciones</h2>
                <div>
                    <p>Calle Palmira 1010, Pedregal</p>
                    <p>78294 San Luis, S.L.P., Mexico</p>
                </div>
            </div>

            <div className="nuestrasInstalaciones">
                <h2>Contacto</h2>
                <div>
                    <p>+52 444 715 5980</p>
                    <p>hola@cocinacoquere.com</p>
                </div>
            </div>

            <div className="redesSociales">
                <h2>Redes sociales</h2>
                <div>
                    <div className="redesInLine">
                        <img src="/images/redes/redesFacebook.webp" alt="logo facebook" />
                        <a href="https://www.facebook.com/escueladecocinacoquere" target="_blank" rel="noreferrer">Facebook</a>
                    </div>
                    <div className="redesInLine">
                        <img src="/images/redes/redesInstagram.webp" alt="logo instagram" />
                        <a href="https://www.instagram.com/co.quere/" target="_blank" rel="noreferrer">Instagram</a>
                    </div>
                </div>
            </div>


            <div className="derechos">
                <hr />
                <div className="derechos--texto">
                    <h2>Coquere escuela de cocina 2022 -</h2>
                    <p>Todos los derechos reservados</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer