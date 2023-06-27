import { motion } from "framer-motion"

function Intro() {
    return (
        <main className="flex overflow-hidden lg:pl-32 lg:pr-32 flex-col gap-0">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1, }} className="text-7xl mt-44  font-bold italic text-[#191919]  h-fit text-center font-sans scale-150 ">karoui fast food delivery</motion.h1>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1, }} className="text-7xl  font-bold italic text-[#f6de97]  h-fit text-center font-sans mt-5 scale-125">you order we deliver </motion.h1>
            <motion.div initial={{ opacity: 0, y: 75 }} animate={{ opacity: 1, y: 0 }} className="flex ml-auto mr-auto mt-8 gap-8">
                <button className="bg-white rounded-xl font-sans font-semibold text-md py-3 px-6 border-2 hover:border-black z-10" onClick={() => console.log("hello world this is idk")}>Our Menu</button>
                <button className="bg-black text-white py-3 px-6 rounded-xl font-sans font-semibold text-md hover:cursor-pointer z-10 hover:border-white   hover:border-[1px]">Order Now</button>
            </motion.div>
        </main >
    )
}
export default Intro