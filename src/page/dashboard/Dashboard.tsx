import { useTranslation } from 'react-i18next';
import * as Styles from './Style';
import Overview from './overview-container/Overview';
import QuickActions from './quick-actions/QuickActions';
import RecentActivity from './recent-activity/RecentActivity';

const Dashboard = () => {
	const { t } = useTranslation();
	const firstName = localStorage.getItem("user")?.split(" ")[0];

	return (
		<div>
			<Styles.Container>
				<Styles.Title>{t("welcomeBack")}, {firstName}</Styles.Title>
				<Overview />
				<QuickActions />
				<RecentActivity />
			</Styles.Container>
		</div>
	)
}

export default Dashboard;