import { useEffect, useMemo, useState } from "react"
import { baseURL } from "./apiUrl"
import OrderItem from "./OrderIstem"

function MyOrders() {
    const [userOrders, setUserOrders] = useState([])

    const token = useMemo(() => localStorage.getItem("token") ?? "", [])

    useEffect(() => {
        baseURL.get("/userOrders", { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setUserOrders(res.data))
            .catch(err => console.error(err))
    }, [])
    console.log(userOrders)
    return (<div className="lg:pl-36 lg:pr-36 mt-16 flex gap-4 flex-col">{userOrders.length > 0 &&
        userOrders.map(
            (order: any) => <OrderItem key={order._id} price={order.item.price} img={order.item.imgLink} name={order.item.itemName} count={order.countInCart} orderState={order.orderState} />
        )
    }
    </div>)
}


export default MyOrders



