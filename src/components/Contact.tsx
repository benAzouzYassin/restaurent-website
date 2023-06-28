
function Contact() {
    return (
        <div className="lg:pr-36 lg:pl-36 h-[1000px] bg-[#f5e7c1] grid grid-cols-2 gap-4 pt-20">
            <div className=" w-full h-2/3 py-5 px-5  scale-110 ml-10  mt-10">
                <h2 className="text-6xl font-serif font-semibold italic text-red-500 ">Contact Us anytime<br /> for fast delivery</h2>
                <p className="font-bold text-2xl mt-10 italic ">order by phone </p>
                <p className="text-red-500 font-bold text-3xl">+216 12 123 456</p>
                <div className="flex flex-row gap-10 mt-5 ">
                    <div>
                        <p className="font-bold text-2xl mt-5 italic">Location</p>
                        <p className="text-lg mt-2 text-stone-800">60 East 65th street, <br />   New York</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl italic mt-5">Delivery hours</p>
                        <p className="text-lg mt-2 text-stone-800">Monday-Saturday : </p>
                        <p className="text-lg  text-stone-800">11AM - 11PM</p>
                        <p className="text-lg mt-2 text-stone-800">Sunday : </p>
                        <p className="text-lg  text-stone-800">11AM - 8PM</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mt-5  italic">Takeaway Hours</p>
                        <p className="font-bold text-xl mt-5">Monday-Saturday</p>
                        <p>01PM-10PM</p>
                        <p className="font-bold text-xl mt-5">Sunday :</p>
                        <p>Closed</p>
                    </div>
                </div>
            </div>

            <div className="h-2/3 flex items-center justify-center "><iframe className="h-full rounded-2xl border-[10px] shadow-2xl border-white" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4030.660975726073!2d10.481403848039463!3d36.69522688638198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd50f782264bc3%3A0x48fdb192672e5303!2sRestaurant%20Karoui!5e0!3m2!1sen!2stn!4v1687983562402!5m2!1sen!2stn" width="600" height="450" loading="lazy" ></iframe></div>
        </div>
    )
}

export default Contact