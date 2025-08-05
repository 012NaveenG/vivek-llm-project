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
import InstructionOverride from "./pages/Modules/DirectInjection/InstructionOverride.tsx"
import { Language } from "./pages/Modules/DirectInjection/Language.tsx"
// import Comment from "./pages/Modules/IndirectInjection/Comment.tsx"
import Comment2 from "./pages/Modules/IndirectInjection/Comment2.tsx"
import Encoded from "./pages/Modules/IndirectInjection/Encoded.tsx"
import Persona from "./pages/Modules/BrokenAcessControl/Persona.tsx"
import ChatHistory from "./pages/Modules/BrokenAcessControl/ChatHistory.tsx"
import CodeInjection from "./pages/Modules/InsecureOutputHandling/CodeInjection.tsx"
import SQLInjection from "./pages/Modules/InsecureOutputHandling/SQLInjection.tsx"
import Misinformation from "./pages/Modules/Hallucinations/Misinformation.tsx"
import SystemPromptLeakage from "./pages/Modules/SensitiveInformationDisclosure/SystemPromptLeakage.tsx"


const router = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Landing />
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
        element: <Ignore />
      },

      // Module-1: Direct Injection
      {
        path: "/u/direct-injection/ignore",
        element: <Ignore />
      },
      {
        path: "/u/direct-injection/reason-act",
        element: <ReasonAndAct />
      },
      {
        path: "/u/direct-injection/chain-of-thoughts",
        element: <ChainOfThoughts />
      },
      {
        path: "/u/direct-injection/instructions-override",
        element: <InstructionOverride />
      },
      {
        path: "/u/direct-injection/language",
        element: <Language />
      },


      // Module-2: Indirect Injection
      {
        path: "/u/indirect-injection/comment",
        element: <Comment2 />
      },
      {
        path: "/u/indirect-injection/encoded",
        element: <Encoded />
      },

      // Module-3: Broken Access Control
      {
        path: "/u/broken-acess-control/persona",
        element: <Persona />
      },
      {
        path: "/u/broken-acess-control/chat-history",
        element: <ChatHistory />
      },


      // Module-4: Insecure Output Handling
      {
        path: "/u/insecure-output-handling/code-injection",
        element: <CodeInjection />
      },
      {
        path: "/u/insecure-output-handling/sql-injection",
        element: <SQLInjection />
      },

      // Module-5: Hallucinations	
      {
        path: "/u/hallucinations/misinformation",
        element: <Misinformation />
      },

      // Module-6: Sensitive Information Disclosure	
      {
        path: "/u/sensitive-info-disclosure/system-prompt-leakage",
        element: <SystemPromptLeakage />
      },
     
      // Module-7: Rug Pull	
      {
        path: "/u/rugpull/rug-pull",
        element: <SystemPromptLeakage />
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
