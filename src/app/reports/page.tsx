import FlexDiv from '@/atoms/flex.div';
import NotificationPanel from '@/components/notification.panel';
import ReportComponent from '@/components/report.component';
import Sidebar from '@/components/sidebar';

export default function Reports() {
  return (
    <FlexDiv>
      <Sidebar />
      <ReportComponent />
      <NotificationPanel />
    </FlexDiv>
  );
}
