import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ActionRecord {
  action: string;
  user: string;
  time: string;
}

const RecentActions = () => {
  const actions: ActionRecord[] = [
    {
      action: "Добавлена новость \"Обновление правил сервера\"",
      user: "admin",
      time: "Сегодня, 09:15"
    },
    {
      action: "Отредактирован раздел \"О проекте\"",
      user: "admin",
      time: "Вчера, 16:30"
    },
    {
      action: "Забанен пользователь user1234",
      user: "moderator",
      time: "Вчера, 14:22"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Последние действия</CardTitle>
        <CardDescription>
          История действий администраторов на сайте
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {actions.map((action, index) => (
            <div key={index} className="flex items-start gap-4 border-l-4 border-primary pl-4">
              <div className="flex-1">
                <p className="font-medium">{action.action}</p>
                <p className="text-sm text-muted-foreground">{action.user} - {action.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActions;
