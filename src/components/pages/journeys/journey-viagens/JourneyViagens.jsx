import Header from "../../../header/Header";
import CardExperience from "../card-experience/CardExperience";
import s from "./journey-viagens.module.scss"
import xp1 from "../../../../assets/journeys/descobertas_xp1.png"
import xp2 from "../../../../assets/journeys/descobertas_xp2.png"

function JourneyViagens() {

    return (<>
        <Header />
        <main className={s.j_v_body}>
            <h1>VIAGENS PITORESCAS PELO BRASIL</h1>
            <div className={s.j_v_container}>
                <div className={s.j_v_description}>
                    <p>Estudar é entender-se cidadão do mundo, sem se esquecer de valorizar o seu próprio país. Nesta jornada vamos olhar com mais carinho para o Brasil, partindo da imagem que os estrangeiros possuem do país. Em seguida, viajando pelas regiões, descobriremos que “o país do futebol” não se resume a samba, praia e mulatas, pois há uma diversidade cultural imensa, espalhada do Oiapoque ao Chuí, que merece ser conhecida e divulgada. Ao término desta pitoresca viagem, vocês participarão do CIRCUITO BRASILIS, a fim de testar os seus conhecimentos sobre o Brasil.
                    </p>
                </div>
                <h2>EXPERIÊNCIAS:</h2>
                <div className={s.j_v_experiences}>
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

export default JourneyViagens