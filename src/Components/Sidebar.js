import "./Sidebar.scss"
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);
function Sidebar() {
    const [open, setOpen] = useState(false);
    const items = ["Home", "About", "Projects"]
    const variants = {
        open: {
            clipPath: "circle(800px)",
            transition: {
                duration: 1
            }
        },
        closed: {
            clipPath: "circle(25px at 250px 40px)",
            transition: {
                duration: 0.5
            }
        }
    }
    const linkVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            opacity: 0,
            y: 50,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        },
    }
    const itemVariants = {
        open: {
            opacity: 1,
            y: 0
        },
        closed: {
            opacity: 0,
            y: 50
        },
    }
    return <motion.div className="sidebar" variants={variants} animate={open ? "open" : "closed"} initial={"closed"}>
        <div className="menu-button" onClick={() => setOpen(!open)}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 5 L 20 5" }, // Top bar in closed state
                        open: { d: "M 3 18 L 18 3" },   // Diagonal bar in open state
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ strokeWidth: "1px" }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 12 L 20 12" }, // Bottom bar in closed state
                        open: { d: "M 3 3 L 18 18" },    // Diagonal bar in open state
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ strokeWidth: "1px" }}
                />
            </svg>
        </div>
        <div className="absolute w-full mt-[80px] px-6">
            <span className="font-inter uppercase text-[13px] font-black text-gray-400">
                Navigation
            </span>
            <hr></hr>
        </div>
        <motion.div className="links" variants={linkVariants} animate={open ? "open" : "closed"}>
            {items.map((item, index) => {
                return <motion.a href={`#${item}`} variants={itemVariants}
                    whileHover={{ scale: 1.1 }}>{item}</motion.a>
            })}
        </motion.div>
        <div className="absolute bottom-2 flex items-center gap-3 uppercase stylefont text-[12px] text-gray-400 px-6">
            <Link to="http://www.linkedin.com/in/abdelrahman-modather-3b06b1238" className="hover:text-[#DFD0B8] duration-100"
                target="_blank">LinkedIn</Link>
            <Link to="https://github.com/amodather" className="hover:text-[#DFD0B8] duration-100"
                target="_blank">Github</Link>
        </div>
    </motion.div>
}


export default Sidebar;