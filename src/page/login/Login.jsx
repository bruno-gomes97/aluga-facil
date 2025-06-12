import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../../context/GlobalContext';
import * as Styles from './Style';

const Login = () => {
	const { t } = useTranslation();
	const { users } = useContext(GlobalContext);
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	
	const handleOnSubmit = (e) => {
		e.preventDefault();

		const foundUser = users?.find(
			(userItem) => userItem.password === password && userItem.email === email
		);

		if(foundUser) {
			localStorage.setItem("user" , foundUser.fullName);
			window.location.href = '/dashboard';
		} else{
			alert("Usuário ou senha inválidos.");
		}

	}

	return (
		<div>
			<Styles.Title>{t("welcomeBack")}</Styles.Title>
			<Styles.FormContainer onSubmit={handleOnSubmit}>
				<Styles.ContainerInput>
					<Styles.Label>{t("email")}</Styles.Label>
					<Styles.Input 
						type="text"
						placeholder={t("email")}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</Styles.ContainerInput>
				<Styles.ContainerInput>
					<Styles.Label>{t("password")}</Styles.Label>
					<Styles.Input 
						type="password"
						placeholder={t("password")}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
					{t("noAccountPrompt")} <Styles.Link href={"/register"}>{t("creatAccount")}</Styles.Link>
				</Styles.Paragraph>
			</Styles.Container>
		</div>
	)
}

export default Login;