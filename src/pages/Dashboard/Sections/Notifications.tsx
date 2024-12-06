
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New Order Received",
    message: "You have received a new order from John Doe",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 2,
    title: "Low Stock Alert",
    message: "Product 'Wireless Headphones' is running low on stock",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 3,
    title: "New User Registration",
    message: "A new user has registered on your platform",
    time: "2 hours ago",
    read: true,
  },
];

const Notifications = () => {
  return (
  
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-muted-foreground">Manage your notifications here</p>
          </div>
          <Button style={{ backgroundColor: "#9B87F5" }} className="hover:bg-[#8B77E5]">
            Mark All as Read
          </Button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`p-4 ${notification.read ? 'bg-background' : 'bg-muted'}`}>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#9B87F5] p-2">
                  <Bell className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{notification.title}</h3>
                  <p className="text-muted-foreground">{notification.message}</p>
                  <p className="text-sm text-muted-foreground mt-1">{notification.time}</p>
                </div>
                {!notification.read && (
                  <div className="h-2 w-2 rounded-full bg-[#9B87F5]" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    
  );
};

export default Notifications;