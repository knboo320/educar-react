import './App.scss'
import JourneyDescobertas from './components/pages/journeys/journey-descobertas/JourneyDescobertas.jsx';
import JourneyExodus from './components/pages/journeys/journey-exodus/JourneyExodus.jsx';
import JourneyARede from './components/pages/journeys/journey-a-rede/JourneyARede.jsx';
import JourneyLCA from './components/pages/journeys/journey-lca/JourneyLCA.jsx';
import JourneyMexaSe from './components/pages/journeys/journey-mexa-se/JourneyMexaSe.jsx';
import JourneyViagens from './components/pages/journeys/journey-viagens/JourneyViagens.jsx';
import Journeys from './components/pages/journeys/Journeys.jsx';
import LandingPage from './components/pages/landing-page/LandingPage.jsx'
import Login from './components/pages/login/Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/educar-react/' element={<LandingPage />} />
        <Route path='/educar-react/login' element={<Login />} />
        <Route path='/educar-react/jornadas' element={<Journeys />} />
        <Route path='/educar-react/jornadas/as_descobertas' element={<JourneyDescobertas />} />
        <Route path='/educar-react/jornadas/exodus' element={<JourneyExodus />} />
        <Route path='/educar-react/jornadas/a_rede' element={<JourneyARede />} />
        <Route path='/educar-react/jornadas/luz_camera_acao' element={<JourneyLCA />} />
        <Route path='/educar-react/jornadas/mexa_se' element={<JourneyMexaSe />} />
        <Route path='/educar-react/jornadas/viagens_pitorescas_pelo_brasil' element={<JourneyViagens />} />
      </Routes>
    </Router>
  );
}

export default App
