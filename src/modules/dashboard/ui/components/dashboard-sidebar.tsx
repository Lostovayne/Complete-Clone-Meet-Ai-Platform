"use client"

import Link from "next/link";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,

} from "@/components/ui/sidebar"
import { BotIcon, StarIcon, VideoIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator";

const firstSection = [
  {
    icon: VideoIcon,
    label: "Meetings",
    href: "/meetings"
  }, {
    icon: BotIcon,
    label: "Agents",
    href: "/agents"
  }
]

const secondSection = [
  {
    icon: StarIcon,
    label: "Upgrade",
    href: "/upgrade",
  },
  
];




const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="text-sidebar-accent-foreground" >
        <Link href={"/"} className="flex items-center gap-2 px-2 pt-2" >
          <Image src="/logo.svg" height={36} width={36} alt="logo app" />
          <p className="text-2xl font-semibold" >Meet.AI</p>

        </Link>
      </SidebarHeader>
      <div className="px-4 py-2">
        <Separator className="opacity-10 text-[#5D6B68]" />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {firstSection.map((item) => (
                <SidebarMenuItem key={item.href} >
                  <SidebarMenuButton asChild>
                    <Link href={item.href} >
                      <span className="text-sm font-medium tracking-tight">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

    </Sidebar>
  )
}
export default DashboardSidebar