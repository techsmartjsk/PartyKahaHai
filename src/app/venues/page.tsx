import FlexDiv from '@/atoms/flex.div';
import NotificationPanel from '@/components/notification.panel';
import Sidebar from '@/components/sidebar';
import VenueComponent from '@/components/venue.component';

export default function Party() {
  return (
    <FlexDiv>
      <Sidebar />
      <VenueComponent />
      <NotificationPanel />
    </FlexDiv>
  );
}
