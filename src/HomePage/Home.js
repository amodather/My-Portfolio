import image from "../Components/images/volcano.jpg"
import scroll from "../Components/images/scroll.png"
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../Components/Navbar";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
function Home() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })
    const transform = useTransform(scrollYProgress, [0, 0.5], [25, 0]);
    const textVariants = {
        initial: {
            x: -500,
        },
        animate: {
            x: 0,
            transition: {
                duration: 2,
                ease: "easeInOut",
                delay: 0.5
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
    const textVariants2 = {
        initial: {
            x: 500,
            fontVariationSettings:`'slnt' 0, 'wdth' 100`
        },
        animate: {
            x: 0,
            transition: {
                duration: 2,
                ease: "easeInOut",
                delay: 0.5
            }
        }
    }
    const imageVariants = {
        initial: {
            clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
        },
        animate: {
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
            transition: {
                duration: 1.5,
                delay: 1,
                ease: "easeInOut"
            }
        }
    }
    const sliderParentVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
                delay: 3
            }
        }
    }
    const sliderVariants = {
        initial: {
            translateX: -500,
        },
        animate: {
            translateX: 0,
        }
    }
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])
    return (
        <section className="" id="Home">
            <Navbar />
            <div className="relative h-[400vh] font-black" ref={container}>
                <motion.div className="sticky top-0 left-0 w-full max-lg:h-[700px] h-screen flex items-center justify-center"
                    style={{
                        clipPath: useTransform(
                            transform,
                            (tx) => `polygon(${tx}% 0%, 100% 0%, ${100 - tx}% 100%, 0% 100%)`
                        ),
                    }}
                    variants={imageVariants} initial="initial" animate="animate">
                    <div className="relaive z-[10]" >
                        <motion.h2 className="font-inter lg:text-[40px] text-[30px]" variants={textVariants} initial="initial" animate="animate">Welcome</motion.h2>
                        <motion.p variants={textVariants2} initial="initial" animate="animate"
                            className="stylefont lg:text-[50px]  md:text-[40px] text-[30px] leading-tight my-2"
                            whileHover={{fontVariationSettings:`'slnt' 20, 'wdth' 80`}} transition={{duration:0.4 , ease:"easeInOut"}}>Abdelrahman<br></br>Modather</motion.p>
                        <motion.p className="text-2xl" variants={textVariants} initial="initial" animate="animate">Front-end Developer</motion.p>
                        <motion.img src={scroll} className="mt-6 w-[35px]"
                            alt="scroll" initial={{ y: 0, opacity: 1 }} animate={textVariants.scrollButton}></motion.img>
                    </div>
                    <motion.img src={image} alt=""
                        className="absolute top-0 left-0 w-full h-full object-cover"></motion.img>
                        <div className="absolute top-0 left-0 bg-black w-full h-full opacity-20"></div>
                </motion.div>
                <motion.div className="absolute top-1/4 xl:left-[45%] md:left-[20%] left-[-30%] max-md:hidden rotate-90 text-[30px] stylefont z-[-1] w-[180vh] overflow-hidden" variants={sliderParentVariants} initial="initial" animate="animate">
                    <motion.div
                        variants={sliderVariants} initial="initial" animate="animate" transition={{ delay: 2, duration: 5, repeat: Infinity, repeatType: "mirror" }}>
                        SCROLL.SCROLL.SCROLL.SCROLL.SCROLL.SCROLL.SCROLL.SCROLL.SCROLL.SCROLL.SCROLL.SCROLL.SCROLL.SCROLL
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Home;