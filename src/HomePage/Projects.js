import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Project from "../Components/Project";
import MOD from "../Components/images/2MOD.jpg"
import Spaces from "../Components/images/Spaces.png"
import Commerce from "../Components/images/commerce.jpg"
import forest from "../Components/images/forest.jpg"
function Projects() {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({});
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["0.05 start", "0.7 start"]
    })
    const translate = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const projects = [
        {
            title: "Spaces Booking Platform",
            img: Spaces,
            description: "A project that aims to streamline the co-working experience by providing a comprehensive platform that integrates all essential features for both users and Co-working Space owners. Users can sign-up in the platform as clients or owners where each of them have several different features. Users after signing up will have their profile pages and browse through the website and check all different workspaces with detailed information for each workspace and events present where they can book a specific time for a room in the workspace they choose or register for specific event. Owners after signing up will have their profile pages also but they will have extra pages where they can create their workspace and manage all the workspace data. Also owners can register moderators to help them manage clients requests and bookings.",
            link: "https://github.com/ismail939/graduation-project-cw_spaces.git",
            intro:"A project that aims to streamline the co-working experience",
            blog: "https://amodather.hashnode.dev/website-main-features#heading-website-intro"
        }, {
            title: "Simple E-commerce",
            img: Commerce,
            description: "A simple e-commerce project which consists of the home page, about page, product page and cart page. All the products are found in the home page which is fetched from fakestoreapi website using AJAX request and listed in cards. Clicking on the buy button in any product card will display a page of detailed information about the product with ability to store it in a cart. The cart page contains a table of all the products added by the user with total price. The project uses redux in global state management and bootstrap for styling.",
            intro:" A  basic e-commerce application to understand product management",
            link: "https://github.com/amodather/Basic-Ecommerce.git",
        }, {
            title: "Portfolio Website",
            img: MOD,
            description: "This project is created only using HTML, CSS and JavaScript. A website a fantasy company called 2MOD which contains all their work of photos and videos. The website consists of 3 pages Home, Portfolio and Contact Page. The Home page contains all the main information with a small gallery that consists of slider of photos that is made using javascript. The Portfolio contains all the videos that is imported from Vimeo and displayed using iframe. The Contact page consists of contact information and contact form. The website is completely responsive on different screens.",
            intro:"A portfolio website to showcase personal projects and media",
            link: "https://github.com/amodather/Portfolio-Website.git",
        }
    ]
    function Card({ object }) {
        return (
            <motion.div className="h-screen p-6 text-black flex justify-center items-center gap-10">
                <div className="flex flex-col sm:w-[500px] w-[350px] bg-[#DFD0B8] hover:bg-white z-[20] group cursor-pointer duration-500"
                    onClick={() => { setItem(object); setOpen(true) }}>
                    <div className="w-full overflow-hidden">
                        <img src={object.img}
                            alt="" className="w-full h-full object-cover duration-500 group-hover:scale-110"></img>
                    </div>
                    <div className="mt-6 px-4">
                        <h2 className="group-hover:text-[#DFD0B8] duration-300 text-[25px] widefont mb-[20px]">{object.title}</h2>
                        <div className="mb-[100px]">{object.intro}</div>
                    </div>
                </div>
            </motion.div>
        )
    }
    return (
        <div id="Projects" className="">
            <Project open={open} item={item} setOpen={setOpen} />
            <div className="mx-auto mt-[50px]">
                <h1 className="widefont md:text-[40px] text-[30px] text-center my-4">Explore Latest <span className=" text-black">Projects</span></h1>
                <div className="relative h-[600vh] mt-[50px] w-full" ref={container}>
                    <div className="sticky top-0 overflow-hidden bg-black">
                        <img className="absolute w-full h-full top-0 left-0 opacity-30" src={forest} alt="sea"></img>
                        <motion.div
                            className="grid grid-flow-col auto-cols-[100vw]"
                            style={{
                                translateX: useTransform(
                                    translate,
                                    (tx) => `${-tx}%`
                                )
                            }}>
                            {projects.map((object) => {
                                return <Card object={object} />
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;