import { useCallback, useEffect, useState } from "react"
import type { Order } from "../cartStore"

import Navbar from "./Navbar"
import CartItem from "./CartItem"
function Cart() {
    const [savedOrders, setSavedOrders] = useState<Order[] | null>()

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem("orders") ?? "[]")
        setSavedOrders(savedOrders)
    }, [])

    // TO DO : make the total interactive

    let total = 0
    savedOrders?.forEach(order => total += order.price * order.countInCart)
    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col gap-5 lg:pr-36 lg:pl-36 mt-10">
                {savedOrders?.map(item => <CartItem key={item.id} item={item} />)}
            </div >
            {total > 0 && <p className="mt-10 text-3xl font-bold w-full text-right lg:pr-36 lg:pl-36">
                LA TOTALE : {total + " "}TND
            </p>}
        </div>
    )
}


export default Cart