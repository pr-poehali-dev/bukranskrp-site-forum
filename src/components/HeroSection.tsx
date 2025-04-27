import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 opacity-10"></div>
      <div className="container relative px-4 py-16 md:py-24 lg:flex lg:items-center lg:py-32">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Добро пожаловать в{" "}
            <span className="bg-clip-text text-transparent hero-gradient">
              Букранск РП
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-prose mx-auto lg:mx-0">
            Погрузитесь в уникальный мир ролевой игры. Создайте своего персонажа, 
            найдите свое место в городе и начните новую жизнь в Букранске!
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link to="/register">
              <Button size="lg" className="animate-pulse">
                Начать игру
              </Button>
            </Link>
            <Link to="/forum">
              <Button variant="outline" size="lg">
                Форум сообщества
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1605279911656-40d70778c3fc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
            alt="Ночной город Букранск"
            className="mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
