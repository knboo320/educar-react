import Header from "../../../header/Header";
import CardExperience from "../card-experience/CardExperience";
import s from "./journey-descobertas.module.scss"
import xp1 from "../../../../assets/journeys/descobertas_xp1.png"
import xp2 from "../../../../assets/journeys/descobertas_xp2.png"

function JourneyDescobertas() {

    return (<>
        <Header />
        <main className={s.j_d_body}>
            <h1>AS DESCOBERTAS</h1>
            <div className={s.j_d_container}>
                <div className={s.j_d_description}>
                    <p>Caraca... Passei! E agora, será que vou? Minha mãe diz que sim, meu pai acha melhor não. E eu? Bom, eu não sei! Já sei, vou pedir a opinião de alguns colegas que já estão lá.
                        <br /><br />
                    "... descobrimos coisas que eu jamais saberia descrever..."<br />
                    "...vimos coisas incríveis e demos muitas risadas, além disso, aprimoramos conhecimentos antigos e tivemos nossa curiosidade aguçada..."<br />
                    "Sua escola me fez refletir sobre como eu sou e como os meus conhecimentos me ajudam - e ajudarão - no futuro..."<br />
                    "Cada momento que passamos aqui me fez perceber o quanto é importante pensarmos em nós e valorizar cada pessoa que passa em nossa vida e faz parte de nossa história..."<br />
                    "Desde a prova seletiva, as descobertas foram intensas e emocionantes..."<br />
                    "A metodologia usada para aprendermos é uma descoberta. Esse modo fora do convencional, do comum eu particularmente gostei muito".</p>
                </div>
                <h2>EXPERIÊNCIAS:</h2>
                <div className={s.j_d_experiences}>
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

export default JourneyDescobertas