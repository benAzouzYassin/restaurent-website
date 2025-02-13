import { useCallback, useEffect, useMemo, useState } from "react"
import type { Order } from "../cartStore"
import { baseURL } from "./apiUrl"
import CartItem from "./CartItem"
import { redirectTo } from "../utils"
import Navbar from "./Navbar"

function Cart() {




    const [savedOrders, setSavedOrders] = useState<Order[] | null>()
    const [commandErr, setCommandErr] = useState<boolean | null>(false)
    const [ordered, setOrdered] = useState(0)
    const [isDone, setIsDone] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {
        const orders: Order[] = JSON.parse(localStorage.getItem("orders") ?? "[]")
        const filteredOrders = orders.filter(order => order.countInCart > 0)
        setSavedOrders(filteredOrders)
        const token = localStorage.getItem("token") ?? ""
        baseURL.post("/isLoggedIn", { token: token })
            .then(res => {
                if (res.data) {
                    setIsLoggedIn(true)
                } else {
                    setIsLoggedIn(false)
                }
            })
            .catch(err => setIsLoggedIn(false))
    }, [])

    //checks if the number of the saved orders in the db reached the one in the cart 
    useEffect(() => {
        if (ordered === savedOrders?.length) {
            setIsDone(true)
        }
    }, [ordered])

    //redirect the user to the myOrders page
    useEffect(() => {
        if (isDone && !commandErr) {
            setSavedOrders([])
            localStorage.setItem("orders", "[]")
            redirectTo("/orders")
        }
    }, [isDone])

    useEffect(() => {
        if (commandErr && !isLoggedIn) {
            redirectTo("/../login")

        }
    }, [commandErr])


    const commandOne = useCallback((order: Order, token: string) => {
        setIsLoading(true)
        baseURL.post("/order/create", { orderState: "pending", countInCart: order.countInCart, itemId: order.id }, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                setOrdered(prev => prev + 1)
            })
            .catch(err => setCommandErr(true))
    }, [savedOrders])

    const commandAll = useCallback(() => {
        const token = localStorage.getItem("token") ?? ""
        if (isLoggedIn) {
            savedOrders?.forEach(order => commandOne(order, token))

        } else {
            setCommandErr(true)
        }
    }, [savedOrders, isLoggedIn])


    const getUpdatedCartState = (orderId: string, newCount: number) => {
        const updated = savedOrders?.map(order => {
            if (order.id === orderId) {
                return { ...order, countInCart: newCount }
            } else {
                return order
            }
        })
        setSavedOrders(updated)
    }

    let total = 0
    savedOrders?.forEach(order => total += order.price * order.countInCart)
    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col gap-5 lg:pr-36 lg:pl-36 pt-10  px-1">
                {savedOrders?.map(item => <CartItem key={item.id} item={item} updatedCartState={getUpdatedCartState} />)}
            </div >
            {total > 0 && <>
                <p className="mt-10 text-3xl font-bold w-full text-right  flex  flex-col lg:pr-36 lg:pl-36 text-white italic font-mono">
                    TOTAL : {total + " "}$
                    {!isLoading && <button className="text-white  p-2 rounded-md text-lg font-semibold  bg-orange-500 hover:bg-orange-600 mt-10 font-sans " onClick={commandAll}>Order</button>}
                </p>
            </>
            }
            {isDone && !commandErr && <p className="text-2xl">done ordering successfully</p>}
            {commandErr && isLoggedIn && <p> something wrong happened</p>}
            {!savedOrders?.length && <div className=" text-8xl  text-center mt-[20vh] text-stone-400">No items was found </div>}
        </div>
    )
}


export default Cart
