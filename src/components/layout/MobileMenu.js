import { NavHashLink } from 'react-router-hash-link';


const MobileMenu = ({ toggleState }) => {

  function handleClick() {
    if (document.getElementById('mobileMenu').classList.contains('show')) {
      document.getElementById('mobileMenu').classList.toggle('show');
      toggleState();
    }
  }

  function scrollWithOffset(el) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  function handleClickNosotros() {

    document.getElementById('nosotros').classList.toggle('bgVerde')
    document.getElementById('nosotrosDesplegable').classList.toggle('showDesplegables')
    document.getElementById('nosotrosFlecha').classList.toggle('giroFlecha')

    document.getElementById('diplomados').classList.remove('bgVerde')
    document.getElementById('diplomadosDesplegable').classList.remove('showDesplegables')
    document.getElementById('diplomadosFlecha').classList.remove('giroFlecha')

    document.getElementById('talleres').classList.remove('bgVerde')
    document.getElementById('talleresDesplegable').classList.remove('showDesplegables')
    document.getElementById('talleresFlecha').classList.remove('giroFlecha')
  }

  function handleClickDiplomados() {
    document.getElementById('diplomados').classList.toggle('bgVerde')
    document.getElementById('diplomadosDesplegable').classList.toggle('showDesplegables')
    document.getElementById('diplomadosFlecha').classList.toggle('giroFlecha')

    document.getElementById('nosotros').classList.remove('bgVerde')
    document.getElementById('nosotrosDesplegable').classList.remove('showDesplegables')
    document.getElementById('nosotrosFlecha').classList.remove('giroFlecha')

    document.getElementById('talleres').classList.remove('bgVerde')
    document.getElementById('talleresDesplegable').classList.remove('showDesplegables')
    document.getElementById('talleresFlecha').classList.remove('giroFlecha')
  }

  function handleClickTalleres() {
    document.getElementById('talleres').classList.toggle('bgVerde')
    document.getElementById('talleresDesplegable').classList.toggle('showDesplegables')
    document.getElementById('talleresFlecha').classList.toggle('giroFlecha')

    document.getElementById('nosotros').classList.remove('bgVerde')
    document.getElementById('nosotrosDesplegable').classList.remove('showDesplegables')
    document.getElementById('nosotrosFlecha').classList.remove('giroFlecha')

    document.getElementById('diplomados').classList.remove('bgVerde')
    document.getElementById('diplomadosDesplegable').classList.remove('showDesplegables')
    document.getElementById('diplomadosFlecha').classList.remove('giroFlecha')
  }


  return (
    <div className="mobileMenu" id="mobileMenu">
      <div className="menu-links">
        <NavHashLink to="/#" onClick={handleClick} className='menu-links__links'><h3>Inicio</h3></NavHashLink>
        <div className='menu-links__desplegables' id="nosotros">
          <NavHashLink to="/nosotros#" activeClassName="active" onClick={handleClick} className='menu-links__links'><h3>Nosotros</h3></NavHashLink>
          <div className='menu-links__desplegables--boton' onClick={handleClickNosotros} >
            <img src="/images/icons/angle-down-light.svg" alt="" id='nosotrosFlecha' />
          </div>
        </div>
        <div className='menu-links__desplegables--desplegados' id='nosotrosDesplegable'>
          <NavHashLink to="/nosotros#historiaCoquere" scroll={el => scrollWithOffset(el)} activeClassName="active" onClick={handleClick}><h3>Nuestra historia</h3></NavHashLink>
          <NavHashLink to="/nosotros#instalaciones" scroll={el => scrollWithOffset(el)} activeClassName="active" onClick={handleClick}> <h3>Instalaciones</h3></NavHashLink>
          <NavHashLink to="/nosotros#rentaNuestrasInstalaciones" scroll={el => scrollWithOffset(el)} activeClassName="active" onClick={handleClick}><h3>Renta Nuestras Instalaciones</h3></NavHashLink>
        </div>
        <div className='menu-links__desplegables' id='diplomados'>
          <NavHashLink to="/diplomados#" activeClassName="active" onClick={handleClick} className='menu-links__links'><h3>Diplomados</h3></NavHashLink>
          <div className='menu-links__desplegables--boton' onClick={handleClickDiplomados}  >
            <img src="/images/icons/angle-down-light.svg" alt="" id='diplomadosFlecha' />
          </div>
        </div>
        <div className='menu-links__desplegables--desplegados' id='diplomadosDesplegable'>
          <NavHashLink to="/diplomados/reposteria-basica" activeClassName="active" onClick={handleClick}><h3>Básico de repostería</h3></NavHashLink>
          <NavHashLink to="/diplomados/reposteria-nivel-2" activeClassName="active" onClick={handleClick}><h3>Nivel 2 de repostería</h3></NavHashLink>
          <NavHashLink to="/diplomados/reposteria-intensiva" activeClassName="active" onClick={handleClick}><h3>Intensivo de repostería</h3></NavHashLink>
          <NavHashLink to="/diplomados/panaderia" onClick={handleClick}><h3>Panadería</h3></NavHashLink>
          <NavHashLink to="/diplomados/gelatinas" activeClassName="active" onClick={handleClick}><h3>Gelatinas</h3></NavHashLink>
          <NavHashLink to="/diplomados/cocteleria" onClick={handleClick}><h3>Coctelería</h3></NavHashLink>
          <NavHashLink to="/diplomados/parrillada" activeClassName="active" onClick={handleClick}><h3>Parrillada</h3></NavHashLink>
        </div>
        <div className='menu-links__desplegables' id='talleres'>
          <NavHashLink to="/talleres#" activeClassName="active" onClick={handleClick} className='menu-links__links'><h3>Talleres Cortos</h3></NavHashLink>
          <div className='menu-links__desplegables--boton' onClick={handleClickTalleres} >
            <img src="/images/icons/angle-down-light.svg" alt="" id='talleresFlecha' />
          </div>
        </div>
        <div className='menu-links__desplegables--desplegados' id='talleresDesplegable'>
          <NavHashLink to="/talleres#reposteria" scroll={el => scrollWithOffset(el)} activeClassName="active" onClick={handleClick}><h3>Repostería</h3></NavHashLink>
          <NavHashLink to="/talleres#cocinaSalada" scroll={el => scrollWithOffset(el)} activeClassName="active" onClick={handleClick}><h3>Cocina salada</h3></NavHashLink>
        </div>
        <NavHashLink to="/empresarial#" activeClassName="active" onClick={handleClick} className='menu-links__links'><h3>Empresarial</h3></NavHashLink>
        <NavHashLink to="/contacto#" activeClassName="active" onClick={handleClick} className='menu-links__links'><h3>Contacto</h3></NavHashLink>
      </div>
    </div>
  )
}

export default MobileMenu