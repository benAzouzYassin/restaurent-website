import { useForm } from "react-hook-form";
import axios from "axios";

// TODO : create the api calls
// TODO / FINISH THE DESIGN
interface FormData {
    email: string
    password: string
    phone: string
}

async function formSubmit(data: FormData) {
    try {
        const response = await axios.post("http://localhost:5500/register", { "name": data.email, "password": data.password })
        if (response && response.data.success == true) {
            localStorage.setItem("token", response.data.token)
        }
    } catch (error) {

    }

}

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();


    return <div className="flex w-full flex-row  h-[100vh]">
        <div className="w-[55%] bg-[url(/images/shop-img.svg)] bg-no-repeat "> </div>
        <div className="flex flex-col bg-[#33a474] border-l-2 h-full   border-solid pt-56 pl-32  w-[45%] pr-32 ">
            <h1 className="text-6xl font-semibold mb-5  text-white">Register</h1>
            <form className="flex flex-col gap-8 mt-5" onSubmit={handleSubmit(formSubmit)} autoComplete="off">
                < input placeholder="Your Email" type="email" className="bg-[#33a474] font-semibold placeholder:font-normal border-2 shadow-lg border-gray-700 text-xl p-4 rounded-3xl focus-within:outline-0 placeholder:text-gray-800" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                {errors.email?.type && <p className="text-red-600 mt-[-25px]">Non valid Email </p>}
                < input placeholder="your password" type="password" className="bg-[#33a474] font-semibold placeholder:font-normal border-2 shadow-lg border-gray-700 text-xl p-4 rounded-3xl focus-within:outline-0 placeholder:text-gray-800" {...register("password", { required: true, maxLength: 20 })} />
                {errors.password?.type && <p className="text-red-600 mt-[-20px]">Non valid password</p>}
                < input placeholder="your phone number" type="tel" className="bg-[#33a474] font-semibold placeholder:font-normal border-2 shadow-lg border-gray-700 text-xl p-4 rounded-3xl focus-within:outline-0 placeholder:text-gray-800" {...register("phone", { required: true, pattern: /^[0-9]+$/ })} />
                {errors.phone?.type && <p className="text-red-600 mt-[-20px]">Non valid phone</p>}

                <button className="bg-gray-950 text-2xl  p-3 rounded-full text-white hover:bg-gray-900">Register </button>
            </form>
        </div>
    </div>
}
export default RegisterPage