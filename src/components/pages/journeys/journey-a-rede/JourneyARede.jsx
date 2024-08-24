import Header from "../../../header/Header";
import CardExperience from "../card-experience/CardExperience";
import s from "./journey-a-rede.module.scss"
import xp1 from "../../../../assets/journeys/descobertas_xp1.png"
import xp2 from "../../../../assets/journeys/descobertas_xp2.png"

function JourneyARede() {

    return (<>
        <Header />
        <main className={s.j_ar_body}>
            <h1>A REDE</h1>
            <div className={s.j_ar_container}>
                <div className={s.j_ar_description}>
                    <p>Tudo começou há um tempo atrás e não era na ilha do Sol. Você provavelmente não irá entender este trocadilho, afinal, você surgiu junto com as redes sociais, mas realmente tudo começou há um tempo atrás. "Bora" viajar no tempo?
                        A primeira rede social a estar hypada no Brasil foi o Orkut, isso foi no ano de 2004. O site foi o ponto de partida para os brasileiros se descobrirem seres aficionados por redes sociais. Não é à toa que o país mais popular do Orkut era o Brasil, contando com mais de 30 milhões de perfis em seu auge.
                        Depois disso, vieram Facebook, Instagram, Linkedin e várias outras.
                        A partir de então, criou-se um metaverso, pessoas passaram a ver o que gostariam de realmente ver, transmitiram a imagem que gostariam que tivessem. Como diz o pai do facebook "A questão não é “O que queremos saber sobre as pessoas?”, é, “O que as pessoas querem nos contar sobre elas mesmas?"
                        Com esse universo paralelo surgiram novas palavras, gírias, hábitos e profissões: "hypado", "stalkear", "hater", "manda um direct","digital influencer."
                        Pois bem, agora, vamos trazer este mundo para a educação. Será que você consegue ser um Influencer?</p>
                </div>
                <h2>EXPERIÊNCIAS:</h2>
                <div className={s.j_ar_experiences}>
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

export default JourneyARede