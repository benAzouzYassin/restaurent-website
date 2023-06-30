import { useEffect, useState } from 'react';
import { orders, addNewProduct } from '../cartStore';
import { redirectTo } from '../utils';
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



    const animation = useAnimation()
    const { ref, inView } = useInView({ threshold: 0.2 })
    useEffect(() => {
        if (inView) {
            animation.start("visible")
        } else {
            animation.start("hidden")

        }
    }, [inView])

    const [isHovering, setIsHovering] = useState(false)


    //loading old orders from local storage
    useEffect(() => {
        const oldOrders = JSON.parse(localStorage.getItem("orders") ?? "[]")
        orders.set(oldOrders)
    }, [])



    return <motion.div className=' flex gap-5  rounded-xl shadow-2xl min-h-[100px] px-2 py-2 mr-5 relative z-10 bg-[#1f1f1f] hover:bg-[#191919] hover:cursor-pointer' ref={ref} animate={animation} variants={props.animationVariant} >
        <div className='w-[15%] rounded-xl bg-cover hover:blur-sm hover:cursor-pointer hover:bg-center  transition-all' onClick={() => addNewProduct(props.id, props.productName, props.price, props.imgUrl)} style={{ backgroundImage: `url(${props.imgUrl})` }}></div>
        <div className='w-2/3 flex flex-col '>
            <div className='flex items-center'>
                <h4 className=' text-2xl mt-2   text-left font-serif relative  font-bold text-amber-100'>{props.productName}</h4>
                <div className=' w-auto  border-solid  border-y-[1px] ml-4 mr-4 border-[#FFF0F0] h-[5px] mt-3 flex-grow' ></div>
                <p className='text-amber-100 mt-2  ml-auto text-xl text-[Forum, cursive]'>20.00$</p>
            </div>
            <p className='text-stone-300 mt-2 mb-2'><span className='text-xl font-semibold italic'>Ingredients</span> : {props.ingredients.join(" ")} </p>
        </div>
    </motion.div >
}
export default MenuCard
