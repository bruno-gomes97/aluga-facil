import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../../../context/GlobalContext';
import * as Styles from './Style';


const RecentActivity = () => {
	const { t } = useTranslation();
	const { vehicles, rentals } = useContext(GlobalContext);

	if(!vehicles && !rentals) return;

	return (
		<Styles.Container>
			<Styles.Title>{t("recentActivity")}</Styles.Title>
			<Styles.Table>
				<Styles.Header>
					<Styles.TableCell>{t("car")}</Styles.TableCell>
					<Styles.TableCell>{t("rentalDate")}</Styles.TableCell>
					<Styles.TableCell>{t("returnDate")}</Styles.TableCell>
					<Styles.TableCell>{t("status")}</Styles.TableCell>
				</Styles.Header>
				<Styles.Body>
					{rentals
					.slice(-3) 
					.reverse() 
					.map((rental) => {
						const vehicle = vehicles.find(v => v.id === rental.vehicleId);

						return (
							<Styles.Row key={rental.id}>
								<Styles.TableCell>
									{vehicle ? `${vehicle.model} - ${vehicle.color}` : 'Veículo não encontrado'}
								</Styles.TableCell>
								<Styles.DateCell>{rental.startDate}</Styles.DateCell>
								<Styles.DateCell>{rental.endDate}</Styles.DateCell>
								<Styles.StatusCell>{rental.status === "active" ? <p>{t("active")}</p> : <p>{t("completed")}</p>}</Styles.StatusCell>
							</Styles.Row>
						);
					})}
				</Styles.Body>
			</Styles.Table>
		</Styles.Container>
	)
}

export default RecentActivity;