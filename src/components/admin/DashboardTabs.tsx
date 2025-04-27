import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuickActions from "./QuickActions";
import LoginHistory from "./LoginHistory";
import RecentActions from "./RecentActions";

const DashboardTabs = () => {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="mb-6">
        <TabsTrigger value="overview">Обзор</TabsTrigger>
        <TabsTrigger value="recent">Последние действия</TabsTrigger>
        <TabsTrigger value="analytics">Аналитика</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <div className="grid gap-6">
          <QuickActions />
          <LoginHistory />
        </div>
      </TabsContent>
      
      <TabsContent value="recent">
        <RecentActions />
      </TabsContent>
      
      <TabsContent value="analytics">
        <div className="flex items-center justify-center p-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Аналитика в разработке</h3>
            <p className="text-muted-foreground">
              Этот раздел будет доступен в следующем обновлении
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
