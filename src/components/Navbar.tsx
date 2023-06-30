
function Navbar() {
    return (
        <nav>

            <div className="flex py-4 items-center text-white lg:px-36 gap-3 shadow-2xl   relative z-10">
                <p className="text-5xl mt-[-10px] text-center font-bold font-['roboto'] italic">Resto</p>
                <div className="flex gap-10  pr-10 text-lg  font-medium font-sans ml-16  ">
                    <a href="" className="hover:scale-105"> Home Page</a>
                    <a href="" className="hover:scale-105">Notre Menu</a>
                    <a href="/myOrders" className="hover:scale-105">my orders</a>
                </div>
                <a href="/cart/" className="ml-auto scale-125 mr-5"> <img src="/images/cart.svg" alt="cart" width="35px" height="35px" className="hover:cursor-pointer hover:scale-110 z-10" /></a>
            </div>
            <hr className="text-white bg-white w-full opacity-30" />

        </nav>
    )
}


export default Navbar