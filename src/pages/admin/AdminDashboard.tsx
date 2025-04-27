import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import {
  LayoutDashboard,
  FileText,
  Settings,
  LogOut,
  Users,
  MessageSquare,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AdminNavbar from "@/components/AdminNavbar";

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [username, setUsername] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).username : "Администратор";
  });

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    
    toast({
      title: "Выход выполнен",
      description: "Вы успешно вышли из системы",
    });
    
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Admin Header */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link to="/admin" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-clip-text text-transparent hero-gradient">
                Букранск РП
              </span>
              <span className="text-sm font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                Админ
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/admin/notifications">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </Link>
            </Button>
            
            <Separator orientation="vertical" className="h-8" />
            
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt={username} />
                <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{username}</p>
                <p className="text-xs text-muted-foreground">Администратор</p>
              </div>
            </div>
            
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] py-8">
        <aside className="hidden md:block">
          <AdminNavbar />
        </aside>
        
        <main>
          <h1 className="text-3xl font-bold tracking-tight mb-6">Панель управления</h1>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Пользователи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-muted-foreground">
                  +12% с прошлого месяца
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Темы на форуме</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92</div>
                <p className="text-xs text-muted-foreground">
                  +8% с прошлого месяца
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Активных игроков</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">64</div>
                <p className="text-xs text-muted-foreground">
                  -3% с прошлой недели
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="recent">Последние действия</TabsTrigger>
              <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Быстрые действия</CardTitle>
                    <CardDescription>
                      Основные операции для управления сайтом
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <Button variant="outline" className="h-auto flex-col gap-2 p-4" asChild>
                        <Link to="/admin/news">
                          <FileText className="h-6 w-6 mb-2" />
                          <span>Добавить новость</span>
                        </Link>
                      </Button>
                      
                      <Button variant="outline" className="h-auto flex-col gap-2 p-4" asChild>
                        <Link to="/admin/content">
                          <LayoutDashboard className="h-6 w-6 mb-2" />
                          <span>Редактировать контент</span>
                        </Link>
                      </Button>
                      
                      <Button variant="outline" className="h-auto flex-col gap-2 p-4" asChild>
                        <Link to="/admin/users">
                          <Users className="h-6 w-6 mb-2" />
                          <span>Управление пользователями</span>
                        </Link>
                      </Button>
                      
                      <Button variant="outline" className="h-auto flex-col gap-2 p-4" asChild>
                        <Link to="/admin/forum">
                          <MessageSquare className="h-6 w-6 mb-2" />
                          <span>Модерация форума</span>
                        </Link>
                      </Button>
                      
                      <Button variant="outline" className="h-auto flex-col gap-2 p-4" asChild>
                        <Link to="/admin/settings">
                          <Settings className="h-6 w-6 mb-2" />
                          <span>Настройки сайта</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Последние входы в систему</CardTitle>
                    <CardDescription>
                      История входов администраторов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-xs text-muted-foreground">
                          <th className="p-2">Пользователь</th>
                          <th className="p-2">IP адрес</th>
                          <th className="p-2">Время</th>
                          <th className="p-2">Статус</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-sm border-t">
                          <td className="p-2">admin</td>
                          <td className="p-2">192.168.1.1</td>
                          <td className="p-2">Сегодня, 10:25</td>
                          <td className="p-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Успешно</span>
                          </td>
                        </tr>
                        <tr className="text-sm border-t">
                          <td className="p-2">moderator</td>
                          <td className="p-2">192.168.1.2</td>
                          <td className="p-2">Вчера, 18:10</td>
                          <td className="p-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Успешно</span>
                          </td>
                        </tr>
                        <tr className="text-sm border-t">
                          <td className="p-2">unknown</td>
                          <td className="p-2">192.168.1.3</td>
                          <td className="p-2">Вчера, 16:45</td>
                          <td className="p-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">Отказано</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="recent">
              <Card>
                <CardHeader>
                  <CardTitle>Последние действия</CardTitle>
                  <CardDescription>
                    История действий администраторов на сайте
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 border-l-4 border-primary pl-4">
                      <div className="flex-1">
                        <p className="font-medium">Добавлена новость "Обновление правил сервера"</p>
                        <p className="text-sm text-muted-foreground">admin - Сегодня, 09:15</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 border-l-4 border-primary pl-4">
                      <div className="flex-1">
                        <p className="font-medium">Отредактирован раздел "О проекте"</p>
                        <p className="text-sm text-muted-foreground">admin - Вчера, 16:30</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 border-l-4 border-primary pl-4">
                      <div className="flex-1">
                        <p className="font-medium">Забанен пользователь user1234</p>
                        <p className="text-sm text-muted-foreground">moderator - Вчера, 14:22</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics">
              <div className="flex items-center justify-center p-12">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Аналитика в разработке</h3>
                  <p className="text-muted-foreground">
                    Этот раздел будет доступен в следующем обновлении
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
