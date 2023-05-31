
function Contact() {
    return (
        <div className="pr-36 pl-36 mt-10 h-[400px]">
            <h1 className="text-5xl italic mb-5 font-bold">
                Nos contacts :
            </h1>
            <div className="w-full h-[60%] flex gap-8 mt-16">
                <div className="flex flex-col pt-12  items-center  justify-center w-2/6 bg-white shadow-2xl rounded-3xl "><img src="/images/phone-big.png" alt="" className="scale-50 mt-[-30%]" />
                    <p className="text-xl font-bold ">53 950 285</p>
                </div>
                <div className="flex flex-col pt-12  items-center  justify-center w-2/6 bg-white shadow-2xl rounded-3xl "><img src="/images/email-big.png" alt="" className="scale-50 mt-[-30%]" />
                    <p className="text-xl font-bold ">karoui@gmail.com</p>
                </div>
                <div className="flex flex-col pt-12  items-center  justify-center w-2/6 bg-white shadow-2xl rounded-3xl "><img src="/images/location.png" alt="" className="scale-75 mt-[-15%]" />
                    <p className="text-xl font-bold  mt-6">rue de tunis,soliamn</p>
                </div>
            </div>
        </div>
    )
}

export default Contact