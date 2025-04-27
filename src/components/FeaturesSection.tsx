import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, MessageSquare } from "lucide-react";

const features = [
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "Реалистичный город",
    description: "Исследуйте проработанный город Букранск с множеством локаций и возможностей"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Живое сообщество",
    description: "Присоединяйтесь к активному сообществу игроков и создавайте истории вместе"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Форум игроков",
    description: "Обсуждайте игровые события, задавайте вопросы и делитесь идеями на нашем форуме"
  }
];

const FeaturesSection = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Почему стоит играть с нами?</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Букранск РП предлагает уникальный опыт ролевой игры в проработанной вселенной
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <div className="mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
