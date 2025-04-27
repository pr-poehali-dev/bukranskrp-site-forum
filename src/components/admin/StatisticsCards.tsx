import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatisticCardProps {
  title: string;
  value: number;
  changeText: string;
}

const StatisticCard = ({ title, value, changeText }: StatisticCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{changeText}</p>
      </CardContent>
    </Card>
  );
};

const StatisticsCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
      <StatisticCard 
        title="Пользователи" 
        value={248} 
        changeText="+12% с прошлого месяца" 
      />
      
      <StatisticCard 
        title="Темы на форуме" 
        value={92} 
        changeText="+8% с прошлого месяца" 
      />
      
      <StatisticCard 
        title="Активных игроков" 
        value={64} 
        changeText="-3% с прошлой недели" 
      />
    </div>
  );
};

export default StatisticsCards;
