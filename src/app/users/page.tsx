import FlexDiv from '@/atoms/flex.div';
import NotificationPanel from '@/components/notification.panel';
import Sidebar from '@/components/sidebar';
import UsersComponent from '@/components/user.component';

export default function Users() {
  return (
    <FlexDiv>
      <Sidebar />
      <UsersComponent />
      <NotificationPanel />
    </FlexDiv>
  );
}
