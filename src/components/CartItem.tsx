import { useCallback, useState } from "react"
import type { Order } from "../cartStore"

// TODO : when changing the value the value also should be changed in the local storage
// NOTE : use the cart store functions
// TODO : when the item count reachs 0 the item cart should disapear

interface CartItemProps {
    item: Order
}
function CartItem(props: CartItemProps) {
    const { item } = props
    const [itemCount, setItemCount] = useState<number>(item.countInCart)

    const handleItemCountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const count = parseInt(e.target.value)
        if (count && count < 100) {
            setItemCount(count)
        } else {
            setItemCount(0)
        }
    }, [])
    const countIncrement = useCallback((count: number) => {
        if (count < 100) {
            setItemCount(count + 1)
        }
    }, [])
    const countDecrement = useCallback((count: number) => {
        if (count > 1) {
            setItemCount(count - 1)
        } else {
            setItemCount(0)
        }
    }, [])
    return <div className="w-full h-36 flex shadow-xl rounded-xl" key={item.id} >
        <div className="w-[40%] ml-auto bg-cover bg-center rounded-l-xl" style={{ backgroundImage: `url(${item.img})` }} ></div>
        <div className="w-[60%] flex  mr-auto mt-10">
            <h2 className="ml-10 text-3xl font-bold ">{item.product} <span className="text-xs mt-[-10px]">x{item.countInCart}</span></h2>
            <div className="ml-auto mr-10 mt-2">
                <p className=" text-lg font-semibold">{item.price * item.countInCart}dt</p>
                <div><button className="bg-orange-500 w-9 text-white font-bold text-xl  rounded-sm" onClick={() => countDecrement(itemCount)}>-</button><input onChange={(e) => handleItemCountChange(e)} type="text" value={itemCount} className="w-10 mx-2 text-lg font-bold bg-[#FEF5F6] rounded-sm px-1 text-center" /><button className="bg-orange-500 w-9 text-white font-bold text-xl  rounded-sm" onClick={() => countIncrement(itemCount)}>+</button></div>
            </div>

        </div>
    </div >
}

export default CartItem