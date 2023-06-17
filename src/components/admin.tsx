import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { set, useForm } from "react-hook-form"

interface FormDataType {
    itemName: string
    isAvailable: boolean
    price: number
    rating: number
    img?: any
    ingredients: string
}

async function onSubmit(data: FormDataType) {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.post("http://localhost:5500/getImgLink", { img: data.img[0] }, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
        const imgLink = response.data
        axios.post("http://localhost:5500/saveItem", { ...data, imgLink: imgLink }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(res => console.log(res))


    } catch (error) {
        console.error(error)
    }
}

function AdminPage() {

    const [isAdmin, setIsAdmin] = useState(false)
    const { register, formState: { errors }, setError, handleSubmit, watch } = useForm<FormDataType>()


    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.post("http://localhost:5500/admin", {}, { headers: { Authorization: `Bearer ${token}` } })
            .then(data => setIsAdmin(true))
            .catch(err => setIsAdmin(false))
    }, [])
    //validate the form and make a call to the backend for creating an element

    return <>


        {isAdmin && <>
            <Navbar />
            <div className="lg:pl-36 lg:pr-36">

                <form className="flex flex-col mt-10 gap-5" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    <h1>add new item to the store</h1>
                    <input className="p-4 rounded-xl" type="text" placeholder="itemName" {...register("itemName", { required: true, })} />
                    {errors.itemName?.type && <p className="text-red-500">unvalid item name</p>}
                    <select {...register("isAvailable", { required: true })} className="p-4 rounded-xl">
                        <option value="true">available</option>
                        <option value="false">non available</option>
                    </select>
                    <input className="p-4 rounded-xl" type="text" placeholder="price" {...register("price", { pattern: /^-?\d+(\.\d+)?$/, required: true })} />
                    {errors.price?.type && <p className="text-red-500">unvalid price</p>}

                    <input className="p-4 rounded-xl" type="number" placeholder="rating" {...register("rating", { pattern: /^[1-5]$/, required: true })} />
                    {errors.rating && <p className="text-red-500">unvalide rating</p>}

                    <input className="p-4 rounded-xl" type="text" placeholder="ingredients" {...register("ingredients", { required: true })} />
                    {errors.ingredients && <p className="text-red-500">unvalide ingredients</p>}

                    <input className="p-4 rounded-xl" type="file" {...register("img", { required: true })} formEncType="multipart /form-data" />
                    {errors.img?.type && <p className="text-red-500">unvalide image</p>}

                    <button className="bg-green-500 w-fit ml-auto mr-auto p-3 rounded-xl text-white">Submit</button>
                </form>
            </div>
        </>}
        {!isAdmin && <p>you have no access to this page</p>}
    </>
}
export default AdminPage