import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";


interface FormData {
    email: string
    password: string
}

interface ApiState {
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    data?: unknown
    error?: string
}

function cartUrl() {
    const currentUrl = window.location.href.split("/")
    currentUrl[currentUrl.length - 2] = "cart"
    const cartUrl = currentUrl.join("/")
    return cartUrl

}

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [apiState, setApiState] = useState<ApiState>({ isError: false, isSuccess: false, isLoading: false })
    const formSubmit = async (data: FormData) => {
        try {
            const response = await axios.post("http://localhost:5500/login", { "name": data.email, "password": data.password })
            if (response && response.data.success == true) {
                localStorage.setItem("token", response.data.token)
                console.log(response)
                setApiState({ isSuccess: true, isError: false, isLoading: false, data: response.data })
                //  redirect user
                window.location.replace(cartUrl())
            } else if (response.status == 401) {
                console.log(response)
                setApiState({ isSuccess: false, isError: true, isLoading: false, error: "non valid username or password" })

            }
        } catch (error) {
            setApiState({ isSuccess: false, isError: true, isLoading: false, error: "non valid username or password" })
            console.error(error)

        }


    }

    return <div className="flex w-full flex-row  h-[100vh]">
        <div className="w-[55%] bg-[url(/images/shop-img.svg)] bg-no-repeat "> </div>
        <div className="flex flex-col bg-[#33a474] border-l-2 h-full   border-solid pt-56 pl-32  w-[45%] pr-32 ">
            <h1 className="text-6xl font-semibold mb-5  text-white">Login</h1>
            <form className="flex flex-col gap-8 mt-5" onSubmit={handleSubmit(formSubmit)} autoComplete="off">
                < input placeholder="Your Email" type="email" className="bg-[#33a474] font-semibold placeholder:font-normal border-2 shadow-lg border-gray-700 text-xl p-4 rounded-3xl focus-within:outline-0 placeholder:text-gray-800" {...register("email", { required: true, minLength: 5, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                {errors.email?.type && <p className="text-red-600 mt-[-25px]">Non valid Email </p>}
                < input placeholder="your password" type="password" className="bg-[#33a474] font-semibold placeholder:font-normal border-2 shadow-lg border-gray-700 text-xl p-4 rounded-3xl focus-within:outline-0 placeholder:text-gray-800" {...register("password", { required: true, minLength: 8, maxLength: 20 })} />
                {errors.password?.type && <p className="text-red-600 mt-[-20px]">Non valid password</p>}
                {apiState.isError && <p className="text-red-600 font-bold">{apiState.error}</p>}
                <button className="bg-gray-950 text-2xl  p-3 rounded-full text-white hover:bg-gray-900">Login </button>
            </form>
        </div>
    </div>
}
export default Login