import './App.scss'
import LandingPage from './components/pages/landing-page/LandingPage.jsx'
import Login from './components/pages/login/Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/educar-react/' element={<LandingPage />} />
        <Route path='/educar-react/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App
