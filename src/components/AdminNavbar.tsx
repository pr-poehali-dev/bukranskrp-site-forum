import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Settings,
  Users,
  MessageSquare,
} from "lucide-react";

const AdminNavbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    {
      title: "Панель управления",
      icon: <LayoutDashboard className="h-5 w-5 mr-2" />,
      path: "/admin",
    },
    {
      title: "Новости",
      icon: <FileText className="h-5 w-5 mr-2" />,
      path: "/admin/news",
    },
    {
      title: "Контент",
      icon: <FileText className="h-5 w-5 mr-2" />,
      path: "/admin/content",
    },
    {
      title: "Пользователи",
      icon: <Users className="h-5 w-5 mr-2" />,
      path: "/admin/users",
    },
    {
      title: "Форум",
      icon: <MessageSquare className="h-5 w-5 mr-2" />,
      path: "/admin/forum",
    },
    {
      title: "Настройки",
      icon: <Settings className="h-5 w-5 mr-2" />,
      path: "/admin/settings",
    },
  ];
  
  return (
    <nav className="space-y-2">
      <div className="text-sm font-medium mb-4">Админ-панель</div>
      {navItems.map((item) => (
        <Button
          key={item.path}
          variant={isActive(item.path) ? "secondary" : "ghost"}
          className="w-full justify-start"
          asChild
        >
          <Link to={item.path}>
            {item.icon}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
};

export default AdminNavbar;
