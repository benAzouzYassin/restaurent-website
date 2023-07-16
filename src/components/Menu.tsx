import MenuCard from './MenuCard'
import "../styles.css"
import { useEffect, useState } from 'react'
import { baseURL } from "./apiUrl"
import { Product, redirectTo, variantsRight } from "../utils"


function Menu() {
    const [products, setProducts] = useState<undefined | Product[]>()
    useEffect(() => {
        baseURL.get("/items").then(res => setProducts(res.data.slice(0, 6))).catch(err => console.error(err))
    }, [])
    return (
        <section className='relative'>
            <div className=' flex flex-col min-h-[1000px] h-fit  w-full bg-[url(/images/shape-5.png)]  bg-[#161718] relative overflow-hidden lg:px-36 py-96'>


                <div className='w-full grid lg:grid-cols-2  pt-20 px-10 z-10 lg:gap-x-12 gap-y-10 lg:px-10'>
                    {
                        products?.length && products.map((product: Product) => <MenuCard animationVariant={variantsRight} rating={product.rating} ingredients={product.ingredients} id={product._id} key={product._id} imgUrl={product.imgLink} price={product.price} productName={product.itemName} />)
                    }
                </div>
                <p className='text-white font-normal scale-125 ml-auto mr-auto mt-10 '>Open daily from <span className='text-sm font-medium text-amber-100'>7:00 pm</span> to <span className='text-sm font-medium text-amber-100'>9:00 pm</span> </p>
                <button className="mt-10 px-16  hover:text-black transition-colors py-4 text-amber-100 border-2  border-amber-100 ml-auto mr-auto bg-[#161718] font-medium text-md hover:cursor-pointer z-10   before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-amber-100 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-100 relative z-50" onClick={() => redirectTo("/menu")}>View all menu</button>

            </div>
            <svg className='absolute bottom-[0%] z-50 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f5e7c1" fillOpacity="1" d="M0,96L40,117.3C80,139,160,181,240,213.3C320,245,400,267,480,250.7C560,235,640,181,720,160C800,139,880,149,960,165.3C1040,181,1120,203,1200,176C1280,149,1360,75,1400,37.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </section>
    )
}


export default Menu