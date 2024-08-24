import Header from "../../../header/Header";
import CardExperience from "../card-experience/CardExperience";
import s from "./journey-lca.module.scss"
import xp1 from "../../../../assets/journeys/descobertas_xp1.png"
import xp2 from "../../../../assets/journeys/descobertas_xp2.png"

function JourneyLCA() {

    return (<>
        <Header />
        <main className={s.j_lca_body}>
            <h1>LUZ, CÂMERA, AÇÃO</h1>
            <div className={s.j_lca_container}>
                <div className={s.j_lca_description}>
                    <p>Como gosto de assistir filmes! Sou maluco por histórias fantásticas. Para mim é uma maneira de não pensar nos meus próprios problemas. Por outro lado, consigo conhecer sobre outros países, vivo dramas familiares que não são meus, fico sabendo de coisas da história, tenho acesso a diferentes opiniões sobre assuntos que nem sabia que existiam. Estou vendo aqui um festival de curtas. Acho que vou participar. Pronto! Me inscrevi. Agora tenho que aprender um pouco sobre o cinema para ter chances de concorrer a prêmios!</p>
                </div>
                <h2>EXPERIÊNCIAS:</h2>
                <div className={s.j_lca_experiences}>
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

export default JourneyLCA