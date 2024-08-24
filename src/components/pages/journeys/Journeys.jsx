import Header from '../../header/Header.jsx'
import CardJourney from './card-journey/CardJourney.jsx';
import s from './journeys.module.scss'
import { Link } from 'react-router-dom';
import asDescobertas from '../../../assets/journeys/as_descobertas.png'
import exodus from '../../../assets/journeys/exodus.jpg'
import aRede from '../../../assets/journeys/a_rede.jpg'
import LuzCameraAcao from '../../../assets/journeys/luz_camera_acao.jpg'
import mexaSe from '../../../assets/journeys/mexa_se.png'
import viagensPitorescas from '../../../assets/journeys/viagens_pitorescas.jpg'

function Journeys() {

    return (<>
        <Header />
        <main className={s.journeys_body}>
            <div className={s.journeys_container}>
                <Link to={'/educar-react/jornadas/as_descobertas'} className={s.journey_url}>
                    <CardJourney
                        imageUrl={asDescobertas}
                        title='AS DESCOBERTAS'
                        description='Caraca... Passei! E agora, será que vou? Minha mãe diz que sim, meu pai acha melhor não. E eu? Bom, eu não sei! Já sei, vou pedir a opinião de alguns colegas... '
                    />
                </Link>
                <Link to={'/educar-react/jornadas/exodus'} className={s.journey_url}>
                    <CardJourney
                        imageUrl={exodus}
                        title='EXODUS'
                        description='Anos após uma guerra nuclear exterminar quase todas as formas de vida na Terra, você foi um dos selecionados para compor a equipe que irá explorar Marte... '
                    />
                </Link>
                <Link to={'/educar-react/jornadas/a_rede'} className={s.journey_url}>
                    <CardJourney
                        imageUrl={aRede}
                        title='A REDE'
                        description='Tudo começou há um tempo atrás e não era na ilha do Sol. Você provavelmente não irá entender este trocadilho, afinal, você surgiu junto com as redes sociais... '
                    />
                </Link>
            </div>
            <div className={s.journeys_container}>
                <Link to={'/educar-react/jornadas/luz_camera_acao'} className={s.journey_url}>
                    <CardJourney
                        imageUrl={LuzCameraAcao}
                        title='LUZ, CÂMERA, AÇÂO'
                        description='Como gosto de assistir filmes! Sou maluco por histórias fantásticas. Para mim é uma maneira de não pensar nos meus próprios problemas. Por outro lado... '
                    />
                </Link>
                <Link to={'/educar-react/jornadas/mexa_se'} className={s.journey_url}>
                    <CardJourney
                        imageUrl={mexaSe}
                        title='MEXA-SE'
                        description='As Joias do Infinito são 6 pedras cósmicas extraordinariamente poderosas presentes no Ensino Médio. Cada joia concede um poder específico ao seu portador... '
                    />
                </Link>
                <Link to={'/educar-react/jornadas/viagens_pitorescas_pelo_brasil'} className={s.journey_url}>
                    <CardJourney
                        imageUrl={viagensPitorescas}
                        title='VIAGENS PITORESCAS PELO BRASIL'
                        description='Tudo começou há um tempo atrás e não era na ilha do Sol. Você provavelmente não irá entender este trocadilho, afinal... '
                    />
                </Link>
            </div>
        </main>
    </>);

}

export default Journeys