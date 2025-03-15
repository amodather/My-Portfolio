import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function AnimatedButton({text,link, border}) {
    const [ishover, setIsHover] = useState(false);
    return <Link to={link} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
        <div className={`relative overflow-hidden mt-6 px-4 py-2 text-center bg-transparent border border-${border} rounded-full widefont`}>
            <motion.div animate={{ translateY: ishover ? -25 : 0 }} transition={{ duration: 0.2 }}>{text}</motion.div>
            <motion.div className="absolute widefont bottom-0 left-0 bg-black w-full px-4 py-2 text-white"
                animate={{ translateY: ishover ? 0 : 50, clipPath: ishover ? "circle(75% at 50% 100%)" : "circle(0% at 50% 100%)" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}>
                {text}
            </motion.div>
        </div>
    </Link>
}