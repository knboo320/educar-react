import s from './landing-library.module.scss'
import peopleReadinIcon from '../../../../assets/people_reading_icon.png'
import bgDots from "../../../../assets/bg_dots.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

function LandingLibrary() {

    const documentIcon = <FontAwesomeIcon id={s.faFileLines} icon={faFileLines} />

    return (<>
        <main className={s.ll_body}>
            <div className={s.ll_left}>
                <img id={s.bgDots} src={bgDots} alt="" />
                <h1><i>Confira a nossa <br /> biblioteca virtual!</i></h1>
                <h2>Pegue PDF's de livros, além de solicitá-los na <br /> nossa biblioteca física.</h2>
                <div className={s.reading_icon}>
                    <a href="#"><button id={s.read_btn}><i>Começar a ler</i></button></a>
                    {documentIcon}
                </div>
                <p id={s.common_text}>Para solicitar um livro físico através do Educar, você <br /> pode entrar em contato com nosso bot feito com IA!</p>
            </div>
            <div className={s.ll_right}>
                <img id={s.bgDots} src={bgDots} alt="" />
                <div className={s.ll_card}>
                    <div className={s.ll_card_top}>
                        <div id={s.bg_sphere}></div>
                        <img src={peopleReadinIcon} alt="" />
                    </div>
                    <div className={s.ll_card_bottom}>
                        <h4>Biblioteca Virtual</h4>
                        <ul>
                            <li>Livros digitais</li>
                            <li>Mangás</li>
                            <li>E-books de estudo</li>
                            <li>Dicionário online</li>
                            <li>Revistas</li>
                            <li>Banco de questões</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        <div className={s.end_border}></div>
    </>);

}

export default LandingLibrary