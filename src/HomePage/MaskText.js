import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const texts = ["Crafting seamless, interactive", "and beautiful web experiences", "I turn ideas into responsive", "high-performance websites"]
function TextAnimation({ text, inView, delay }) {
    const textVariants = {
        outView: {
            y: 50
        },
        inView: {
            y: 0,
            transition: {
                duration: 1,
                delay: 0.1 + 0.1 * delay
            }
        }
    }
    return <div className="w-full md:h-[50px] h-[25px] overflow-hidden">
        <motion.p variants={textVariants} initial="initial" animate={inView ? "inView" : "outView"}>{text}</motion.p>
    </div>
}
function MaskText() {
    const ref = useRef(null);
    const inView = useInView(ref);
    return (
        <div>
            <div className="h-[200vh] w-full"></div>
            <section className="about">
                <div className="relative max-lg:h-[800px]  h-screen w-full flex items-center justify-center h-full bg-[#DFD0B8]">
                    <div className="w-[95%] mt-[-50px] mx-auto text-center md:text-[40px] text-[25px] uppercase widefont" ref={ref}>
                        {texts.map((text, index) => {
                            return <TextAnimation text={text} inView={inView} delay={index} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MaskText;