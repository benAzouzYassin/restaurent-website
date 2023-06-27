
function Navbar() {
    return (
        <nav className="flex py-4 items-center shadow-md lg:px-36 gap-3 bg-white ">
            <p className="text-5xl mt-[-10px] text-center font-bold font-['roboto'] italic">Resto</p>
            <div className="flex gap-10  pr-10 text-lg  font-medium font-sans ml-16  ">
                <a href="" className="hover:scale-105">Meilleure vente</a>
                <a href="" className="hover:scale-105">Notre Menu</a>
                <a href="/myOrders" className="hover:scale-105">my orders</a>
            </div>
            <a href="/cart/" className="ml-auto scale-125 mr-5"> <img src="/images/cart.svg" alt="cart" width="35px" height="35px" className="hover:cursor-pointer hover:scale-110" /></a>
            <button className="bg-[#FF6A55] p-2 rounded-2xl text-white text-xs font-semibold  italic hover:bg-orange-600 ml-[-15px]"> Commandez </button>
        </nav>
    )
}


export default Navbar