import axios from "axios"
import { useEffect, useState } from "react"
import AddItem from "./AdminAddItem"
import PendingOrders from "./PendingOrders"
import DoneOrders from "./DoneOrders"
import CanceledOrders from "./CanceledOrders"
import { AdminNav } from "./AdminNav"
export type AdminPages = "addItem" | "pendingOrders" | "canceledOrders" | "doneOrders" | "main"

function AdminPage() {
    const [page, setPage] = useState<AdminPages>("main")

    const [isAdmin, setIsAdmin] = useState(false)

    const updatePage = (newPage: AdminPages) => {
        setPage(newPage)
    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.post("http://localhost:5500/admin", {}, { headers: { Authorization: `Bearer ${token}` } })
            .then(data => setIsAdmin(true))
            .catch(err => setIsAdmin(false))
    }, [])

    return <div className="bg-[#1f1f1f] min-h-[100vh]">


        {isAdmin && <>
            {page !== "main" && <AdminNav currentPage={page} updatePage={updatePage} />}
            <div className="lg:pl-36 lg:pr-36">
                {(() => {
                    switch (page) {
                        case 'addItem':
                            return <AddItem />
                        case 'pendingOrders':
                            return <PendingOrders />
                        case 'main':
                            return ""
                        case 'canceledOrders':
                            return <CanceledOrders />
                        case "doneOrders":
                            return <DoneOrders />
                        default:
                            return ""
                    }
                })()}

            </div>
        </>
        }
        {
            page === "main" && <MainPage updatePage={updatePage} />
        }

        {!isAdmin && <p>you have no access to this page</p>}
    </div>
}


function MainPage(props: any) {
    return <div className="lg:pl-36 lg:pr-36   bg-[#1f1f1f] min-h-[100vh]">
        <p className="text-8xl text-center pt-16 font-sans italic font-bold text-white">Welcome Admin! </p>
        <div className="lg:grid-cols-4 grid mt-[-50px] items-center gap-10  min-h-[100vh] ">
            <div className="bg-[#111111] rounded-2xl h-96 hover:cursor-pointer hover:bg-[#171717] hover:scale-95" onClick={() => props.updatePage("addItem")}><p className="text-amber-100 h-full mt-36 text-2xl font-semibold text-center ">AddItem</p></div>
            <div className="bg-[#111111] rounded-2xl h-96 hover:cursor-pointer hover:bg-[#171717] hover:scale-95" onClick={() => props.updatePage("pendingOrders")}><p className="text-amber-100 h-full mt-36 text-2xl font-semibold text-center">Pending orders</p></div>
            <div className="bg-[#111111] rounded-2xl h-96 hover:cursor-pointer hover:bg-[#171717] hover:scale-95" onClick={() => props.updatePage("doneOrders")}><p className="text-amber-100 h-full mt-36 text-2xl font-semibold text-center">Confirmed Orders</p></div>
            <div className="bg-[#111111] rounded-2xl h-96 hover:cursor-pointer hover:bg-[#171717] hover:scale-95" onClick={() => props.updatePage("canceledOrders")}><p className="text-amber-100 h-full mt-36 text-2xl font-semibold text-center">Canceled Orders</p></div>
        </div>
    </div>
}


export default AdminPage