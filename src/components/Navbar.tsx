import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-5 py-2 border-b ">
            <h1 className="font-bold text-2xl">LOGO</h1>
            <p className="font-semibold text-xl text-center hidden sm:block lg:block">Welcome, <span className="text-violet-500 font-bold text-xl">Jonny Lever</span>
            </p>
            <div className="flex items-center justify-center gap-2">
                <ModeToggle />
                <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt="profile_image" className="w-10 h-10 rounded-full object-center border-2 border-neutral-400 object-cover" />
                <Button className=" cursor-pointer" variant={"destructive"}>Logout</Button>
            </div>

        </div>
    )
}

export default Navbar
