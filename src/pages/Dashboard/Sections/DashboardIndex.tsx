
import { Card } from "@/components/ui/card";
import { Users, Package, ShoppingCart, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "1,234",
    icon: Users,
    trend: "+12%",
  },
  {
    title: "Total Products",
    value: "456",
    icon: Package,
    trend: "+5%",
  },
  {
    title: "Total Orders",
    value: "789",
    icon: ShoppingCart,
    trend: "+8%",
  },
  {
    title: "Revenue",
    value: "$12,345",
    icon: TrendingUp,
    trend: "+15%",
  },
];

const DashboardIndex = () => {
  return (
    <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <p className="text-muted-foreground">Welcome to your admin dashboard</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <p className="text-sm text-green-500 mt-1">{stat.trend}</p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <div className="text-muted-foreground">
          Order data will be displayed here
        </div>
      </Card>
      
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Users</h3>
        <div className="text-muted-foreground">
          User data will be displayed here
        </div>
      </Card>
    </div>
  </div>
  )
}

export default DashboardIndex