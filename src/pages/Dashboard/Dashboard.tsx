import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Outlet } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "@/api/backend/authApi"
import Loader from "@/components/Loader"
 
export default function Dashboard() {
  // const{data,isLoading} = useQuery({
  //   queryFn:getUser,
  //   queryKey:['user'],
  //   staleTime:1000
  // })
  
  // if(!data) return <Loader/>

  return (
    <div className="min-h-screen flex w-full  mt-20">
    <SidebarProvider className="">
       <AppSidebar />
       <main className="w-full">
         <SidebarTrigger  />
         <div className="md:pl-8 px-4 ">
         <Outlet/>
         </div>
       </main>
     </SidebarProvider>
   
    </div>
  )
}
// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <main className="bg-red-500 w-full">
//         <SidebarTrigger />
//         {children}
//       </main>
//     </SidebarProvider>
//   )
// }