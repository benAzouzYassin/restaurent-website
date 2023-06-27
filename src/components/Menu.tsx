import MenuCard from './MenuCard'
import "../styles.css"
import { useEffect, useState } from 'react'
import { baseURL } from "./apiUrl"
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
        <section className=' pl-36 pr-36 bg-[#191919] h-[200vh]'>
            <div className='w-full grid lg:grid-cols-3  pt-32 z-10 gap-x-32 gap-y-10 '>
                {
                    products?.length && products.map((product: Product) => <MenuCard rating={product.rating} ingredients={product.ingredients} id={product._id} key={product._id} imgUrl={product.imgLink} price={product.price} productName={product.itemName} />)
                }
            </div>
        </section>
    )
}


export default Menu