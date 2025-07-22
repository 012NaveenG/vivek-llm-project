import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { SidebarTrigger } from "./ui/sidebar"

const Navbar = () => {
  return (
    <header className="bg-sidebar flex items-center justify-between w-full px-5 py-4 border-b ">
     
      <div className="flex items-center gap-1">
        <SidebarTrigger />
        <h1 className="font-bold text-xl text-primary">LOGO</h1>
      </div>

      
      <div className="hidden sm:flex flex-1 justify-center">
        <p className="font-semibold text-lg">
          Welcome,&nbsp;
          <span className="text-violet-500 font-bold">Jonny Lever</span>
        </p>
      </div>

      
      <div className="flex items-center gap-3">
        <ModeToggle />
        <img
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
          alt="User profile"
          className="w-8 h-8 rounded-full border-2 border-neutral-400 object-cover"
        />
        <Button size="sm" variant="destructive" className="ml-1">
          Logout
        </Button>
      </div>
    </header>
  )
}

export default Navbar
