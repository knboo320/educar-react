import s from './card-experience.module.scss'

const CardExperience = ({ imageUrl, title }) => {
    return(
        <div className={s.card_e_body}>
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
        </div>
    );
}

export default CardExperience