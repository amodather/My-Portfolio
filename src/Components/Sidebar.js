import "./Sidebar.scss"
import { motion } from "framer-motion";
import { useState } from "react";
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
            clipPath: "circle(23px at 250px 40px)",
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
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </div>
        <motion.div className="links" variants={linkVariants} animate={open ? "open" : "closed"}>
            {items.map((item, index) => {
                return <motion.a href={`#${item}`} variants={itemVariants}
                    whileHover={{ scale: 1.1 }}>{item}</motion.a>
            })}
        </motion.div>
    </motion.div>
}


export default Sidebar;