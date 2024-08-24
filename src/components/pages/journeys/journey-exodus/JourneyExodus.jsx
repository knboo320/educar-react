import Header from "../../../header/Header";
import CardExperience from "../card-experience/CardExperience";
import s from "./journey-exodus.module.scss"
import xp1 from "../../../../assets/journeys/descobertas_xp1.png"
import xp2 from "../../../../assets/journeys/descobertas_xp2.png"

function JourneyExodus() {

    return (<>
        <Header />
        <main className={s.j_ex_body}>
            <h1>EXODUS</h1>
            <div className={s.j_ex_container}>
                <div className={s.j_ex_description}>
                    <p>Anos após uma guerra nuclear exterminar quase todas as formas de vida na Terra, você foi um dos selecionados pela Space X para compor a equipe que irá explorar Marte, afinal, os recursos do nosso planeta estão ficando escassos.
                    Junto à sua equipe, você deverá garantir a sobrevivência do maior número de humanos possível, assegurando a variedade das tribos. Sendo assim, é necessário que você considere a origem da organização humana do planeta Terra, sua organização social e vivencie a cultura de várias tribos diferentes, apresentando um novo modelo de tribo que deverá ser levado para o Planeta Vermelho, através de um fanzine.</p>
                </div>
                <h2>EXPERIÊNCIAS:</h2>
                <div className={s.j_ex_experiences}>
                    <CardExperience
                        imageUrl={xp1}
                        title="Eu e o mundo..."
                    />
                    <CardExperience
                        imageUrl={xp2}
                        title="Meu futuro é agora!"
                    />
                </div>
            </div>
        </main>
    </>);

}

export default JourneyExodus