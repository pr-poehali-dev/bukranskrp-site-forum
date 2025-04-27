import { useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import AdminHeader from "@/components/admin/AdminHeader";
import StatisticsCards from "@/components/admin/StatisticsCards";
import DashboardTabs from "@/components/admin/DashboardTabs";

const AdminDashboard = () => {
  const [username] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).username : "Администратор";
  });

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader username={username} />
      
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] py-8">
        <aside className="hidden md:block">
          <AdminNavbar />
        </aside>
        
        <main>
          <h1 className="text-3xl font-bold tracking-tight mb-6">Панель управления</h1>
          
          <StatisticsCards />
          
          <DashboardTabs />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
