import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminNavbar from "@/components/AdminNavbar";
import { toast } from "sonner";

const AdminContent = () => {
  const [username] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).username : "Администратор";
  });

  // Стейт для редактирования главной страницы
  const [heroTitle, setHeroTitle] = useState("Добро пожаловать в Букранск РП");
  const [heroDescription, setHeroDescription] = useState("Уникальный мир для ролевых игр, где каждый может стать тем, кем хочет!");
  const [featuresData, setFeaturesData] = useState([
    {
      id: 1,
      title: "Реалистичный мир",
      description: "Проработанный мир с детальными локациями и атмосферой",
      icon: "map"
    },
    {
      id: 2,
      title: "Экономика",
      description: "Развитая экономическая система с возможностью бизнеса",
      icon: "wallet"
    },
    {
      id: 3,
      title: "Сообщество",
      description: "Дружелюбное сообщество игроков и справедливая администрация",
      icon: "users"
    }
  ]);

  // Стейт для редактирования контактов
  const [contactEmail, setContactEmail] = useState("support@bukransk-rp.ru");
  const [contactDiscord, setContactDiscord] = useState("discord.gg/bukranskrp");
  const [contactVK, setContactVK] = useState("vk.com/bukranskrp");

  // Функции для сохранения изменений
  const handleSaveMainPage = () => {
    toast.success("Главная страница обновлена", {
      description: "Изменения успешно сохранены"
    });
  };

  const handleSaveContacts = () => {
    toast.success("Контакты обновлены", {
      description: "Изменения успешно сохранены"
    });
  };

  const handleFeatureChange = (id: number, field: 'title' | 'description' | 'icon', value: string) => {
    setFeaturesData(features => 
      features.map(feature => 
        feature.id === id ? { ...feature, [field]: value } : feature
      )
    );
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
          <h1 className="text-3xl font-bold tracking-tight mb-6">Управление контентом</h1>
          
          <Tabs defaultValue="main">
            <TabsList className="mb-6">
              <TabsTrigger value="main">Главная страница</TabsTrigger>
              <TabsTrigger value="contacts">Контакты</TabsTrigger>
              <TabsTrigger value="rules">Правила</TabsTrigger>
            </TabsList>
            
            <TabsContent value="main">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Главная секция (Hero)</CardTitle>
                  <CardDescription>
                    Редактирование заголовка и описания на главной странице
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Заголовок</label>
                    <Input 
                      value={heroTitle} 
                      onChange={e => setHeroTitle(e.target.value)} 
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Описание</label>
                    <Textarea 
                      value={heroDescription} 
                      onChange={e => setHeroDescription(e.target.value)} 
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Блоки преимуществ</CardTitle>
                  <CardDescription>
                    Редактирование блоков с преимуществами проекта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {featuresData.map(feature => (
                      <Card key={feature.id} className="p-4">
                        <div className="grid gap-4">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Заголовок</label>
                            <Input 
                              value={feature.title} 
                              onChange={e => handleFeatureChange(feature.id, 'title', e.target.value)} 
                            />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium mb-1 block">Описание</label>
                            <Textarea 
                              value={feature.description} 
                              onChange={e => handleFeatureChange(feature.id, 'description', e.target.value)} 
                              rows={2}
                            />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium mb-1 block">Иконка</label>
                            <Select 
                              value={feature.icon} 
                              onValueChange={value => handleFeatureChange(feature.id, 'icon', value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите иконку" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="map">Карта</SelectItem>
                                <SelectItem value="wallet">Кошелек</SelectItem>
                                <SelectItem value="users">Пользователи</SelectItem>
                                <SelectItem value="shield">Щит</SelectItem>
                                <SelectItem value="star">Звезда</SelectItem>
                                <SelectItem value="settings">Настройки</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveMainPage}>Сохранить изменения</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="contacts">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                  <CardDescription>
                    Редактирование контактных данных проекта
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <Input 
                      value={contactEmail} 
                      onChange={e => setContactEmail(e.target.value)} 
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Discord</label>
                    <Input 
                      value={contactDiscord} 
                      onChange={e => setContactDiscord(e.target.value)} 
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">ВКонтакте</label>
                    <Input 
                      value={contactVK} 
                      onChange={e => setContactVK(e.target.value)} 
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={handleSaveContacts}>Сохранить контакты</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="rules">
              <Card>
                <CardHeader>
                  <CardTitle>Правила проекта</CardTitle>
                  <CardDescription>
                    Редактирование правил проекта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Textarea 
                      placeholder="Введите правила проекта"
                      rows={15}
                      className="min-h-[300px]"
                      defaultValue="1. Уважайте других игроков и администрацию.
2. Запрещены любые формы нарушения RP процесса.
3. Запрещено использование любых сторонних программ и модификаций.
4. Запрещено использование багов и эксплойтов.
5. Администрация оставляет за собой право изменять правила без предупреждения."
                    />
                    
                    <div className="flex justify-end">
                      <Button>Сохранить правила</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminContent;
