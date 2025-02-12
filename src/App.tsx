import './App.css'
import {UserIcon} from "@heroicons/react/24/outline";
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
                {/*<UserIcon className="h-2 w-2 text-blue" />*/}
                <h1>Hi! I'm Jerry Kaspers</h1>
                <h2>A developer and tech geek by heart.</h2>
                <p>I welcome you at my portfolio website.</p>
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
