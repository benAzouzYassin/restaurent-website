import { useEffect, useState } from 'react';
import { orders, addNewProduct, getProductCount, decrement, increment } from '../cartStore';
import { redirectTo } from '../utils';
interface MenuCardProps {
    imgUrl: string
    price: number
    productName: string
    id: string
    ingredients: string[]
    rating: number
}
function MenuCard(props: MenuCardProps) {
    const [isHovering, setIsHovering] = useState(false)

    const [countInCart, setCountInCart] = useState(0)

    //loading old orders from local storage
    useEffect(() => {
        const oldOrders = JSON.parse(localStorage.getItem("orders") ?? "[]")
        orders.set(oldOrders)
        setCountInCart(getProductCount(props.id, oldOrders))
    }, [])



    return <div className='flex flex-col bg-white rounded-xl shadow-xl min-h-[600px] mr-5 relative'>
        <div style={{ backgroundImage: `url(${props.imgUrl})`, filter: `${isHovering ? "blur(10px)" : "blur(0px)"}` }} onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className=' p-3 bg-[url("/images/tabouna.jpg")] bg-cover bg-center w-full h-3/4 rounded-t-xl hover:cursor-pointer'>

        </div>
        {isHovering && <div className='absolute py-5 px-8 text-white   hover:cursor-pointer' onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}  >
            <h3 className=' font-bold'>ingrediants : </h3>
            {props.ingredients && props.ingredients.map(ingredient => <p className='font-bold' >{ingredient}</p>)}
        </div>}
        <div className='flex items-center mt-6 '>
            <h3 className='text-5xl font-sans h-20 text-center italic px-4 font-bold'>{props.productName}</h3>
            <div className='text-red-600 border-2  border-red-600 rounded-full text-6xl  text-center  hover:bg-red-300 hover:cursor-pointer h-20 w-20 ml-auto mr-4  items-center ' style={{ backgroundImage: countInCart > 0 ? "url(/images/cart.svg)" : "", backgroundPosition: "center", backgroundSize: "cover" }} onClick={() => {
                if (countInCart === 0) {
                    addNewProduct(props.id, props.productName, props.price, props.imgUrl)
                    setCountInCart(1)
                } else {
                    redirectTo("cart")
                }
            }}>{countInCart === 0 && "+"}</div>
        </div>
        <p className='ml-5 text-stone-700 mt-[-20px] text-xl font-semibold'>${props.price} dinars</p>

    </div>
}
export default MenuCard
