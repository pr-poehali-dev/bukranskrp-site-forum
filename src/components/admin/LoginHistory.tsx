import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginRecord {
  username: string;
  ipAddress: string;
  time: string;
  status: "success" | "failed";
}

const LoginHistory = () => {
  const loginRecords: LoginRecord[] = [
    {
      username: "admin",
      ipAddress: "192.168.1.1",
      time: "Сегодня, 10:25",
      status: "success"
    },
    {
      username: "moderator",
      ipAddress: "192.168.1.2",
      time: "Вчера, 18:10",
      status: "success"
    },
    {
      username: "unknown",
      ipAddress: "192.168.1.3",
      time: "Вчера, 16:45",
      status: "failed"
    }
  ];

  return (
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
            {loginRecords.map((record, index) => (
              <tr key={index} className="text-sm border-t">
                <td className="p-2">{record.username}</td>
                <td className="p-2">{record.ipAddress}</td>
                <td className="p-2">{record.time}</td>
                <td className="p-2">
                  <span 
                    className={`text-xs px-2 py-1 rounded-full ${
                      record.status === "success" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {record.status === "success" ? "Успешно" : "Отказано"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default LoginHistory;
