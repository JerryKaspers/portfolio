import './App.css'
import Experiences from "./pages/experiences.tsx";
import UrlStack from "./components/urlStack/urlStack.tsx";
import Projects from "./components/projects/projects.tsx";

function App() {

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
                <a href=''>
                    <div className="mainCard">
                        Projects
                    </div>
                </a>
                <a href=''>
                    <div className="mainCard">
                        Experiences
                    </div>
                </a>
                <Projects />
                <UrlStack />
                <Experiences />
            </div>
        </>
    )
}

export default App
