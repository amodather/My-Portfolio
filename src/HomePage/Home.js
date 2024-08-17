import image from "../Components/images/portfolio.png"
import scroll from "../Components/images/scroll.png"
import { Github, Linkedin, EnvelopeFill} from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
function Home() {
    const textVariants ={
        initial : {
            opacity: 0,
            x: -500
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.07, delayChildren: 0.2
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 3,
                repeat: Infinity
            }
        }
    }
    const imageVariants = {
        initial : {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
            }
        }
    }
    return (
        <section className="bg-gradient-to-r from-[#3C5B6F] to-[#153448]" id="Home">
            <Navbar />
            <div className="w-[90%] mx-auto md:mt-[120px] lg:mt-[80px] mt-[30px] flex flex-col-reverse md:items-center xl:justify-around md:justify-between md:flex-row gap-10">
                <motion.div variants={textVariants} initial="initial" animate="animate" clas>
                    <h2 className="stylefont lg:text-[40px] text-[30px]">Welcome</h2>
                    <p className="stylefont lg:text-[60px]  md:text-[50px] text-[40px] leading-tight text-[#DFD0B8] my-2">Abdelrahman<br></br>Modather</p>
                    <p className="text-2xl">Front-end Developer</p>
                    <div className="mt-4 flex items-center gap-5 text-2xl">
                        <Link to="http://www.linkedin.com/in/abdelrahman-modather-3b06b1238" className="cursor-pointer hover:text-[#DFD0B8] duration-100" ><Linkedin /></Link>
                        <Link to="https://github.com/amodather" className="cursor-pointer hover:text-[#DFD0B8] duration-100"><Github /></Link>
                        <Link to="mailto:abdo.modather10@gmail.com" className="cursor-pointer hover:text-[#DFD0B8] duration-100"><EnvelopeFill /></Link>
                    </div>
                    <motion.img src={scroll} className="mt-6 w-[35px]" 
                    alt="scroll" initial={{y:0, opacity:1}} animate={textVariants.scrollButton}></motion.img>
                </motion.div>
                <motion.img variants={imageVariants} src={image} alt="" initial="initial" animate="animate"
                className="lg:w-[500px] lg:h-[500px] md:w-[400px] w-full h-[300px] object-contain"></motion.img>
            </div>
        </section>
    )
}

export default Home;