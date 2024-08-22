import Header from '../../header/Header.jsx'
import s from './login.module.scss'
import disketteIcon from '../../../assets/diskette_icon.png'
import bgLogin from '../../../assets/bg_login.png'
import { Link } from 'react-router-dom'

function Login() {

    return (<>
        <Header showLoginButton={false}/>
        <main className={s.login_body}>
            <div className={s.login_left}>
                <img src={disketteIcon} id={s.diskette_icon} alt="" />
                <img src={bgLogin} id={s.bg_login} alt="" />
            </div>
            <div className={s.login_right}>
                <div className={s.l_r_container}>
                    <h1 id={s.l_r_title}>Faça seu login!</h1>
                    <h2 id={s.l_r_text}>Escreva suas informações abaixo para entrar em <br />sua conta.</h2>
                    <input type="text" name="usuario" id={s.login_input} placeholder='Usuário'/>
                    <input type="password" name="senha" id={s.login_input} placeholder='Senha'/>
                    <button type="submit" id={s.login_submit}><Link to={'/educar-react/'} id={s.lwhite}>Entrar</Link></button>
                </div>
            </div>
        </main>
    </>);

}

export default Login