import { useTranslation } from 'react-i18next';
import * as Styles from './Style';

const Login = () => {
	const { t } = useTranslation();

	return (
		<div>
			<Styles.Title>{t("welcomeBack")}</Styles.Title>
			<Styles.FormContainer>
				<Styles.ContainerInput>
					<Styles.Label>{t("email")}</Styles.Label>
					<Styles.Input 
						type="text"
						placeholder={t("email")}
						required
					/>
				</Styles.ContainerInput>
				<Styles.ContainerInput>
					<Styles.Label>{t("password")}</Styles.Label>
					<Styles.Input 
						type="password"
						placeholder={t("password")}
						required
					/>
				</Styles.ContainerInput>
				<Styles.Button
					type='submit'
				>
					{t("login")}
				</Styles.Button>
			</Styles.FormContainer>
			<Styles.Container>
				<Styles.Link href='#'>{t("forgotPassword")}</Styles.Link>
				<Styles.Paragraph>
					{t("noAccountPrompt")} <Styles.Link>{t("creatAccount")}</Styles.Link>
				</Styles.Paragraph>
			</Styles.Container>
		</div>
	)
}

export default Login;