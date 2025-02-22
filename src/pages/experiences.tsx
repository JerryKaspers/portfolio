import ExperienceCard from "../components/experiences/experienceCard.tsx";

function Experiences() {
    const experiences = [
        {
            company: 'VBOptimum',
            stack: 'PHP, Slim Framework, ReactJS, Ubuntu',
            shortStory: 'I worked as a fullstack engineer working on a portal that showed information about climate systems of buildings'
        },
        {
            company: 'FonQ',
            stack: 'PHP, Yii2, Bootstrap, Docker, Windows with WSL',
            shortStory: 'Job consisted of working on the processes that take place after an order has been placed on a webshop.'
        },
        {
            company: 'Dirict / Notarisdossier',
            stack: 'PHP, Zend Framework 1 & 2, Bootstrap, Docker, MacOS',
            shortStory: 'Worked as a 1st and 2nd line support, sysAdmin and full-stack developer'
        },
    ]

    return (
        <>
            <h3>This part will contain my past experiences</h3>
            {/*<p>I also encourage you to take a look at my experiences and the about me section below</p>*/}
            {experiences.map(function (experience) {
                return (
                    <ExperienceCard company={experience.company} stack={experience.stack} shortStory={experience.shortStory}/>
                )
            })}
        </>
    )
}

export default Experiences;