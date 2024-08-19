import s from './landing-graph.module.scss'
import landingGraphIcon from '../../../../assets/landing_graph_icon.png'
import agendaIcon from '../../../../assets/agenda_icon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

function LandingGraph() {

    const calendarIcon = <FontAwesomeIcon id={s.faCalendarCheck} icon={faCalendarCheck} />

    return (
        <main className={s.lg_body}>
            <div className={s.lg_left}>
                <div className={s.lg_left_texts}>
                    <img src={landingGraphIcon} alt="" />
                    <h1><i>Confira o gráfico do aluno!</i></h1>
                    <h2>Através do Educar, você consegue conferir suas <br />  atividades entregues, suas faltas e o resultado <br /> de suas autoavaliações.</h2>
                </div>
            </div>
            <div className={s.lg_right}>
                <div className={s.lg_right_texts}>
                    <p id={s.lg_r_t_left}>Suas atividades ficarão presentes em sua agenda! Não se esqueça de terminar suas tarefas. Se organize e terá bons resultados.</p>
                    <p id={s.lg_r_t_right}>Agenda <br /> {calendarIcon} das <br /> tarefas</p>
                </div>
                <img src={agendaIcon} alt="" />
            </div>
        </main>
    );

}

export default LandingGraph