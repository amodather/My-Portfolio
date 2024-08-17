import image from "../Components/images/ART_5286-copy-copy.jpg"
import { motion, useInView} from "framer-motion";
import { useRef } from "react";
function About() {
    const ref = useRef(null);
    const inView = useInView(ref)
    const textVariants = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.2,
                staggerChildren: 0.5,
                delayChildren: 0.5
            }
        }
    }
    return (
        <div>
            <section id="About" className="about">
                <div className="w-[95%] mx-auto flex h-full gap-10 items-center justify-between z-5">
                    <img src={image} alt=""
                        className="lg:w-[400px] lg:h-[500px] md:w-[300px] md:h-[400px] rounded-full object-cover max-md:hidden"></img>
                    <div className="mt-[50px] px-10 lg:w-[70%] md:w-4/5">
                        <h2 className="stylefont md:text-[60px] text-[45px] mb-4 text-[#DFD0B8]">About</h2>
                        <motion.div variants={textVariants} initial="initial" animate={inView && "animate"} ref={ref}>
                            <p>Hi, I'm Abdelrahman, a Front-End Web developer who has just graduated from Computer and Systems Information at the Faculty of Engineering Ain-Shams University. I have acquired skills in computer fundamentals and focused on learning and understanding the main Front-end technologies. I have completed Udacity Front-End development Nano-degree Program where i learned about javascript, asynchronus javascript and using javascript with the DOM and applied this knowledge in two projects: Landing Page and weather journal app.</p>
                            <p>During the past few months, I have focused my coursework on: Learning and understanding of HTML5, CSS3, Javascript, ReactJs,  TailwindCSS, Redux, understanding of Git and how to use It in projects, and some other libraries. Using this knowledge I have done different projects including my graduation project which took almost 9 Months and is about booking Co-working spaces platform where I learned and applied several technologies. I am looking forward to applying this knowledge in real-life projects.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;