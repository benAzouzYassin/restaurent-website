import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"
import { variantsLeft, variantsRight, variantsTop } from "../utils";
function AboutUs() {

    const animation = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.2 })
    useEffect(() => {
        if (inView) {
            console.log("in view")
            animation.start("visible")
        } else {
            animation.start("hidden")

        }
    }, [inView]);





    return (
        <div className="h-fit relative">
            <div className="bg-[#191919] py-16 w-full z-10  min-h-[700px] h-fit  grid xl:grid-cols-3 lg:grid-cols-2 lg:pl-56 lg:pr-56 gap-12 relative justify-center overflow-hidden " ref={ref}>
                <motion.div variants={variantsLeft} initial="hidden" animate={animation} className="bg-[#121111] h-96 lg:w-auto w-80 relative rounded-2xl overflow-hidden"><img className="absolute top-10 left-[35%]" src="/images/features-icon-1.png" alt="" />
                    <p className="absolute top-1/2 font-semibold text-center w-full text-3xl text-[#d5c8b3]">Fresh ingredients</p> <p className="text-xl text-stone-300 absolute top-[65%] px-10 text-center">Our restaurant takes pride in sourcing only the freshest ingredients.</p></motion.div>
                <motion.div animate={animation} initial="hidden" variants={variantsTop} className="bg-[#121111] h-96 relative  lg:w-auto w-80 rounded-2xl overflow-hidden"><img className="absolute top-10 left-[35%]" src="/images/features-icon-2.png" alt="" />

                    <p className="absolute top-1/2 font-semibold text-center w-full text-3xl text-[#d5c8b3]">Elegant decor </p> <p className="text-xl text-stone-300 absolute top-[60%] px-7 text-center pb-5">Our restaurant's decor exudes a harmonious fusion of modern sophistication and rustic allure. </p></motion.div >
                <motion.div animate={animation} initial="hidden" variants={variantsRight} className="bg-[#121111] h-96 relative rounded-2xl lg:w-auto w-80 overflow-hidden"><img className="absolute top-10 left-[35%]" src="/images/features-icon-3.png" alt="" />

                    <p className="absolute top-1/2 font-semibold text-center w-full text-3xl text-[#d5c8b3]">Top chefs</p> <p className="text-xl text-stone-300 absolute top-[65%] px-10 text-center">Our chefs are skillfully crafting masterpieces on each plate with their unrivaled expertise.   </p></motion.div >
            </div>
            <svg className="absolute z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#191919" fillOpacity="1" d="M0,288L40,272C80,256,160,224,240,197.3C320,171,400,149,480,133.3C560,117,640,107,720,106.7C800,107,880,117,960,149.3C1040,181,1120,235,1200,240C1280,245,1360,203,1400,181.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
        </div>
    )

}
export default AboutUs