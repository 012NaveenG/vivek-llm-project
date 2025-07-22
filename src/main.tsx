import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from "./pages/auth/SignIn.tsx"
import Landing from "./pages/landing/Landing.tsx"
import Signup from "./pages/auth/Signup.tsx"
import UserLayout from "./layouts/UserLayout.tsx"
import { SidebarProvider } from "./components/ui/sidebar.tsx"
import HomeLayout from "./layouts/HomeLayout.tsx"


const router = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path:"",
        element:<Landing/>
      },
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <Signup />
      },
    ]

  },

  {
    path: '/u',
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: "User dashboard"
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <SidebarProvider>

      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" richColors />
    </SidebarProvider>

  </ThemeProvider>
)
