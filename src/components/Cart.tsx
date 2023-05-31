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


    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col gap-5 lg:pr-36 lg:pl-36 mt-10">

                {savedOrders?.map(item => <CartItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}


export default Cart