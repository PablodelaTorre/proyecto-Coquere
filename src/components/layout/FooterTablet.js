import { Link } from "react-router-dom"

const FooterTablet = () => {
    return (
        <footer className="footerTablet">
            <div className="footerTablet--contenido">
                <div className="footerTablet__colIzq">
                    <div className="footerTablet__colIzq--coquere">
                        <h2>Coquere escuela de cocina</h2>
                        <div>
                            <Link to="/diplomados"><p>Diplomados</p></Link>
                            <Link to="/talleres"><p>Talleres cortos</p></Link>
                            <Link to="/empresarial"><p>Actividades empresariales</p></Link>
                        </div>
                    </div>

                    <div className="footerTablet__colIzq--nuestrasInstalaciones">
                        <h2>Nuestras instalaciones</h2>
                        <div>
                            <p>Calle Palmira 1010, Pedregal</p>
                            <p>78294 San Luis, S.L.P., Mexico</p>
                        </div>
                    </div>

                </div>

                <div className="footerTablet__logo">
                    <img src="/images/branding/CoquereLogoCircularFooter.svg" alt="Coquere logo footer" />
                </div>
                <div className="footerTablet__colDer">

                    <div className="footerTablet__colDer--contacto">
                        <h2>Contacto</h2>
                        <div>
                            <p>+52 444 715 5980</p>
                            <p>coquereslp@gmail.com</p>
                        </div>
                    </div>

                    <div className="footerTablet__colDer--redesSociales">
                        <h2>Redes sociales</h2>
                        <div>

                            <a className="redesInLine" href="https://www.facebook.com/escueladecocinacoquere" target="_blank" rel="noreferrer">
                                <img src="/images/redes/redesFacebook.webp" alt="logo facebook" />
                                <p>Facebook</p>
                            </a>

                            <a href="https://www.instagram.com/co.quere/" target="_blank" rel="noreferrer" className="redesInLine">
                                <img src="/images/redes/redesInstagram.webp" alt="logo instagram" />
                                <p>Instagram</p>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footerTablet__derechos">
                <hr />
                <div className="derechos--texto">
                    <h2>Coquere escuela de cocina 2022 -</h2>
                    <p>Todos los derechos reservados</p>
                </div>
            </div>

        </footer>
    )
}

export default FooterTablet