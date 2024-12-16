
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { dashboardMenuItems } from "@/constantes";

import { useAuthContext } from "@/context/authContext";
// isso aqui coloco em constantes

export function AppSidebar() {
  const location = useLocation();
  const{user,isLoading} = useAuthContext()


  return (
    <Sidebar className="mt-20 bg-white ">
      <SidebarContent className="bg-white">
        <div className="p-4">
          <h1 className="text-xl font-bold">Control Panel</h1>
          {!isLoading &&<p className="text-xs font-light text-slate-400 capitalize pt-1">{`@${user?.name.toLowerCase()}`}</p>
            
          }
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                dashboardMenuItems.map((item) => {
                  if(item.admin && user?.role!="ADMIN") return
                  return(
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          to={item.path}
                          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                            location.pathname === item.path
                              ? "bg-[#9B87F5] text-white"
                              : "hover:bg-[#9B87F5] hover:text-white"
                          }`}
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
