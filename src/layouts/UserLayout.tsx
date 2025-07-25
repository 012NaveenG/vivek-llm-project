import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
     
      <AppSidebar />

     
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 bg-muted">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
