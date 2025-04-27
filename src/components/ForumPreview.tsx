import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const recentTopics = [
  {
    id: 1,
    title: "Открытие нового бизнеса в центре города",
    author: "МэрБукранска",
    category: "Новости",
    replies: 24,
    date: "2 часа назад"
  },
  {
    id: 2,
    title: "Набор в полицейский департамент",
    author: "ШерифГорода",
    category: "Вакансии",
    replies: 15,
    date: "вчера"
  },
  {
    id: 3,
    title: "Как начать играть в Букранск РП?",
    author: "НовичокВГороде",
    category: "Помощь",
    replies: 8,
    date: "3 дня назад"
  }
];

const ForumPreview = () => {
  return (
    <section className="container py-12 md:py-16 bg-accent/50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Форум сообщества</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Узнавайте последние новости и общайтесь с другими игроками
        </p>
      </div>
      
      <div className="grid gap-6 max-w-4xl mx-auto">
        {recentTopics.map((topic) => (
          <Card key={topic.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl nav-link inline-block">
                  <Link to={`/forum/topic/${topic.id}`}>
                    {topic.title}
                  </Link>
                </CardTitle>
                <Badge variant="outline">{topic.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Автор: <span className="font-medium">{topic.author}</span> • {topic.date}
              </p>
            </CardContent>
            <CardFooter className="border-t pt-3 flex justify-between">
              <p className="text-sm">{topic.replies} сообщений</p>
              <Link to={`/forum/topic/${topic.id}`}>
                <Button variant="ghost" size="sm">Перейти к обсуждению</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link to="/forum">
          <Button size="lg">
            Перейти на форум
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ForumPreview;
