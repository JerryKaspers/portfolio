import './App.css'
import ExperienceCard from "./components/experiences/experienceCard.tsx";

function App() {

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
            <div>
                <h1>Hi! I'm Jerry Kaspers</h1>
                <h2>
                    A developer and geek by heart with experiences in the following, but not limited to:<br />
                    <i className="devicon devicon-apple-original"/>
                    <i className="devicon-azure-plain"/>
                    <i className="devicon-bootstrap-plain" />
                    <i className="devicon-composer-plain" />
                    <i className="devicon-debian-plain" />
                    <i className="devicon-docker-plain" />
                    <i className="devicon-git-plain" />
                    <i className="devicon-jetbrains-plain" />
                    <i className="devicon-mongodb-plain" />
                    <i className="devicon-mysql-plain" />
                    <i className="devicon-npm-original-wordmark" />
                    <i className="devicon-php-plain" />
                    <i className="devicon-phpstorm-plain" />
                    <i className="devicon-postgresql-plain" />
                    <i className="devicon-react-plain" />
                    <i className="devicon-redux-plain" />
                    <i className="devicon-ubuntu-plain" />
                    <i className="devicon-vite-plain" />
                    <i className="devicon-yii-plain" />
                    <i className="devicon-zend-plain" />
                </h2>
            </div>
            <div>
                <table align={'center'}>
                    <tbody>
                        <tr>
                            <td colSpan={3}>Here you can find my LinkedIn and GitHub links</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a href={"https://www.linkedin.com/in/jerry-kaspers-49013814b"}
                                   target={"_blank"}>LinkedIn</a></td>
                            <td><a href={"https://github.com/JerryKaspers"} target={"_blank"}>github</a></td>
                        </tr>
                    </tbody>
                </table>

                <p>I also encourage you to take a look at my experiences and the about me section below</p>
                {experiences.map(function (experience) {
                    return (
                        <ExperienceCard company={experience.company} stack={experience.stack} shortStory={experience.shortStory}/>
                    )
                })}
            </div>
        </>
    )
}

export default App
