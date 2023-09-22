import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {services} from "../constant/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {SectionWrapper} from "../hoc";

const ServiceCard = ({index, title, icon}) => {
    return(
        <Tilt className={"xs:w-[230px] w-full"}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className={"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"}
                >
                    <img src={icon} alt={title} className={"w-16 h-16 object-contain"}/>
                    <h3 className={"text-white text-[20px] font-bold text-center"}>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}
const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeader}>Overview.</h2>
      </motion.div>
        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
        >
            I'm Mathieu, a freelance developer based in France with expertise in HTML, CSS, JavaScript, React, Gatsby, Swift, and SwiftUI. My passion extends beyond coding; I'm deeply fascinated by technology, video games, and culture. As a self-taught developer, I'm always in pursuit of new skills and challenges. My goal is to establish my own freelance enterprise focused on web and Swift development. I have a strong understanding of UIKit, and I'm interested in further solidifying my foundational skills in various frameworks. I thrive on problem-solving, and I'm the kind of person who can spend hours discussing potential solutions and new tech trends. I'm not just in it for the code; I'm in it for the endless possibilities that come with being a tech enthusiast.
        </motion.p>
        <div className={"mt-20 flex flex-wrap gap-10"}>
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
    </>
  )
}

export default SectionWrapper(About, "about")