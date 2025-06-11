import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import SignupHeader from "../../components/signupHeader/SignupHeader";
import { GlobalContext } from "../../context/GlobalContext";
import * as Styles from "./Style";

const CreateAccount = () => {
	const { t } = useTranslation();
	const users = useContext(GlobalContext);

	const [ fullname, setFullname ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ phone, setPhone ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ confirmPassword, setConfirmPassword ] = useState("");

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		if(password !== confirmPassword) return;

		const user = {
			fullname,
			email,
			phone,
			password
		}

		try {
			const response = await fetch(`http://localhost:3001/usuarios`, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})

			const data = await response.json();

			if(!data) {
				alert("Erro ao cadastrar o usuário!")
			}

			alert("Usuário cadastrado com sucesso!");
			window.location.href = "/"
		} catch {
			alert("Erro ao cadastrar usuário!")
		}

	}

	return (
		<div>
			<SignupHeader />
			<Styles.Container>
				<Styles.Title>{t("creatAccount")}</Styles.Title>
				<Styles.FormContainer onSubmit={handleOnSubmit}>
					<Styles.InputContainer>
						<Styles.Label>{t("fullname")}</Styles.Label>
						<Styles.Input 
							type="text"
							placeholder={t("placeholderFullName")}
							value={fullname}
							onChange={(e) => setFullname(e.target.value)}
							required
						/>
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Label>{t("email")}</Styles.Label>
						<Styles.Input 
							type="text"
							placeholder={t("placeholderEmail")}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Label>{t("phone")}</Styles.Label>
						<Styles.Input 
							type="text"
							placeholder={t("placeholderPhoneNumber")}
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							required
						/>
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Label>{t("password")}</Styles.Label>
						<Styles.Input 
							type="text"
							placeholder={t("placeholderPassword")}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Label>{t("confirmPassword")}</Styles.Label>
						<Styles.Input 
							type="text"
							placeholder={t("placeholderConfirmPassword")}
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</Styles.InputContainer>
					<Styles.Button
						type="submit"	
					>
						{t("register")}
					</Styles.Button>
					
						<Styles.Paragraph>
							{t("alreadyHaveAccount")}
							<Styles.Link href={"/"}>{t("login")}</Styles.Link>
						</Styles.Paragraph>
				</Styles.FormContainer>
			</Styles.Container>
		</div>
	)
}

export default CreateAccount;