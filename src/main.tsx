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
import Ignore from "./pages/Modules/DirectInjection/Ignore.tsx"
import ReasonAndAct from "./pages/Modules/DirectInjection/ReasonAndAct.tsx"
import ChainOfThoughts from "./pages/Modules/DirectInjection/ChainOfThoughts.tsx"


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
        element: <Ignore/>
      },
      {
        path: "/u/direct-injection/ignore",
        element: <Ignore/>
      },
      {
        path: "/u/direct-injection/reason-act",
        element: <ReasonAndAct/>
      },
      {
        path: "/u/direct-injection/chain-of-thoughts",
        element: <ChainOfThoughts/>
      },
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
