
interface Props {
    price: number
    img: string
    name: string
    count: number
    orderState: "pending" | "done" | "canceled"
    ingredients: string[]
}
function OrderItem(props: Props) {
    return <>
        <div className="  bg-[#1f1f1f] text-white  h-40 rounded-xl pl-2  relative">
            <div></div>
            <div className="flex px-10 py-4">
                <div className="flex flex-col ">
                    <h1 className="text-5xl text-amber-100 italic font-semibold  w-full">{props.name} <span className="text-xl " style={{ color: props.orderState != "canceled" ? "#16A34A" : "#EF4444" }} >{props.orderState}</span></h1>
                    <p className=" mt-1 text-lg text-stone-300 font-normal"><span className="border-b-[1px] border-stone-200 text-xl italic font-semibold text-stone-200">Ingredients</span><span className="text-xl font-semibold italic"> : </span>{props.ingredients.join(" ")}</p>
                    <p className="mt-2 text-2xl italic font-semibold border-b-[1px] border-white w-fit">Total Price :<span className="font-normal"> {props.price * props.count}</span> </p>
                </div>
                <div style={{ backgroundImage: `url(${props.img}` }} className={`bg-center  absolute w-1/4 ml-auto rounded-xl top-0 right-0 h-full bg-cover bg-no-repeat`}></div>
            </div>
        </div>
    </>

}
export default OrderItem