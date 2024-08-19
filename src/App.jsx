import './App.scss'
import LandingEducar from './components/pages/landing-page/landing-educar/LandingEducar.jsx'
import LandingGraph from './components/pages/landing-page/landing-graph/LandingGraph.jsx'
import LandingLibrary from './components/pages/landing-page/landing-library/LandingLibrary.jsx'
import LandingStudent from './components/pages/landing-page/landing_student/LandingStudent.jsx'

function App() {

  return (
    <>
      <LandingEducar />
      <LandingLibrary />
      <LandingGraph />
      <LandingStudent />
    </>
  )
}

export default App
