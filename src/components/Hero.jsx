import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {ComputersCanvas} from "./canvas";


const Hero = () => {
  return (
    <section className={"relative w-full h-full mx-auto"}>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className={"flex flex-col justify-center items-center mt-5"}>
          <div className={"w-5 h-5 rounded-full bg-[#915EFF]"}/>
            <div className={"w-1 sm:h-80 h-40 violet-gradient"}/>
        </div>

        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className={"text-[#915EFF]"}>Mathieu</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Transforming digital landscapes with cutting-edge web development and Swift applications
            </p>
        </div>
      </div>
        <ComputersCanvas/>
    </section>
  )
}

export default Hero