import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WappFloat from './components/layout/WappFloat';

//Pages
import Contacto from './pages/Contacto';
import Diplomados from './pages/Diplomados';
import Empresarial from './pages/Empresarial';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Talleres from './pages/Talleres';


//Style
import "./styles/main.scss"
import ReposteriaBasica from './pages/diplomados/detalles/ReposteriaBasica';
import ReposteriaNivel2 from './pages/diplomados/detalles/ReposteriaNivel2';
import ReposteriaIntensiva from './pages/diplomados/detalles/ReposteriaIntensiva';
import Panaderia from './pages/diplomados/detalles/Panaderia';
import Gelatinas from './pages/diplomados/detalles/Gelatinas';
import Cocteleria from './pages/diplomados/detalles/Cocteleria';
import Parrillada from './pages/diplomados/detalles/Parrillada';
import FooterTablet from './components/layout/FooterTablet';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/diplomados" element={<Diplomados />} />

          <Route path="/diplomados/reposteria-basica" element={<ReposteriaBasica />} />
          <Route path="/diplomados/reposteria-nivel-2" element={<ReposteriaNivel2 />} />
          <Route path="/diplomados/reposteria-intensiva" element={<ReposteriaIntensiva />} />
          <Route path="/diplomados/panaderia" element={<Panaderia />} />
          <Route path="/diplomados/gelatinas" element={<Gelatinas />} />
          <Route path="/diplomados/cocteleria" element={<Cocteleria />} />
          <Route path="/diplomados/Parrillada" element={<Parrillada />} />

          <Route path="/empresarial" element={<Empresarial />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/talleres" element={<Talleres />} />

        </Routes>
        
        <WappFloat />
        {window.innerWidth < 768 ? <Footer /> : <FooterTablet />}
      </BrowserRouter>
    </div>
  );
}

export default App;
