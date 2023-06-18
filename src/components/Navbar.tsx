
function Navbar() {
    return (
        <nav className="italic flex py-3 items-center shadow-md border-b-[1px] border-black lg:px-36 gap-5 ">
            <p className="text-2xl font-bold text-orange-700  ">EL KAROUI</p>
            <div className="flex gap-8  ml-auto pr-10 text-sm  font-semibold">
                <a href="" className="hover:scale-105">Meilleure vente</a>
                <a href="" className="hover:scale-105">Notre Menu</a>
                <a href="" className="hover:scale-105">my orders</a>
            </div>
            <a href="/cart/">  <img src="/images/cart.svg" alt="cart" width="35px" height="35px" className="hover:cursor-pointer hover:scale-110" /></a>
            <button className="bg-[#FF6A55] p-2 rounded-2xl text-white text-xs font-semibold  italic hover:bg-orange-600 ml-[-15px]"> Commandez </button>
        </nav>
    )
}


export default Navbar