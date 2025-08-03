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
                { title: "Chain of Thoughts", url: "#" },
                { title: "Instructions Override", url: "#" },
                { title: "Language", url: "#" },
            ],
        },
        {
            title: "Indirect Injection",
            icon: FlaskConical,
            items: [
                { title: "Comment", url: "#" },
                { title: "Encoded", url: "#" }
            ],
        },
        {
            title: "Broken Access Control",
            icon: FlaskConical,
            items: [
                { title: "Persona", url: "#" },
                { title: "Chat History", url: "#" }
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
