import s from './card_journey.module.scss'

const CardJourney = ({ imageUrl, title, description }) => {
    return (
        <div className={s.card_body}>
            <img src={imageUrl} alt={title} />
            <div className={s.card_text}>
                <h2>{title}</h2>
                <p>{description}<span>Ver mais...</span></p>
            </div>
        </div>
    );
}

export default CardJourney