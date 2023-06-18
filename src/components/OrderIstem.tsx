
interface Props {
    price: number
    img: string
    name: string
    count: number
    orderState: "pending" | "done" | "canceled"
}
function OrderItem(props: Props) {
    return <>
        && <div className=" pl-5 bg-slate-400 h-36">
            <div></div>
            <div className="flex">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold">{props.name} <span className="text-sm">x{props.count}</span></h1>
                    <p>{props.orderState}</p>
                    <p>{props.price * props.count}</p>
                </div>
                <div style={{ backgroundImage: `url(${props.img}` }} className={`bg-center h-36 w-1/4 ml-auto`}></div>
            </div>
        </div>
    </>

}
export default OrderItem