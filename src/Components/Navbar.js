import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
function Navbar(){
    const variants ={
        initial:{
            scale:0,
        },
        animate: {
            scale: 1,
            transition: {
                duration: 1
            }
        }
    }
    return (
        <div className="w-[95%] mx-auto h-[80px] flex items-center px-4 py-3 justify-between">
            <motion.h2 className="stylefont text-2xl" variants={variants} initial="initial" animate="animate"
            >{"<A"}<span className="text-[#DFD0B8]">M</span>{">"}</motion.h2>
            <Sidebar />
            <div className="flex items-center gap-10 text-[20px] stylefont  max-sm:hidden">
                <a href="#Home"><div className="cursor-pointer hover:text-[#DFD0B8] duration-100">Home</div></a>
                <a href="#About"><div className="cursor-pointer hover:text-[#DFD0B8] duration-100">About</div></a>
                <a href="#Projects"><div className="cursor-pointer hover:text-[#DFD0B8] duration-100">Projects</div></a>
            </div>
        </div>
    )
}

export default Navbar;