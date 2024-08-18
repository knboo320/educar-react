import Header from "../../../header/Header";
import s from "./landing-educar.module.scss"
import icons from "../../../../assets/home_educar_icons.png"
import discord from "../../../../assets/discord_icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function LandingEducar() {

    const bookIcon = <FontAwesomeIcon icon={faBook} />

    return (<>
        <Header />
        <main>
            <div className={s.le_educar_left}>
                <div className={s.icons_container}>
                    <img src={icons} alt="Globo, Caderno e Notebook" />
                </div>
            </div>
            <div className={s.le_educar_right}>
                <div className={s.title_icon}>
                    {bookIcon}
                    <h1><i>EDUCAR</i></h1>
                </div>
                <h2>Site criado para o gerenciamento da <br /> <span id={s.red_text}>sua escola!</span></h2>
                <a href="#"><button>Entrar com meu CPF</button></a>
                <div className={s.discord_icon}>
                    <img src={discord} />
                    <h3>Entre em nosso servidor do Discord <br /> (disponível apenas para alunos)</h3>
                </div>
            </div>
        </main>
    </>);

}

export default LandingEducar