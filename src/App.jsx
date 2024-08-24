import './App.scss'
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
      </Routes>
    </Router>
  );
}

export default App
