import HomeComponent from "@/components/home.component";
import NotificationPanel from "@/components/notification.panel";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex w-full">
      <Sidebar/>
      <HomeComponent/>
      <NotificationPanel/>
    </div>
  );
}
