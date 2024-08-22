import s from './header.module.scss'
import logo from '../../assets/educar_logo.png'
import { Link } from 'react-router-dom';

function Header({ showLoginButton }) {

    return(
        <header>
            <div className='header-start'>
                <Link to={'/educar-react/'}><img src={logo} id={s.educar_logo}/></Link>
            </div>
            <div className={s.header_center}>
                <a href="#" id={s.routing_url}><i>Professores</i></a>
                <a href="#" id={s.routing_url}><i>Perfil do Aluno</i></a>
                <a href="#" id={s.routing_url}><i>Agenda de Tarefas</i></a>
                <a href="#" id={s.routing_url}><i>Biblioteca Virtual</i></a>
                <a href="#" id={s.routing_url}><i>Fórum</i></a>
            </div>
            <div className={s.header_end}>
            {showLoginButton && (
                    <Link to={'/educar-react/login'} id={s.lpurple} className={s.login_url}><i>Entrar</i></Link>
                )}
            </div>
        </header>
    );

}

export default Header