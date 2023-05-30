import { useEffect, useState } from "react"
import type { Order } from "../cartStore"

function Cart() {
    const [savedOrders, setSavedOrders] = useState<Order[] | null>()

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem("orders") ?? "[]")
        setSavedOrders(savedOrders)
    }, [])
    return (
        <div>
            {savedOrders?.map(item => <p key={item.id}>{item.product} : {item.countInCart}</p>)}
        </div>
    )
}

export default Cart