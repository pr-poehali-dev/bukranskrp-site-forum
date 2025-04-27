import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container flex flex-col items-center justify-center py-12 text-center">
        <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Страница не найдена</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Кажется, вы заблудились в Букранске. Эта страница не существует или была перемещена.
        </p>
        <Link to="/">
          <Button size="lg">
            Вернуться на главную
          </Button>
        </Link>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
