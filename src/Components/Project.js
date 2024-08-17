import { X, Github } from "react-bootstrap-icons";
import { motion } from "framer-motion";
function Project({open,item ,setOpen}){
    const variants = {
        closed: {
            opacity: 0,
            y: -30
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            }
        }
    }
    return(
        <div className={`top-0 left-0 w-full h-[100vh] flex items-start lg:items-center justify-center bg-black/85 z-[600] overflow-auto ${open ? "fixed" : "hidden"}`}>
            <motion.div className="bg-[#3C5B6F] lg:w-[80%] w-[90%] rounded-3xl relative p-8 my-8" variants={variants} animate={open ? "open" : "closed"}>
                <div className="text-[30px] absolute top-3 right-3 cursor-pointer bg-black/60 rounded-full p-2 hover:text-[#DFD0B8] duration-200"
                onClick={() => setOpen(false)}>
                    <X />
                </div>
                <div className="w-full h-full flex max-md:flex-col gap-8">
                    <img className="md:w-1/2 w-full min-h-[450px] rounded-2xl object-cover"  src={item.img} alt=""></img>
                    <div className="py-3">
                        <h2 className="stylefont text-3xl text-[#DFD0B8]">{item.title}</h2>
                        <a href={`${item.link}`} className="flex items-center underline gap-2 font-bold my-5">
                            <Github />
                            <span >Source Code</span>
                        </a>
                        <p>{item.description}</p>
                        {item.blog && <a href={`${item.blog}`}><button className="my-4 px-6 py-2 bg-[#CFC0A8] font-medium text-black rounded-lg hover:bg-[#DFD0B8] duration-200">View Blog</button></a>}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Project;