import { useEffect, useState } from 'react';
import { orders, addNewProduct, getProductCount, decrement, increment } from '../cartStore';
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



    return <div className='flex flex-col bg-white rounded-xl shadow-xl min-h-[400px] mr-5 relative'>
        <div style={{ backgroundImage: `url(${props.imgUrl})`, filter: `${isHovering ? "blur(10px)" : "blur(0px)"}` }} onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className=' p-3 bg-[url("/images/tabouna.jpg")] bg-cover bg-center w-full h-3/4 rounded-t-xl hover:cursor-pointer'>

            <span className='bg-[#f54748] text-white px-3 py-1 font-bold rounded-lg text-sm'>{props.price}</span>

        </div>
        {isHovering && <div className='absolute py-5 px-8 text-white   hover:cursor-pointer' onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}  >
            <h3 className=' font-bold'>ingrediants : </h3>
            {props.ingredients && props.ingredients.map(ingredient => <p className='font-bold' >{ingredient}</p>)}
        </div>}
        {countInCart > 0 && <><button className='bg-red-600 text-white hover:scale-105 font-bold ml-auto mr-auto px-3 mt-2 rounded-md' onClick={() => {
            decrement(props.id)
            setCountInCart(count => count - 1)
        }}>-</button><span className='ml-auto mr-auto font-extrabold'>{countInCart}</span><button className='hover:scale-105 bg-red-600 text-white font-bold ml-auto mr-auto px-3 mb-2 rounded-md' onClick={() => {
            increment(props.id)
            setCountInCart(count => count + 1)
        }} >+</button></>}

        {countInCart < 1 && <button className='m-auto py-1 px-4 bg-black font-semibold hover:scale-105 text-white rounded-md ' onClick={() => {
            addNewProduct(props.id, props.productName, props.price, props.imgUrl)
            setCountInCart(1)
        }}>Commandez</button>}
    </div>
}
export default MenuCard
