import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Plus, MessageCircle, Users, Star } from "lucide-react";

const forumCategories = [
  {
    id: "news",
    name: "Новости и анонсы",
    description: "Официальные новости и анонсы проекта",
    icon: <Star className="h-5 w-5" />,
    topics: 12,
    posts: 47
  },
  {
    id: "help",
    name: "Помощь новичкам",
    description: "Ответы на вопросы и руководства для начинающих",
    icon: <Users className="h-5 w-5" />,
    topics: 24,
    posts: 128
  },
  {
    id: "rp",
    name: "Ролевые истории",
    description: "Истории персонажей и ролевые отыгрыши",
    icon: <MessageCircle className="h-5 w-5" />,
    topics: 56,
    posts: 342
  }
];

const hotTopics = [
  {
    id: 101,
    title: "Обновление сервера — что нового?",
    author: "Администратор",
    replies: 15,
    views: 230,
    lastPost: "1 час назад"
  },
  {
    id: 102,
    title: "Конкурс историй: мой первый день в Букранске",
    author: "МодераторРП",
    replies: 42,
    views: 356,
    lastPost: "3 часа назад"
  },
  {
    id: 103,
    title: "Предложения по улучшению экономики города",
    author: "ЭкономистБукранска",
    replies: 28,
    views: 183,
    lastPost: "вчера"
  }
];

const Forum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Форум Букранск РП</h1>
            <p className="text-muted-foreground mt-1">
              Общайтесь, делитесь идеями и историями с сообществом
            </p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Поиск по форуму..." 
                className="pl-8 w-full md:w-[260px]" 
              />
            </div>
            
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Новая тема
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">Категории</TabsTrigger>
            <TabsTrigger value="hot">Горячие темы</TabsTrigger>
            <TabsTrigger value="recent">Недавние</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <div className="grid gap-4">
              {forumCategories.map((category) => (
                <Card key={category.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <CardTitle>{category.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="font-medium">{category.topics}</span> тем • 
                        <span className="font-medium ml-1">{category.posts}</span> сообщений
                      </div>
                      <Link to={`/forum/category/${category.id}`}>
                        <Button variant="outline" size="sm">Перейти</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hot">
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-medium">Тема</th>
                    <th className="text-center p-4 font-medium hidden md:table-cell">Ответы</th>
                    <th className="text-center p-4 font-medium hidden md:table-cell">Просмотры</th>
                    <th className="text-right p-4 font-medium">Последнее сообщение</th>
                  </tr>
                </thead>
                <tbody>
                  {hotTopics.map((topic, index) => (
                    <tr key={topic.id} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="p-4">
                        <Link to={`/forum/topic/${topic.id}`} className="font-medium hover:text-primary transition-colors">
                          {topic.title}
                        </Link>
                        <div className="text-sm text-muted-foreground">
                          От: {topic.author}
                        </div>
                      </td>
                      <td className="text-center p-4 hidden md:table-cell">{topic.replies}</td>
                      <td className="text-center p-4 hidden md:table-cell">{topic.views}</td>
                      <td className="text-right p-4 text-sm text-muted-foreground">{topic.lastPost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="flex items-center justify-center p-12">
              <div className="text-center">
                <Badge variant="outline" className="mb-4">Скоро</Badge>
                <h3 className="text-xl font-semibold mb-2">Раздел в разработке</h3>
                <p className="text-muted-foreground">
                  Мы работаем над этим разделом. Он будет доступен в ближайшее время!
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Forum;
