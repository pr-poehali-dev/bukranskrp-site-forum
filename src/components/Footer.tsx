import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent hero-gradient">
              Букранск РП
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Лучший РП проект, где каждый найдет свое место в реалистичном городе Букранск.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-sm hover:text-primary transition-colors">
                  Правила
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-sm hover:text-primary transition-colors">
                  Форум
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Discord: discord.gg/bukransk
              </li>
              <li className="text-sm text-muted-foreground">
                VK: vk.com/bukransk_rp
              </li>
              <li className="text-sm text-muted-foreground">
                E-mail: info@bukransk-rp.ru
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Букранск РП. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
