import About from "../HomePage/About";
import Home from "../HomePage/Home";
import Parallax from "../HomePage/Parallax";
import Projects from "../HomePage/Projects";
export default function Main(){
    return(<div>
        <Home />
        <About/>
        <Parallax />
        <Projects/>
    </div>)
}