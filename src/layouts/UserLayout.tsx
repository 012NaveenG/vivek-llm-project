import AppSidebar from "@/components/AppSidebar.tsx";
import Navbar from "@/components/Navbar.tsx";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
     
      <AppSidebar />

     
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-1 bg-muted scrollbar-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
