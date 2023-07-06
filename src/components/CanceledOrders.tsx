
import { useEffect, useMemo, useState } from "react"
import { baseURL } from "./apiUrl"
import type { Order } from "../utils"
import OrderCard from "./OrderCard"



export default function canceledOrders() {
    const [orders, setOrders] = useState<Order[]>([])

    const updateOrders = () => {
        baseURL.get("/canceledOrders", { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setOrders(res.data))
            .catch(err => console.error(err))
    }
    const token = useMemo(() => localStorage.getItem("token"), [])
    useEffect(() => {
        baseURL.get("/canceledOrders", { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setOrders(res.data))
            .catch(err => console.error(err))
    }, [])
    console.log(orders)


    return <div className="text-white text-xl pt-5">
        {orders.length < 1 && <h1 className="text-8xl italic font-semibold font-sans text-center mt-[20vh] text-white">Nothing here.</h1>}
        {orders.length > 0 && orders.map((order: Order) => <OrderCard key={order._id} allOrders={orders} updateOrders={updateOrders} {...order} />)}</div>
}


