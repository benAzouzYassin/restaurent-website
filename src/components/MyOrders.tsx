import { useEffect, useMemo, useState } from "react"
import { baseURL } from "./apiUrl"
import OrderItem from "./OrderIstem"

function MyOrders() {
    const [userOrders, setUserOrders] = useState([])

    const token = useMemo(() => localStorage.getItem("token") ?? "", [])

    useEffect(() => {
        baseURL.get("/userOrders", { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                console.log(res.data)
                setUserOrders(res.data)
            })
            .catch(err => console.error(err))
    }, [])
    return (<div className="lg:pl-36 lg:pr-36 pt-16 flex gap-4 flex-col ] bg-[url(/images/shape-6.png)] min-h-[100vh] bg-center">
        {userOrders.length > 0 ? <h1 className="text-6xl text-white italic">Your orders : </h1> : <h1 className="text-8xl italic text-center mt-[20vh] text-stone-400 ">No Orders</h1>}
        {userOrders.length > 0 &&
            userOrders.map(
                (order: any) => <OrderItem key={order._id} price={order.item.price} ingredients={order.item.ingredients} img={order.item.imgLink} name={order.item.itemName} count={order.countInCart} orderState={order.orderState} />
            )
        }
    </div>)
}


export default MyOrders



