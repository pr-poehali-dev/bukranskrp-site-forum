import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Имитация проверки логина и пароля
    setTimeout(() => {
      setLoading(false);

      // Проверка логина и пароля (для примера)
      if (username === "admin" && password === "admin") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify({ username, role: "admin" }));
        
        toast({
          title: "Вход выполнен успешно",
          description: "Добро пожаловать в панель администратора",
        });
        
        navigate("/admin");
      } else {
        toast({
          title: "Ошибка входа",
          description: "Неверный логин или пароль",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent hero-gradient mb-2">
              Букранск РП
            </h1>
          </Link>
          <p className="text-muted-foreground">Панель администратора</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Вход в систему</CardTitle>
            <CardDescription>Введите свои учетные данные для входа</CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Логин</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" type="button" asChild>
                <Link to="/">Назад на сайт</Link>
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Вход..." : "Войти"}
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <div className="mb-2">Для демонстрации используйте:</div>
          <code className="px-2 py-1 bg-muted rounded">Логин: admin / Пароль: admin</code>
        </div>
      </div>
    </div>
  );
};

export default Login;
