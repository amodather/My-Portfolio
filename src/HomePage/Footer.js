import { Link } from "react-router-dom";
import AnimatedButton from "../Components/AnimatedButton";

export default function Footer() {
    return <footer className="relative h-[400px] w-full bg-[#4C585B]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
        <div className='relative h-[calc(100vh+400px)] -top-[100vh] w-full'>
            <div className='sticky top-[calc(100vh-400px)] top-0'>
                <div className="sm:w-3/4 w-[90%] mx-auto px-4 py-10">
                    <p className="stylefont text-[60px]" style={{ fontVariationSettings: `'slnt' 10, 'wdth' 25` }}>Let's Work</p>
                    <p className="stylefont text-[60px]" style={{ fontVariationSettings: `'slnt' 10, 'wdth' 50` }}>Together</p>
                    <hr></hr>
                    <div className="w-[100px]"><AnimatedButton  text={"email"} link="mailto:abdo.modather10@gmail.com" border={"white"}/></div>
                    <div className="mt-10 w-full flex justify-end items-center gap-3 uppercase stylefont text-sm">
                        <Link to="http://www.linkedin.com/in/abdelrahman-modather-3b06b1238" className="hover:text-[#DFD0B8] duration-100"
                            target="_blank">LinkedIn</Link>
                        <Link to="https://github.com/amodather" className="hover:text-[#DFD0B8] duration-100"
                            target="_blank">Github</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}
