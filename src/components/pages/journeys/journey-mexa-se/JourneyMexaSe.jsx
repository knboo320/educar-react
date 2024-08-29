import Header from "../../../header/Header";
import CardExperience from "../card-experience/CardExperience";
import s from "./journey-mesa-xe.module.scss"
import xp1 from "../../../../assets/journeys/mexa_xp1.png"
import xp2 from "../../../../assets/journeys/mexa_xp2.png"

function JourneyMexaSe() {

    return (<>
        <Header />
        <main className={s.j_m_body}>
            <h1>MEXA-SE</h1>
            <div className={s.j_m_container}>
                <div className={s.j_m_description}>
                    <p>As Joias do Infinito são 6 pedras cósmicas extraordinariamente poderosas presentes no Ensino Médio. Cada joia concede um poder específico ao seu portador no domínio de um aspecto do Universo: Poder (área de CN), Tempo (subproduto), Mente (área de Linguagem), Espaço (área da Matemática), Realidade (área de Humanas), Alma (socioemocionais)
                        Você receberá uma manopla e então, precisará juntar todas as joias do Infinito. Para isso, precisará vencer os 6 desafios.
                        Se conseguir reunir todas as Joias do Infinito, terá o passaporte da caixa Werden que contém um item essencial para te apoiar nos estudos.</p>
                </div>
                <h2>EXPERIÊNCIAS:</h2>
                <div className={s.j_m_experiences}>
                    <CardExperience
                        imageUrl={xp1}
                        title="Reflita"
                    />
                    <CardExperience
                        imageUrl={xp2}
                        title="Prepare-se"
                    />
                </div>
            </div>
        </main>
    </>);

}

export default JourneyMexaSe