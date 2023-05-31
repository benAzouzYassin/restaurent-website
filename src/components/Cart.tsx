import { useEffect, useState } from "react"
import type { Order } from "../cartStore"

import Navbar from "./Navbar"
function Cart() {
    const [savedOrders, setSavedOrders] = useState<Order[] | null>()

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem("orders") ?? "[]")
        setSavedOrders(savedOrders)
    }, [])


    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col gap-5 lg:pr-36 lg:pl-36 mt-10">

                {savedOrders?.map(item => <CartItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

interface CartItemProps {
    item: Order
}
function CartItem(props: CartItemProps) {
    const { item } = props
    const [] = useState<number>(item.countInCart)
    return <div className="w-full h-36 flex shadow-xl rounded-xl" key={item.id} >
        <div className="w-[40%] ml-auto bg-cover bg-center rounded-l-xl" style={{ backgroundImage: `url(${item.img})` }} ></div>
        <div className="w-[60%] flex  mr-auto mt-10">
            <h2 className="ml-10 text-3xl font-bold ">{item.product} <span className="text-xs mt-[-10px]">x{item.countInCart}</span></h2>
            <div className="ml-auto mr-10 mt-2">
                <p className=" text-lg font-semibold">{item.price * item.countInCart}dt</p>
                <div><button className="bg-orange-500 w-9 text-white font-bold text-xl  rounded-sm">-</button><input type="text" value={item.countInCart} className="w-10 mx-2 text-lg font-bold shadow-md rounded-sm px-1" /><button className="bg-orange-500 w-9 text-white font-bold text-xl  rounded-sm">+</button></div>
            </div>

        </div>
    </div >
}

export default Cart