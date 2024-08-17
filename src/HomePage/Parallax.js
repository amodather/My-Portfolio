import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import image1 from "../Components/images/sea.jpg"
import image2 from "../Components/images/React.png"
import image3 from "../Components/images/Tailwind.jpg"

const Phrase = ({ src, color, text }) => {
    return (
        <div className={`md:px-5 px-3 flex gap-5 items-center text-${color}`}>
            <p className='md:text-[7.5vw] text-[10vw] stylefont'>{text}</p>
            <span className="relative md:h-[7.5vw] h-[10vw] aspect-[4/2] rounded-full overflow-hidden">
                <img className="object-cover" src={src} alt="" />
            </span>
        </div>
    )

}
function Parallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })
    const translate1 = useTransform(scrollYProgress, [0, 1], [-150 , 150])
    const translate2 = useTransform(scrollYProgress, [0, 1], [150 , -150])
    const translate3 = useTransform(scrollYProgress, [0, 1], [-150 , 150])
    
    return (
        <div className="bg-white h-[600px] sm:h-screen overflow-hidden" ref={ref}>
            <div className=" h-full flex flex-col justify-center">
                <motion.div style={{ x: translate1 , left: "-40%" }} className="relative flex whitespace-nowrap">
                    <Phrase src={image1} color="black" text="Front End Developer" />
                    <Phrase src={image1} color="black" text="Front End Developer" />
                    <Phrase src={image1} color="black" text="Front End Developer" />
                </motion.div>
                <motion.div style={{ x: translate2 , left: "-70%" }} className="relative flex whitespace-nowrap">
                    <Phrase src={image2} color="[#DFD0B8]" text="React JS Developer" />
                    <Phrase src={image2} color="[#DFD0B8]" text="React JS Developer" />
                    <Phrase src={image2} color="[#DFD0B8]" text="React JS Developer" />
                </motion.div>
                <motion.div style={{ x: translate3 , left: "-120%" }} className="relative flex whitespace-nowrap">
                    <Phrase src={image3} color="black" text="Front End Developer" />
                    <Phrase src={image3} color="black" text="Front End Developer" />
                    <Phrase src={image3} color="black" text="Front End Developer" />
                </motion.div>
            </div>
        </div>
    )
}

export default Parallax;