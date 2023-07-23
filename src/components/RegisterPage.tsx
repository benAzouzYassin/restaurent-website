import { useForm } from "react-hook-form";
import { useState } from "react";
import { } from "astro"
import { baseURL } from "./apiUrl";
import { redirectTo } from "../utils";

interface FormData {
    email: string
    password: string
    phone: string
}

interface ErrorState {
    status: boolean
    message?: string
}



function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [isError, setIsError] = useState<ErrorState>({ status: false })



    const formSubmit = async (data: FormData) => {
        try {
            const response = await baseURL.post("/register", { "name": data.email, "password": data.password, "phone": data.phone })
            if (response && response.data.success == true) {
                localStorage.setItem("token", response.data.token)
                setIsError({ status: false })
                // redirect user
                redirectTo("/cart")

            }
        } catch (error: any) {
            setIsError({ status: true, message: error.response.data.message ?? "something went wrong" })
            console.error("there is an error", error.response.data.message ?? "")

        }

    }


    return <div className="flex w-full flex-row  h-[100vh]">
        <div className="flex flex-col bg-[#171717] h-full  bg-[url(/images/shape-5.png)] pt-20 lg:pt-56 lg:px-96  w-[100%]  px-10 ">
            <h1 className="text-6xl font-semibold mb-5  text-white">Register</h1>
            <form className="flex flex-col gap-8 mt-5" onSubmit={handleSubmit(formSubmit)} autoComplete="off">
                < input placeholder="Your Email" type="email" className="bg-stone-100 font-semibold placeholder:font-normal border-2 shadow-lg border-gray-700 text-xl p-4 rounded-3xl focus-within:outline-0 placeholder:text-gray-800 focus:bg-[#d9e3ec]" {...register("email", { required: true, minLength: 5, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                {errors.email?.type && <p className="text-red-600 mt-[-25px]">Non valid Email </p>}
                < input placeholder="your password" type="password" className="bg-stone-100 font-semibold placeholder:font-normal border-2 shadow-lg border-gray-700 text-xl p-4 rounded-3xl focus-within:outline-0 placeholder:text-gray-800 focus:bg-[#d9e3ec]" {...register("password", { required: true, minLength: 8, maxLength: 20 })} />
                {errors.password?.type && <p className="text-red-600 mt-[-20px]">Non valid password</p>}
                < input placeholder="your phone number" type="tel" className="bg-stone-100 font-semibold placeholder:font-normal border-2 shadow-lg border-gray-700 text-xl p-4 rounded-3xl focus-within:outline-0 placeholder:text-gray-800 focus:bg-[#d9e3ec]" {...register("phone", { required: true, minLength: 8, pattern: /^[0-9]+$/ })} />
                {errors.phone?.type && <p className="text-red-600 mt-[-20px]">Non valid phone</p>}
                {isError.status && <p className="text-lg tex-red-600 font-semibold text-red-500 mt-[-20px]">{isError.message}</p>}
                <button className="bg-white text-2xl  p-3 rounded-full  hover:bg-stone-200">Register </button>
                <a href="/login" className="text-white text-2xl underline mt-[-15px] hover:cursor-pointer hover:text-stone-400  italic">Have an account ?</a>

            </form>
        </div>
    </div>
}
export default RegisterPage