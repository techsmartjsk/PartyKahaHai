import FlexDiv from "@/atoms/flex.div";
import NotificationPanel from "@/components/notification.panel";
import RestaurantComponent from "@/components/restaurant.component";
import Sidebar from "@/components/sidebar";

export default function Restaurants(){
    return(
        <FlexDiv>
            <Sidebar/>
            <RestaurantComponent/>
            <NotificationPanel/>
        </FlexDiv>
    )
}