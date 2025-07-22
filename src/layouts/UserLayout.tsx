import Navbar from "@/components/Navbar.tsx"
import { Outlet } from "react-router-dom"

const UserLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-between">
                <Outlet />
            </div>
        </div>
    )
}

export default UserLayout
