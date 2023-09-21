import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {ComputersCanvas} from "./canvas";
import {INFINITY} from "three/nodes";


const Hero = () => {
  return (
    <section className={"relative w-full h-screen mx-auto pointer-events-none"}>
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
        <ComputersCanvas className={"pointer-events-auto"}/>

        <div className={"absolute w-full flex justify-center items-center"}>
            <a href={"#about"}>
                <div className={"w-[28px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2"}>
                    <motion.div
                        animate={{
                            y:[0, 15, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: INFINITY,
                            repeatType: 'loop'
                        }}
                        className={"w-5 h-2 rounded-full bg-secondary mb-1"}
                    />
                </div>
            </a>
        </div>
    </section>
  )
}

export default Hero