import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import AdminNavbar from "@/components/AdminNavbar";
import { toast as sonnerToast } from "sonner";

const AdminNews = () => {
  const { toast } = useToast();
  const [username] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).username : "Администратор";
  });
  
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: "Обновление правил сервера",
      content: "Мы обновили правила сервера для более комфортной игры.",
      date: "25.04.2025",
      author: "admin"
    },
    {
      id: 2,
      title: "Новый район в Букранске",
      content: "Открыт новый район для ролевых игр с уникальными локациями.",
      date: "20.04.2025",
      author: "admin"
    }
  ]);

  const handleAddNews = () => {
    if (!newsTitle.trim() || !newsContent.trim()) {
      sonnerToast.error("Ошибка", {
        description: "Заполните все поля"
      });
      return;
    }

    const newNews = {
      id: newsList.length + 1,
      title: newsTitle,
      content: newsContent,
      date: new Date().toLocaleDateString('ru-RU'),
      author: username
    };

    setNewsList([newNews, ...newsList]);
    setNewsTitle("");
    setNewsContent("");

    sonnerToast.success("Новость добавлена", {
      description: "Новость успешно опубликована"
    });
  };

  const handleDeleteNews = (id: number) => {
    setNewsList(newsList.filter(item => item.id !== id));
    sonnerToast.success("Новость удалена");
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
          </div>
        </div>
      </header>
      
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] py-8">
        <aside className="hidden md:block">
          <AdminNavbar />
        </aside>
        
        <main>
          <h1 className="text-3xl font-bold tracking-tight mb-6">Управление новостями</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Добавить новость</CardTitle>
              <CardDescription>
                Создайте новую новость для главной страницы сайта
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Заголовок</label>
                <Input 
                  value={newsTitle} 
                  onChange={e => setNewsTitle(e.target.value)} 
                  placeholder="Введите заголовок новости" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Содержание</label>
                <Textarea 
                  value={newsContent} 
                  onChange={e => setNewsContent(e.target.value)} 
                  placeholder="Введите текст новости"
                  rows={5}
                />
              </div>
              
              <Button onClick={handleAddNews}>Опубликовать</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Список новостей</CardTitle>
              <CardDescription>
                Управление существующими новостями
              </CardDescription>
            </CardHeader>
            <CardContent>
              {newsList.length > 0 ? (
                <div className="space-y-4">
                  {newsList.map((news) => (
                    <Card key={news.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{news.title}</h3>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Редактировать</Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleDeleteNews(news.id)}
                            >
                              Удалить
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{news.content}</p>
                        <div className="text-xs text-muted-foreground">
                          {news.date} • {news.author}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Новостей еще нет</p>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminNews;
