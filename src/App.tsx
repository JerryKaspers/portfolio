import './App.css'
import {UserIcon} from "@heroicons/react/24/outline";

function App() {

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
                <tr>
                    <td colSpan={3}>Here you can find my LinkedIn and GitHub links</td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href={"https://www.linkedin.com/in/jerry-kaspers-49013814b"} target={"_blank"}>LinkedIn</a></td>
                    <td><a href={"https://github.com/JerryKaspers"} target={"_blank"}>github</a></td>
                </tr>
            </table>

            <p>I also encourage you to take a look at my experiences and the about me section below</p>
        </div>
    </>
  )
}

export default App
