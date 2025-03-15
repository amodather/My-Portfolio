import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
function Navbar(){
    const variants ={
        initial:{
            opacity:0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                delay:2,
                ease: "easeInOut"
            }
        }
    }
    return (
        <nav className="absolute top-0 left-0 w-full mx-auto h-[80px] flex items-center md:px-12 px-6 py-3 justify-between z-[10]">
            <motion.h2 className="font-black" variants={variants} initial="initial" animate="animate"
            >©Abdelrahman Modather</motion.h2>
            <Sidebar />
            <div className="flex items-center gap-10 text-[20px] stylefont  max-sm:hidden">
                <a href="#Home"><div className="cursor-pointer hover:text-[#DFD0B8] duration-100">Home</div></a>
                <a href="#About"><div className="cursor-pointer hover:text-[#DFD0B8] duration-100">About</div></a>
                <a href="#Projects"><div className="cursor-pointer hover:text-[#DFD0B8] duration-100">Projects</div></a>
            </div>
        </nav>
    )
}

export default Navbar;