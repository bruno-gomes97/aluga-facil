import { Calendar, CarFront, CircleHelp, HomeIcon, Info, Users2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import * as Styles from './Style';

const Asidebar = () => {
	const { t } = useTranslation();
	return (
		<Styles.Container>
			<Styles.Header>
				<Styles.Title>{t("menu")}</Styles.Title>
				<Styles.Menu>
						<Styles.Link href='/dashboard'>
							<HomeIcon style={{color: "var(--color-text-primary)"}}/>
							{t("home")}
						</Styles.Link>
						<Styles.Link href='/dashboard'>
							<CarFront style={{color: "var(--color-text-primary)"}}/>
							{t("vehicles")}
						</Styles.Link>
						<Styles.Link href='/dashboard'>
							<Calendar style={{color: "var(--color-text-primary)"}}/>
							{t("rentals")}
						</Styles.Link>
						<Styles.Link href='/dashboard'>
							<Users2 style={{color: "var(--color-text-primary)"}}/>
							{t("profile")}
						</Styles.Link>
						<Styles.Link href='/dashboard'>
							<Info style={{color: "var(--color-text-primary)"}}/>
							{t("about")}
						</Styles.Link>
				</Styles.Menu>
			</Styles.Header>
			<Styles.Footer>
				<Styles.Button>{t("addCar")}</Styles.Button>
				<Styles.Button>{t("logout")}</Styles.Button>
				<Styles.Link>
					<CircleHelp style={{color: "var(--color-text-primary)"}}/>
					{t("helpAndFeedback")}
				</Styles.Link>
			</Styles.Footer>
		</Styles.Container>
	)
}

export default Asidebar;