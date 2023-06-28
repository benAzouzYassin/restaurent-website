import MenuCard from './MenuCard'
import "../styles.css"
import { useEffect, useState } from 'react'
import { baseURL } from "./apiUrl"
import { variantsRight } from "../utils"
interface Product {
    itemName: string
    isAvailable: boolean
    price: number
    rating: number
    imgLink: string
    ingredients: string[]
    _id: string
}


function Menu() {
    const [products, setProducts] = useState<undefined | Product[]>()
    useEffect(() => {
        baseURL.get("/items").then(res => setProducts(res.data)).catch(err => console.error(err))
    }, [])
    console.log(products)
    return (
        <section className=' bg-[#0e0d0c] h-fit min-h-[200vh]  w-full  '>
            <div className='w-full grid lg:grid-cols-2  pt-32 z-10 gap-x-12 gap-y-10 pl-36 pr-36 '>

                {
                    products?.length && products.map((product: Product) => <MenuCard animationVariant={variantsRight} rating={product.rating} ingredients={product.ingredients} id={product._id} key={product._id} imgUrl={product.imgLink} price={product.price} productName={product.itemName} />)
                }
            </div>
        </section>
    )
}


export default Menu