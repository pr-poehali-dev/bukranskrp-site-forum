import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  LayoutDashboard,
  Settings,
  Users,
  MessageSquare,
} from "lucide-react";

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const QuickAction = ({ icon, label, path }: QuickActionProps) => {
  return (
    <Button variant="outline" className="h-auto flex-col gap-2 p-4" asChild>
      <Link to={path}>
        {icon}
        <span>{label}</span>
      </Link>
    </Button>
  );
};

const QuickActions = () => {
  const actions = [
    {
      icon: <FileText className="h-6 w-6 mb-2" />,
      label: "Добавить новость",
      path: "/admin/news"
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 mb-2" />,
      label: "Редактировать контент",
      path: "/admin/content"
    },
    {
      icon: <Users className="h-6 w-6 mb-2" />,
      label: "Управление пользователями",
      path: "/admin/users"
    },
    {
      icon: <MessageSquare className="h-6 w-6 mb-2" />,
      label: "Модерация форума",
      path: "/admin/forum"
    },
    {
      icon: <Settings className="h-6 w-6 mb-2" />,
      label: "Настройки сайта",
      path: "/admin/settings"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Быстрые действия</CardTitle>
        <CardDescription>
          Основные операции для управления сайтом
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <QuickAction
              key={index}
              icon={action.icon}
              label={action.label}
              path={action.path}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
