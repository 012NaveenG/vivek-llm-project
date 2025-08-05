import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@radix-ui/react-collapsible"
import {
    Sidebar,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "./ui/sidebar"
import { FlaskConical, FolderKanban } from "lucide-react"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

const AppSidebar = () => {
    const navMain = [
        {
            title: "Direct Injection",
            icon: FolderKanban,
            isActive: true,
            items: [
                { title: "Ignore", url: "/u/direct-injection/ignore" },
                { title: "Reason and Act ", url: "/u/direct-injection/reason-act" },
                { title: "Chain of Thoughts", url: "/u/direct-injection/chain-of-thoughts" },
                { title: "Instructions Override", url: "/u/direct-injection/instructions-override" },
                { title: "Language", url: "/u/direct-injection/language" },
            ],
        },
        {
            title: "Indirect Injection",
            icon: FlaskConical,
            items: [
                { title: "Comment", url: "/u/indirect-injection/comment" },
                { title: "Encoded", url: "/u/indirect-injection/encoded" }
            ],
        },
        {
            title: "Broken Access Control",
            icon: FlaskConical,
            items: [
                { title: "Persona", url: "/u/broken-acess-control/persona" },
                { title: "Chat History", url: "/u/broken-acess-control/chat-history" }
            ],
        },
        {
            title: "Insecure Output Handling",
            icon: FlaskConical,
            items: [
                { title: "Code Injection", url: "/u/insecure-output-handling/code-injection" },
                { title: "SQL", url: "/u/insecure-output-handling/sql-injection" }
            ],
        },
        {
            title: "Hallucinations",
            icon: FlaskConical,
            items: [
                { title: "Misinformation", url: "/u/hallucinations/misinformation" },
            ],
        },
        {
            title: "Sensitive Info Disclosure",
            icon: FlaskConical,
            items: [
                { title: "Misinformation", url: "/u/sensitive-info-disclosure/system-prompt-leakage" },
            ],
        },
        {
            title: "Rug Pull",
            icon: FlaskConical,
            items: [
                { title: "Rug Pull", url: "/u/rugpull/rug-pull" },
            ],
        },
        {
            title: "SSRF",
            icon: FlaskConical,
            items: [
                { title: "SSRF", url: "/u/ssrf/ssrf" },
            ],
        },
        {
            title: "Supply Chain",
            icon: FlaskConical,
            items: [
                { title: "Supply Chain", url: "/u/supply-chain/supplychain" },
            ],
        },
        {
            title: "Unbounded Consumption",
            icon: FlaskConical,
            items: [
                { title: "Unbounded Consumption", url: "/u/unbounded-consumption/unboundedconsumption" },
            ],
        },
        {
            title: "Tool Shadowing",
            icon: FlaskConical,
            items: [
                { title: "Tool Shadowing", url: "/u/tool-shadowing/toolshadowing" },
            ],
        },
        {
            title: "Token Theft",
            icon: FlaskConical,
            items: [
                { title: "Token Theft", url: "/u/token-theft/tokentheft" },
            ],
        },
        {
            title: "Excessive Agency",
            icon: FlaskConical,
            items: [
                { title: "Excessive Agency", url: "/u/excessive-agency/excessive-agency" },
            ],
        },
    ]
    return (
        <Sidebar>
            <NavMain items={navMain} />
        </Sidebar>
    )
}

export default AppSidebar



export function NavMain({
    items,
}: {
    items: {
        title: string
        icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Modules</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.items?.map((subItem) => (
                                        <SidebarMenuSubItem key={subItem.title}>
                                            <SidebarMenuSubButton asChild>
                                                <Link to={subItem.url}>
                                                    {subItem.title}
                                                </Link>

                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
