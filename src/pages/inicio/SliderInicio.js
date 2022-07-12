import AwesomeSlider from 'react-awesome-slider';
import Boton from '../../components/layout/Boton';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const SliderInicio = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <section className='sliderInicio'>

            <AutoplaySlider
                play={true}
                cancelOnInteraction={true} // should stop playing on user interaction
                interval={2000}
                bullets={false}
                className='sliderInicio__slider'
            >
                <div className='sliderInicio__slider--slide'>
                    <img src="/images/sliderInicio/sliderInicio1.webp" alt="Canapes" srcset="" className='sliderInicio__slider--slide--img' />
                    <div className='sliderInicio__slider--descripcion'>
                        <img src="/images/branding/coquereLogoVerde.svg" alt="Coquere Logo" className='sliderInicio__slider--descripcion--img' />
                        <p>"Un espacio de aprendizaje, convivencia y platicas haciendo lo que mas nos gusta: <span>COCINAR</span>"</p>
                    </div>
                </div>

                <div className='sliderInicio__slider--slide2'>
                    <img src="/images/sliderInicio/sliderInicio2.webp" alt="Masitas condimentadas" srcset="" className='sliderInicio__slider--slide--img2' />
                    <div className='sliderInicio__slider--slide2--logo'>
                        <img src="/images/branding/coquereLogo.svg" alt="Logo" />
                    </div>
                    <div className='sliderInicio__slider--descripcion2'>
                        <p>Ofrecemos talleres de corta duración para aquellos estudiantes con deseos específicos.</p>
                        <Boton texto='Talleres cortos' url='/talleres' />
                    </div>
                </div>

                <div className='sliderInicio__slider--slide2'>
                    <img src="/images/sliderInicio/sliderInicio3.webp" alt="Pastel" srcset="" className='sliderInicio__slider--slide--img2' />
                    <div className='sliderInicio__slider--slide2--logo'>
                        <img src="/images/branding/coquereLogoNegro.svg" alt="Logo" />
                    </div>
                    <div className='sliderInicio__slider--descripcion2'>
                        <p>Diplomados especializados con grupos reducidos para garantizar la calidad de la enseñanza.</p>
                        <Boton texto='Diplomados' url='/diplomados' />
                    </div>
                </div>
            </AutoplaySlider>
        </section>
    )
}

export default SliderInicio