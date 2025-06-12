import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../../../context/GlobalContext';
import * as Styles from './Style';


const Overview = () => {
	const { t } = useTranslation();
	const { vehicles, users, rentals } = useContext(GlobalContext);

	const totalVehicle = vehicles?.length;
	const rentedVehiclesCount = rentals?.reduce((count, rental) => {
		return rental.status === "active" ? count + 1 : count;
	}, 0);
	const totalUsers = users?.length;
	
	return(
		<Styles.Container>
			<Styles.Title>{t("overview")}</Styles.Title>
			<Styles.BoxContainer>
				<Styles.Box>
					<Styles.BoxTitle>
						{t("availableCars")}
					</Styles.BoxTitle>
					<Styles.TotalVehicle>
						{totalVehicle}
					</Styles.TotalVehicle>
				</Styles.Box>
				<Styles.Box>
					<Styles.BoxTitle>
						{t("rentedCars")}
					</Styles.BoxTitle>
					<Styles.TotalVehicle>
						{rentedVehiclesCount}
					</Styles.TotalVehicle>
				</Styles.Box>
				<Styles.Box>
					<Styles.BoxTitle>
						{t("totalUsers")}
					</Styles.BoxTitle>
					<Styles.TotalVehicle>
						{totalUsers}
					</Styles.TotalVehicle>
				</Styles.Box>
			</Styles.BoxContainer>
		</Styles.Container>
	)
}

export default Overview;