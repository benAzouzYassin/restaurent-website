import { useEffect } from 'react';
import { orders, } from '../cartStore';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer"
interface MenuCardProps {
    imgUrl: string
    price: number
    productName: string
    id: string
    ingredients: string[]
    rating: number
    animationVariant: any
}
function MenuCard(props: MenuCardProps) {

    console.log("menu card render")


    const animation = useAnimation()
    const { ref, inView } = useInView({ threshold: 0.2 })
    useEffect(() => {
        if (inView) {
            animation.start("visible")
        } else {
            animation.start("hidden")

        }
    }, [inView])



    useEffect(() => {
        const oldOrders = JSON.parse(localStorage.getItem("orders") ?? "[]")
        orders.set(oldOrders)
    }, [])



    return <motion.div className=' flex gap-5  rounded-xl shadow-2xl min-h-[100px] px-2 py-2 lg:mr-5 relative z-10  bg-[#1f1f1f] hover:bg-[#191919] hover:cursor-pointer' ref={ref} animate={animation} variants={props.animationVariant} >
        <div className='lg:w-[15%] w-1/3 rounded-xl bg-cover hover:blur-sm hover:cursor-pointer bg-center  transition-all ' style={{ backgroundImage: `url(${props.imgUrl})` }}></div>
        <div className='w-2/3 flex flex-col '>
            <div className='flex items-center'>
                <h4 className=' text-2xl mt-2   text-left font-serif relative  font-bold text-amber-100'>{props.productName}</h4>
                <div className=' w-auto  border-solid  border-y-[1px] ml-4 mr-4 border-[#FFF0F0] h-[5px] mt-3 flex-grow' ></div>
                <p className='text-amber-100 mt-2  ml-auto text-xl text-[Forum, cursive]'>{props.price}$</p>
            </div>
            <p className='text-stone-300 mt-2 mb-2'><span className='text-xl font-semibold italic'>Ingredients</span> : {props.ingredients.join(" ")} </p>
        </div>
    </motion.div >
}
export default MenuCard
