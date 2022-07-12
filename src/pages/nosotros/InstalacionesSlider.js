import AwesomeSlider from 'react-awesome-slider';

const InstalacionesSlider = () => {
    return (
        <AwesomeSlider
            bullets={false}
            className='instalaciones__slider'
        >
            <div>
                <img src="/images/instalaciones/instalaciones1.webp" alt="" srcset="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones2.webp" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones3.webp" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones4.webp" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones5.webp" alt="" />
            </div>
            <div>
                <img src="/images/instalaciones/instalaciones6.webp" alt="" />
            </div>
        </AwesomeSlider>
    )
}

export default InstalacionesSlider

