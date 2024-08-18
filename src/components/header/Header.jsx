import s from './header.module.scss'
import logo from '../../assets/educar_logo.png'

function Header() {

    return(
        <header>
            <div className='header-start'>
                <img src={logo}/>
            </div>
            <div className={s.header_center}>
                <a href="#" id={s.routing_url}><i>Professores</i></a>
                <a href="#" id={s.routing_url}><i>Perfil do Aluno</i></a>
                <a href="#" id={s.routing_url}><i>Agenda de Tarefas</i></a>
                <a href="#" id={s.routing_url}><i>Biblioteca Virtual</i></a>
                <a href="#" id={s.routing_url}><i>Fórum</i></a>
            </div>
            <div className={s.header_end}>
                <a href="#" id={s.login_url}><i>Entrar</i></a>
            </div>
        </header>
    );

}

export default Header