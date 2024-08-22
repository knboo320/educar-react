import Header from '../../header/Header.jsx'
import LandingEducar from './landing-educar/LandingEducar.jsx'
import LandingLibrary from './landing-library/LandingLibrary.jsx'
import LandingGraph from './landing-graph/LandingGraph.jsx'
import LandingStudent from './landing_student/LandingStudent.jsx'

function LandingPage() {

    return(<>
        <LandingEducar />
        <LandingLibrary />
        <LandingGraph />
        <LandingStudent />
    </>);

}

export default LandingPage