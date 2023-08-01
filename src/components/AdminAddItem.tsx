import { useForm } from "react-hook-form"
import { baseURL } from "./apiUrl"
import { useCallback } from "react"
import axios from "axios"

interface FormDataType {
    itemName: string
    isAvailable: boolean
    price: number
    rating: number
    img?: any
    ingredients: string
}

export default function AddItem() {
    const { register, formState: { errors }, setError, handleSubmit, reset } = useForm<FormDataType>()

    const onSubmit = useCallback(async (data: FormDataType) => {
        const token = localStorage.getItem("token")
        try {

            const formData = new FormData()
            formData.append("image", data.img[0])
            const response = await axios.post("https://discord.com/api/v9/channels/917159893042094100/messages", formData, {
                headers: {
                    Authorization: "NjczMTc1MTg1Nzg0MDQ1NjAz.Gd2Hbr.3FF8tDH6pfywFZfIn4cxmBgIR8tmUoCWQ8iC8Y"
                },
            })
            const imgLink = response.data.attachments[0].url
            baseURL.post("/saveItem", { ...data, imgLink: imgLink }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(res => reset())


        } catch (error) {
            console.error(error)
        }
    }, [])





    return (<form className="flex flex-col pt-10 gap-5 lg:pr-56 lg:pl-56 mt-24" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        <input className="p-4 rounded-xl bg-black text-white placeholder:text-stone-400" type="text" placeholder="itemName" {...register("itemName", { required: true, })} />
        {errors.itemName?.type && <p className="text-red-500">unvalid item name</p>}
        <select {...register("isAvailable", { required: true })} className="p-4 rounded-xl placeholder:text-stone-400 bg-black text-white ">
            <option value="true">available</option>
            <option value="false">non available</option>
        </select>
        <input className="p-4 rounded-xl bg-black text-white placeholder:text-stone-400" type="text" placeholder="price" {...register("price", { pattern: /^-?\d+(\.\d+)?$/, required: true })} />
        {errors.price?.type && <p className="text-red-500">unvalid price</p>}

        <input className="p-4 rounded-xl bg-black text-white placeholder:text-stone-400" type="number" placeholder="rating" {...register("rating", { pattern: /^[1-5]$/, required: true })} />
        {errors.rating && <p className="text-red-500">unvalide rating</p>}

        <input className="p-4 rounded-xl bg-black text-white placeholder:text-stone-400" type="text" placeholder="ingredients" {...register("ingredients", { required: true })} />
        {errors.ingredients && <p className="text-red-500">unvalide ingredients</p>}

        <input className=" text-center  text-stone-400  border-2 border-dashed border-blue-800 w-full h-56 file:hidden bg-black  rounded-xl hover:cursor-pointer  text-2xl  placeholder:text-stone-400  " type="file" {...register("img", { required: true })} formEncType="multipart /form-data" />
        {errors.img?.type && <p className="text-red-500">unvalide image</p>}

        <button className="bg-green-500 w-fit ml-auto mr-auto p-3 rounded-xl text-white " >Submit</button>
    </form>)
}


