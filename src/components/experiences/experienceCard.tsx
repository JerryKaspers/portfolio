import './experienceCard.css';
function ExperienceCard(props) {
    return (
            <div className={'experienceCard'}>
                <b>Company: {props.company}</b>
                <br />
                <i>Tech stack: {props.stack}</i>
                <p>{props.shortStory}</p>
            </div>
    )
}

export default ExperienceCard;