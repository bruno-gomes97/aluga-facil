import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import * as Styles from './Style';

const SignupHeader = () => {
	const { t } = useTranslation();

	return (
		<Styles.Header>
			<Styles.Container>
				<img src={logo} alt="Imagem logo" />
				<Styles.Span>DriveNow</Styles.Span>
			</Styles.Container>
			<Styles.Button href={"/"}>
				{t("login")}
			</Styles.Button>
		</Styles.Header>
	)
}

export default SignupHeader;