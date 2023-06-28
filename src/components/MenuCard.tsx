import { useEffect, useState } from 'react';
import { orders, addNewProduct, getProductCount, decrement, increment } from '../cartStore';
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

    const [countInCart, setCountInCart] = useState(0)

    //loading old orders from local storage
    useEffect(() => {
        const oldOrders = JSON.parse(localStorage.getItem("orders") ?? "[]")
        orders.set(oldOrders)
        setCountInCart(getProductCount(props.id, oldOrders))
    }, [])



    return <motion.div className='flex gap-5  rounded-xl shadow-xl min-h-[100px] px-2 py-2 mr-5 relative' ref={ref} animate={animation} variants={props.animationVariant} >
        <div className='w-[15%] rounded-xl bg-cover hover:blur-sm hover:cursor-pointer hover:bg-center  transition-all' style={{ backgroundImage: `url(${props.imgUrl})` }}></div>
        <div className='w-2/3'><h4 className='text-2xl text-white text-left'>{props.productName}<span className='text-white text-lg font-serif menu-card-span'></span></h4></div>
    </motion.div>
}
export default MenuCard
