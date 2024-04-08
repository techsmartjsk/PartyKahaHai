import FlexDiv from '@/atoms/flex.div';
import NotificationPanel from '@/components/notification.panel';
import PartyComponent from '@/components/party.component';
import Sidebar from '@/components/sidebar';

export default function Party() {
  return (
    <FlexDiv>
      <Sidebar />
      <PartyComponent />
      <NotificationPanel />
    </FlexDiv>
  );
}
