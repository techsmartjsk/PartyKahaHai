import FlexDiv from "@/atoms/flex.div";
import HomeComponent from "@/components/home.component";
import NotificationPanel from "@/components/notification.panel";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <FlexDiv>
      <Sidebar/>
      <HomeComponent/>
      <NotificationPanel/>
    </FlexDiv>
  );
}
