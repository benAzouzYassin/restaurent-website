
import { motion, useAnimation, Variants } from "framer-motion"
import { useState } from "react"
function Navbar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const variants: Variants = { "hidden": { opacity: 0, x: 100 }, "visible": { opacity: 1, x: 0, display: "block" } }
    const linksAnimation = useAnimation()
    const openBtnAnimation = useAnimation()

    const openMobileNav = () => {
        console.log("should open the mobile navbar")
        linksAnimation.start("visible")
        setIsMobileNavOpen(true)

    }
    return (
        <nav >

            <div className=" flex py-4 items-center text-white lg:px-36 gap-3 pl-5 pr-5 shadow-2xl   relative z-10 overflow-hidden">
                <p className="text-5xl mt-[-10px] text-center font-bold font-['roboto'] italic">Resto</p>
                <div className="lg:flex gap-10  pr-10 text-lg hidden  font-medium font-sans ml-16  ">
                    <a href="/" className="hover:scale-105"> Home Page</a>
                    <a href="/menu" className="hover:scale-105">Notre Menu</a>
                    <a href="/orders" className="hover:scale-105">My orders</a>
                </div>
                {!isMobileNavOpen && <a href="/cart/" className="ml-auto scale-125 mr-5 "> <img src="/images/cart.svg" alt="cart" width="35px" height="35px" className="hover:cursor-pointer hover:scale-110 z-10" /></a>}
                {!isMobileNavOpen && <div className="bg-[url(/images/menu-icon.svg)] w-7 h-6 bg-cover bg-center mt-1 lg:hidden" onClick={openMobileNav}></div>}
                <motion.div initial={{ opacity: 0, x: 100, display: "none" }} variants={variants} animate={linksAnimation} className="flex  text-lg  font-medium font-sans   lg:hidden ml-auto mr-[-20px]">
                    <a href="/menu" className="hover:scale-105  px-1 mr-2 border-2 border-white text-center">Menu</a>
                    <a href="/orders" className="hover:scale-105 px-1 mr-2 border-2 border-white text-center">My orders</a>
                </motion.div>
                {isMobileNavOpen && <a href="/cart/" className="ml-auto scale-125 mr-2 "> <img src="/images/cart.svg" alt="cart" width="35px" height="35px" className="hover:cursor-pointer hover:scale-110 z-10" /></a>}

            </div>
            <hr className="text-white bg-white w-full opacity-30" />

        </nav >
    )
}


export default Navbar