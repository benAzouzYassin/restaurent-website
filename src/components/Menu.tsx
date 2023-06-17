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
        <div className=' pl-36 pr-36'>
            <h1 className=' text-5xl italic mb-5 font-bold'>Nos produits : </h1>
            <section className='  flex flex-col  h-fit py-6 rounded-xl shadow-2xl border-[1px] border-black '>
                <div className='grid grid-cols-3 gap-x-10  h-[700px] overflow-y-scroll w-[90%] ml-auto mr-auto gap-y-10 py-5'>
                    {
                        products?.length && products.map((product: Product) => <MenuCard rating={product.rating} ingredients={product.ingredients} id={product._id} key={product._id} imgUrl={product.imgLink} price={product.price} productName={product.itemName} />)
                    }
                </div>
            </section>
        </div>
    )
}


export default Menu