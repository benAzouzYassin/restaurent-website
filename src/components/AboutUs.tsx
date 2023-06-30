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






    return <div className="bg-[#191919] pt-16 w-full z-10  h-[500px]  grid lg:grid-cols-3 lg:pl-56 lg:pr-56 gap-12 relative justify-center  mt-16  re" ref={ref}>
        <motion.div variants={variantsLeft} initial="hidden" animate={animation} className="bg-[#121111] h-80 relative rounded-2xl"><img className="absolute top-10 left-[35%]" src="/images/features-icon-1.png" alt="" />
            <img className="-z-10" src="/images/shape-2.png" />
            <p className="absolute top-1/2 font-semibold text-center w-full text-3xl text-[#d5c8b3]">Good Thing</p> <p className="text-xl text-stone-300 absolute top-[65%] px-10 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae </p></motion.div>
        <motion.div animate={animation} initial="hidden" variants={variantsTop} className="bg-[#121111] h-80 relative rounded-2xl"><img className="absolute top-10 left-[35%]" src="/images/features-icon-2.png" alt="" />
            <img className="" src="/images/shape-6.png" />

            <p className="absolute top-1/2 font-semibold text-center w-full text-3xl text-[#d5c8b3]">Good Thing</p> <p className="text-xl text-stone-300 absolute top-[65%] px-10 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae </p></motion.div >
        <motion.div animate={animation} initial="hidden" variants={variantsRight} className="bg-[#121111] h-80 relative rounded-2xl"><img className="absolute top-10 left-[35%]" src="/images/features-icon-3.png" alt="" />
            <img className="-z-10" src="/images/shape-2.png" />

            <p className="absolute top-1/2 font-semibold text-center w-full text-3xl text-[#d5c8b3]">Good Thing</p> <p className="text-xl text-stone-300 absolute top-[65%] px-10 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae </p></motion.div >
    </div>

}
export default AboutUs