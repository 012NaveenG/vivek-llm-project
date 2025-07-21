import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from "./pages/auth/SignIn.tsx"
import Landing from "./pages/landing/Landing.tsx"
import Signup from "./pages/auth/Signup.tsx"


const router = createBrowserRouter([
  {
    path: "",
    element: <Landing/>,
    
  },
  {
    path:"/sign-in",
    element:<SignIn/>
  },
  {
    path:"/sign-up",
    element:<Signup/>
  }
])
createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}></RouterProvider>
    <Toaster position="top-center" richColors   />
  </ThemeProvider>
)
