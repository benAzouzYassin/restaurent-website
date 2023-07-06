import { useCallback, useMemo } from "react";
import type { Order } from "../utils";
import { baseURL } from "./apiUrl";

interface Props extends Order {
    allOrders: Order[]
    updateOrders: () => void
}

export default function OrderCard(props: Props) {
    const token = useMemo(() => localStorage.getItem("token"), [])

    const cancelOrder = useCallback((orderId: string) => {
        baseURL.patch("/cancelOrder", { orderId: orderId }, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => props.updateOrders())
            .catch(err => console.error(err))
    }, [])

    const confirmOrder = useCallback((orderId: string) => {
        baseURL.patch("/confirmOrder", { orderId: orderId }, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => props.updateOrders())
            .catch(err => console.error(err))
    }, [])


    return <div>

        <div className="  bg-[#121212] text-white  h-fit rounded-xl pl-2  relative mt-8 ">
            <div></div>
            <div className="flex px-10 py-4">
                <div className="flex flex-col w-3/4">
                    <h1 className="text-5xl text-amber-100 italic font-semibold  w-full">{props.item.itemName} <span className="text-xl "  >{props.orderState}</span></h1>
                    <p className="mt-1"><span className="text-xl font-semibold">User : </span> {props.user.name}</p>
                    <p className="mt-1">Phone numbre {props.user.phone}</p>
                    <p>createdAt {props.createdAt.substring(0, 10)}</p>
                    <p className="mt-2 text-2xl italic font-semibold border-b-[1px] border-white w-fit ">Total Price :<span className="font-normal"> {props.item.price * parseInt(props.countInCart)}</span> </p>
                    <div className="flex w-full justify-center">
                        {props.orderState != "done" && <button className="bg-green-600 hover:cursor-pointer mr-2 hover:bg-green-700  py-2 px-4 rounded-xl " onClick={() => confirmOrder(props._id)}>confirm  </button>}
                        {props.orderState != "canceled" && <button className="bg-red-600 hover:cursor-pointer ml-2 hover:bg-red-700  py-2 px-4 rounded-xl " onClick={() => cancelOrder(props._id)}>cancel </button>}
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${props.item.imgLink}` }} className={` bg-center  absolute w-1/4 ml-auto rounded-xl top-0 right-0 h-full bg-no-repeat bg-cover`}></div>
            </div>
        </div>
    </div>

}