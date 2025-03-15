import MaskText from "../HomePage/MaskText";
import Home from "../HomePage/Home";
import Parallax from "../HomePage/Parallax";
import Projects from "../HomePage/Projects";
import About from "../HomePage/About";
import Footer from "../HomePage/Footer";
export default function Main(){
    return(<div>
        <Home />
        <MaskText />
        <About />
        <Parallax />
        <Projects/>
        <Footer />
    </div>)
}