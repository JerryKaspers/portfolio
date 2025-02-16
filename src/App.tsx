import './App.css'
import Experiences from "./pages/experiences.tsx";
import UrlStack from "./components/urlStack/urlStack.tsx";
import Projects from "./components/projects/projects.tsx";
import {Grid, Grid2} from "@mui/material";
import TechStack from "./components/home/techStack.tsx";

function App() {

    return (
        <>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <h1>Hi! I'm Jerry Kaspers</h1>
                        <h3>A dev and geek at heart with experiences in different languages, frameworks, OS's and tools</h3>
                    </Grid>
                </Grid>
            <TechStack />
            <Projects />
            <UrlStack />
            <Experiences />
        </>
    )
}

export default App
