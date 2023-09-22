import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {technologies} from "../constant/index.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion.js";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className={"mb-10"}>
        <h3 className={`${styles.sectionHeader}`}>My Tech Stack</h3>
        <p className={`${styles.sectionSubText}`}>Always ready to learn 👨‍💻</p>
      </motion.div>

      <div className={"flex flex-row flex-wrap justify-center gap-10"}>
        {technologies.map((technology) => (
            <div className={"w-28 h-28"} key={technology.name}>
              <BallCanvas icon={technology.icon}/>
            </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")