import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import Project from "../Components/Project";
import MOD from "../Components/images/2MOD.jpg"
import Spaces from "../Components/images/Spaces.png"
import Commerce from "../Components/images/commerce.jpg"
function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref);
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({});
    const textVariants = {
        initial: {
        },
        animate: {
            transition: { 
                delay: 0.2,
                staggerChildren: 0.3, 
                delayChildren: 0.3 }
        }
    }
    const itemVariants = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            }
        }
    }
    const projects = [
        {
            title: "Spaces Booking Platform",
            img: Spaces,
            description:"A project that aims to streamline the co-working experience by providing a comprehensive platform that integrates all essential features for both users and Co-working Space owners. Users can sign-up in the platform as clients or owners where each of them have several different features. Users after signing up will have their profile pages and browse through the website and check all different workspaces with detailed information for each workspace and events present where they can book a specific time for a room in the workspace they choose or register for specific event. Owners after signing up will have their profile pages also but they will have extra pages where they can create their workspace and manage all the workspace data. Also owners can register moderators to help them manage clients requests and bookings.",
            link: "https://github.com/ismail939/graduation-project-cw_spaces.git",
            blog:"https://amodather.hashnode.dev/website-main-features#heading-website-intro"
        }, {
            title: "Simple E-commerce",
            img: Commerce,
            description: "A simple e-commerce project which consists of the home page, about page, product page and cart page. All the products are found in the home page which is fetched from fakestoreapi website using AJAX request and listed in cards. Clicking on the buy button in any product card will display a page of detailed information about the product with ability to store it in a cart. The cart page contains a table of all the products added by the user with total price. The project uses redux in global state management and bootstrap for styling.",
            link: "https://github.com/amodather/Basic-Ecommerce.git",
        }, {
            title: "Portfolio Website",
            img: MOD,
            description:"This project is created only using HTML, CSS and JavaScript. A website a fantasy company called 2MOD which contains all their work of photos and videos. The website consists of 3 pages Home, Portfolio and Contact Page. The Home page contains all the main information with a small gallery that consists of slider of photos that is made using javascript. The Portfolio contains all the videos that is imported from Vimeo and displayed using iframe. The Contact page consists of contact information and contact form. The website is completely responsive on different screens.",
            link: "https://github.com/amodather/Portfolio-Website.git",
        }
    ]
    function Card({ object }) {

        return (
            <motion.div className="w-full p-6 rounded-2xl bg-white/95 shadow-lg text-black cursor-pointer group" variants={itemVariants}
            onClick={() => {setItem(object);setOpen(true)}}>
                <div className="w-full h-[300px] overflow-hidden rounded-2xl">
                    <img src={object.img}
                        alt="" className="w-full h-full object-cover group-hover:scale-110 duration-500"></img>
                </div>
                <div className="flex items-center mt-5 gap-1 group-hover:text-[#DFD0B8] duration-300">
                    <h2 className="font-[900] text-xl">{object.title}</h2>
                    <ArrowUpRight className="text-sm" />
                </div>
            </motion.div>
        )
    }
    return (
        <div ref={ref} id="Projects" className="mb-[100px]">
            <Project open={open} item={item} setOpen={setOpen}/>
            <div className="w-[95%] mx-auto mt-[50px]">
                <h1 className="stylefont md:text-[40px] text-[30px] text-center my-4">Explore Latest <span className=" text-[#DFD0B8]">Projects</span></h1>
                <motion.div variants={textVariants} initial="initial" animate={inView && "animate"}
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[50px]">
                    {projects.map((object) => {
                        return <Card object={object} />
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default Projects;