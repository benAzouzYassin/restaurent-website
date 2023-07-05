import type { AdminPages } from "./admin"

interface Props {
    updatePage: (newPage: AdminPages) => void
    currentPage: string
}
export function AdminNav(props: Props) {
    const selectedStyles: React.CSSProperties = { backgroundColor: "black", color: "white" }
    return <div className="w-full bg-white text-black lg:pl-36 lg:pr-36 h-14 font-sans text-xl  pb-1 flex items-center">
        <button className="bg-white p-3 italic rounded-xl mt-1" onClick={() => props.updatePage("main")}>Main Page</button>
        <button className="bg-white p-3 italic rounded-xl mt-1" style={props.currentPage == "addItem" ? selectedStyles : {}} onClick={() => props.updatePage("addItem")}>Add new Item</button>
        <button className="bg-white p-3 italic rounded-xl mt-1 " style={props.currentPage == "pendingOrders" ? selectedStyles : {}} onClick={() => props.updatePage("pendingOrders")}>Pending Items</button>
        <button className="bg-white p-3 italic rounded-xl mt-1 " style={props.currentPage == "canceledOrders" ? selectedStyles : {}} onClick={() => props.updatePage("canceledOrders")}>canceledOrders</button>
        <button className="bg-white p-3 italic rounded-xl mt-1" style={props.currentPage == "doneOrders" ? selectedStyles : {}} onClick={() => props.updatePage("doneOrders")}>doneOrders</button>

    </div>

}