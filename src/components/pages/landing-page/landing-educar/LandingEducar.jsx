import Header from "../../../header/Header";
import s from "./landing-educar.module.scss"
import icons from "../../../../assets/landing_educar_icons.png"
import discord from "../../../../assets/discord_icon.png"
import bgDots from "../../../../assets/bg_dots.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function LandingEducar() {

    const bookIcon = <FontAwesomeIcon id={s.faBook} icon={faBook} />

    return (<>
        <Header showLoginButton={true}/>
        <main className={s.le_body}>
            <div className={s.le_left}>
                <div className={s.icons_container}>
                    <img src={icons} alt="Globo, Caderno e Notebook" />
                </div>
            </div>
            <div className={s.le_right}>
                <div className={s.title_icon}>
                    {bookIcon}
                    <h1><i>EDUCAR</i></h1>
                </div>
                <h2>Site criado para o gerenciamento da <br /> <span id={s.red_text}>sua escola!</span></h2>
                <Link to={'/educar-react/login'} id={s.lwhite}><button className={s.login_btn}><b>Entrar com meu CPF</b></button></Link>
                <div className={s.discord_icon}>
                    <img src={discord} />
                    <h3>Entre em nosso <span id={s.purple_text}>servidor do Discord</span> <br /> (disponível apenas para alunos)</h3>
                </div>
            </div>
            <div className={s.le_end}>
                <img src={bgDots} alt="" />
            </div>
        </main>
        <div className={s.end_border}></div>
    </>);

}

export default LandingEducar