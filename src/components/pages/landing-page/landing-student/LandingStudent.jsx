import s from './landing-student.module.scss'
import studentExample from '../../../../assets/student_example.jpg'

function LandingStudent() {

    return(
        <main className={s.ls_body}>
            <img src={studentExample} alt="" />
            <h2>"Sua plataforma me deu uma oportunidade incrível de formar um novo hábito de aprender idiomas regularmente e, é claro, melhorar minhas habilidades linguísticas. Recebi uma carta de parabéns da equipe."</h2>
        </main>
    );

}

export default LandingStudent