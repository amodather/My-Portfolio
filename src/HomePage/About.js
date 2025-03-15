import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import image from "../Components/images/profile.jpeg"

const paragraph = `Hello, I'm Abdelrahman, a passionate Front-End Web Developer with a strong foundation in modern web technologies. I graduated from the Computer and Systems Information program at the Faculty of Engineering, Ain-Shams University. My journey in web development has been driven by a commitment to creating seamless, responsive, and user-friendly experiences. I have honed my expertise in HTML5, CSS3, JavaScript, TypeScript, TailwindCSS, ReactJS, NextJS, along with a solid understanding of Git for version control and team collaboration. Through the Udacity Front-End Development Nano-degree Program, I gained hands-on experience in asynchronous JavaScript, DOM manipulation, and API integration, applying this knowledge to build real-world projects. I have worked on diverse projects, including my 9-month-long graduation project, a co-working space booking platform. This experience deepened my understanding of scalable architectures, UI/UX best practices, and front-end optimization techniques. I focus on crafting responsive and user-friendly applications and I am passionate about using my analytical skills to solve complex problems and continually enhance my technical expertise.
`
const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.3, 1])
    return (
        <span>
            <motion.span style={{ opacity: opacity }}>{children}</motion.span>
        </span>
    )

}

function About() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["0.5 end", "0.5 start"]
    })
    const words = paragraph.split(" ");
    return <section id="About">
        <div className="relative h-[300vh]"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
            <div className="relative -top-[100vh] h-[300vh]">
                <div className="relative top-0 h-[500vh] w-full bg-white text-center" ref={container}>
                    <div className="sticky h-[100vh] top-0 flex items-center justify-between lg:w-[90%] max-lg:px-4 mx-auto">
                        <img src={image} className="max-md:hidden h-full w-[30%] h-[85%] object-cover" alt="profile"></img>
                        <div className="px-6">
                            <h2 className="widefont text-[60px] text-[#DFD0B8]">About</h2>
                            <div className="text-black stylefont xl:text-[13px] lg:text-[12px] text-[10px] flex flex-wrap gap-1 md:px-4 justify-center">
                                {words.map((word, i) => {
                                    const start = i / words.length
                                    const end = start + (1 / words.length)
                                    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


export default About;