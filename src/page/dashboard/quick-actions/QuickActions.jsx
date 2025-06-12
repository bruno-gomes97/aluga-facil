import { useTranslation } from 'react-i18next';
import * as Styles from './Style';

const QuickActions = () => {
	const { t } = useTranslation();
	return (
		<Styles.Container>
			<Styles.Title>{t("quickActions")}</Styles.Title>
			<Styles.ContainerButton>
				<Styles.Button 
					href='#'
					style={{
						backgroundColor: "var(--color-button-primary)",
						color: "var(--color-text-secondary)"
					}}
				>
					{t("addNewCar")}
				</Styles.Button>

				<Styles.Button 
					href='#'
					style={{
						backgroundColor: "var(--color-button-secundary)",
						color: "var(--color-text-primary)"
					}}
				>
					{t("viewAllCars")}
				</Styles.Button>
			</Styles.ContainerButton>
		</Styles.Container>
	)
}

export default QuickActions;