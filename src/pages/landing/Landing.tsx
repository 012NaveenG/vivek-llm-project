import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Landing = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const hasSeenVideo = localStorage.getItem("hasSeenSplash")

        if (hasSeenVideo) {
            // User already saw splash, directly go to login
            navigate("/sign-in")
        } else {
            // Play splash for 3 sec, then redirect and set flag
            const timer = setTimeout(() => {
                localStorage.setItem("hasSeenSplash", "true")
                navigate("/sign-in")
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [navigate])

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-black overflow-hidden">
            <video
                src="https://videos.pexels.com/video-files/3125427/3125427-uhd_2560_1440_25fps.mp4" 
                autoPlay
                muted
                className="h-full w-full object-cover"
            />
        </div>
    )
}

export default Landing
