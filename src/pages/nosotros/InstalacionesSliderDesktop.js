import AwesomeSlider from 'react-awesome-slider';

const InstalacionesSliderDesktop = () => {
    return (
        <AwesomeSlider
            bullets={false}
            className='instalaciones__slider'
        >
            <div className='instalaciones__slider--contenedor'>
                <img src="/images/instalaciones/instalaciones1.webp" alt="" srcset="" />

                <img src="/images/instalaciones/instalaciones2.webp" alt="" />

                <img src="/images/instalaciones/instalaciones3.webp" alt="" />
            </div>
            <div className='instalaciones__slider--contenedor'>
                <img src="/images/instalaciones/instalaciones4.webp" alt="" />

                <img src="/images/instalaciones/instalaciones5.webp" alt="" />

                <img src="/images/instalaciones/instalaciones6.webp" alt="" />
            </div>
        </AwesomeSlider>
    )
}

export default InstalacionesSliderDesktop
