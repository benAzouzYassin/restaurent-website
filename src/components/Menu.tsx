import MenuCard from './MenuCard'
import "../styles.css"
import { useEffect, useState } from 'react'
import { baseURL } from "./apiUrl"
import { Product, redirectTo, variantsRight } from "../utils"


function Menu() {
    const [products, setProducts] = useState<undefined | Product[]>()
    useEffect(() => {
        baseURL.get("/items").then(res => setProducts(res.data)).catch(err => console.error(err))
    }, [])
    return (
        <section className=' flex flex-col  h-[150vh]  w-full bg-[url(/images/shape-5.png)] pt-36    bg-[#161718] relative'>
            <div className='w-full grid lg:grid-cols-2  pt-32 z-10 gap-x-12 gap-y-10 pl-36 pr-32 '>
                {
                    products?.length && products.map((product: Product) => <MenuCard animationVariant={variantsRight} rating={product.rating} ingredients={product.ingredients} id={product._id} key={product._id} imgUrl={product.imgLink} price={product.price} productName={product.itemName} />)
                }
            </div>
            <p className='text-white font-normal scale-125 ml-auto mr-auto mt-10 '>Open daily from <span className='text-sm font-medium text-amber-100'>7:00 pm</span> to <span className='text-sm font-medium text-amber-100'>9:00 pm</span> </p>
            <button className="mt-10 px-16  hover:text-black transition-colors py-4 text-amber-100 border-2  border-amber-100 ml-auto mr-auto bg-[#161718] font-medium text-md hover:cursor-pointer z-10   before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-amber-100 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-100 relative" onClick={() => redirectTo("/menu")}>View all menu</button>
            <div className="curve bg-[url(/images/third-wave.svg)] top-[45vh]"></div>

        </section>
    )
}


export default Menu