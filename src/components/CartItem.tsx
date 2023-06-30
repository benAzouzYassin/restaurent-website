import { useCallback, useEffect, useState } from "react"
import type { Order } from "../cartStore"
import { updateProductCount } from "../cartStore"


interface CartItemProps {
    item: Order
    updatedCartState: (orderId: string, newCount: number) => void
}
function CartItem(props: CartItemProps) {
    const { item } = props
    const [itemCount, setItemCount] = useState<number>(item.countInCart)

    useEffect(() => {
        updateProductCount(item.id, itemCount)
        props.updatedCartState(item.id, itemCount)

    }, [itemCount])

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
    return (<>
        {itemCount > 0 && <div className="w-full h-36 flex shadow-xl rounded-xl relative bg-[#F1F6F9]" key={item.id} >
            <div className="w-[40%] ml-auto bg-cover bg-center rounded-l-xl" style={{ backgroundImage: `url(${item.img})` }} ></div>
            <div className="w-[60%] flex  mr-auto mt-10">
                <h2 className="ml-10 text-3xl font-bold ">{item.product} <span className="text-xs mt-[-10px]">x{item.countInCart}</span></h2>
                <button onClick={() => setItemCount(0)} className="flex items-center bottom-0 mb-5 ml-10 bg-orange-400 px-2 py-1 gap-1 hover:bg-orange-500 text-white font-medium rounded-md absolute">
                    <img width="20" height="20" src="https://img.icons8.com/ios/100/delete-forever--v1.png" alt="delete-forever--v1" />
                    supprimer
                </button>
                <div className="ml-auto mr-10  flex flex-col gap-3">
                    <p className="  font-medium drop-shadow-xl ml-auto text-3xl ">{item.price * itemCount} TND</p>
                    <div><button className="bg-orange-500 w-9 text-white font-bold text-xl  rounded-sm" onClick={() => countDecrement(itemCount)}>-</button><input onChange={(e) => handleItemCountChange(e)} type="text" value={itemCount} className="w-10 mx-2 text-lg font-bold bg-[#FEF5F6] rounded-sm px-1 text-center" /><button className="bg-orange-500 w-9 text-white font-bold text-xl  rounded-sm" onClick={() => countIncrement(itemCount)}>+</button></div>
                </div>

            </div>
        </div >}
    </>)
}

export default CartItem