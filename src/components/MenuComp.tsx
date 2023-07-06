import { useEffect, useState } from "react"
import { baseURL } from "./apiUrl"
import { redirectTo, type Product } from "../utils"
import { motion, useAnimation, Variants } from "framer-motion"
import { addNewProduct } from "../cartStore"
import type { Order } from "../cartStore"
function Menu() {
    const [isCardExpanded, setIsCardExpanded] = useState(false)
    const updateIsExpanded = (value: boolean) => {
        setIsCardExpanded(value)
    }

    const [products, setProducts] = useState<undefined | Product[]>()

    useEffect(() => {
        baseURL.get("/items").then(res => setProducts(res.data)).catch(err => console.error(err))
    }, [])

    const closeCard = () => {
        if (isCardExpanded) {
            setIsCardExpanded(false)
        }

    }
    const tesProd: Product | null = products ? products[3] : null

    return <div className="h-[100vh] bg-[url(/images/shape-5.png)] relative " >
        <div className=" gap-y-5 p-10 min-h-[50vh] grid-cols-2 grid  w-[99.5vw] overflow-hidden lg:pl-56 lg:pr-56  align-center gap-x-10 pt-20  ">
            {products?.map(product => <Card {...product} isCardExpanded={isCardExpanded} updateIsExpanded={updateIsExpanded} />)}
        </div>
        {isCardExpanded && <div className="h-full w-full  absolute top-0 blur-lg z-30  bg-[url(/images/shape-5.png)] bg-[#191919]" onClick={closeCard}></div>}
    </div>
}


///CARD COMPONENT

type CardProps = {
    isCardExpanded: boolean,
    updateIsExpanded: (val: boolean) => void
} & Product;

function Card(props: CardProps) {
    const [isOrdered, setIsOrdered] = useState(false)

    const cardVariants: Variants = {
        "expanded": { flexDirection: "column", height: "70vh", width: "50vw", position: "absolute", zIndex: 100, left: "25%", right: "25%", },
        "closing": { flexDirection: "row", height: 120, position: "static", width: "100px", zIndex: 10, left: "0%", right: "0%" },
        "closed": { flexDirection: "row", height: 120, position: "static", width: "100%", zIndex: 10 },
    }
    const animation = useAnimation()
    useEffect(() => {
        if (!props.isCardExpanded) {
            animation.start("closing")
            animation.start("closed")
        }
    }, [props.isCardExpanded])
    const expandCard = (e: any) => {
        if (!props.isCardExpanded) {
            if (e.pageY > 450) {
                animation.set({ top: (e.pageY - 450) })

            } else {
                animation.set({ top: 100 })
            }
            props.updateIsExpanded(true)

            animation.start("expanded")
        }
    }

    //checks if item in the cart
    useEffect(() => {
        const cartItems: Order[] = JSON.parse(localStorage.getItem("orders") ?? "[]")
        const isInCart = cartItems.some(order => order.id === props._id)
        setIsOrdered(isInCart)
    }, [])

    const handleOrder = () => {
        addNewProduct(props._id, props.itemName, props.price, props.imgLink)
        setIsOrdered(true)
        redirectTo("/../cart")
    }

    return <>
        <motion.div initial={{ height: 120 }} transition={{ ease: "backOut", duration: 0.5 }} variants={cardVariants} animate={animation} className='   flex gap-5  rounded-xl shadow-2xl  px-2 py-2 mr-5 relative  bg-[#1f1f1f] hover:bg-[#191919] hover:cursor-pointer ' onClick={expandCard}  >
            <motion.div transition={{ ease: "backOut", duration: 0.5 }} className=' h-full rounded-xl bg-cover  hover:cursor-pointer bg-center  transition-all' style={{ backgroundImage: `url(${props.imgLink})`, height: props.isCardExpanded ? "70%" : "100%", width: props.isCardExpanded ? "100%" : "30%" }}></motion.div>
            <div className='flex flex-col ' style={{ width: props.isCardExpanded ? "100%" : "70%", paddingInline: "5%" }}>
                <div className='flex items-center'>
                    <h4 className=' text-2xl mt-2   text-left font-serif relative  font-bold text-amber-100'>{props.itemName}</h4>
                    <div className=' w-auto  border-solid  border-y-[1px] ml-4 mr-4 border-[#FFF0F0] h-[5px] mt-3 flex-grow' ></div>
                    <p className='text-amber-100 mt-2  ml-auto text-xl text-[Forum, cursive]'>20.00$</p>
                </div>
                <p className='text-stone-300 mt-2 mb-2'><span className='text-xl font-semibold italic'>Ingredients</span> : {props.ingredients.join(" ")} </p>

                {props.isCardExpanded && !isOrdered && <button className="hover:bg-amber-200 w-full mt-2 py-3 text-xl font-semibold rounded-2xl bg-amber-100" onClick={handleOrder}>Order now</button>}
                {props.isCardExpanded && isOrdered && <button className=" w-full hover:cursor-not-allowed mt-2 py-3 text-xl font-semibold rounded-2xl bg-amber-200">InCart</button>}

            </div>
        </motion.div ></>
}
export default Menu